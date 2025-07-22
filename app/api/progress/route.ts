import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to create or find user
async function getOrCreateUser(userEmail: string, userName?: string, userImage?: string) {
  let user = await prisma.user.findUnique({
    where: { email: userEmail }
  })

  if (!user) {
    try {
      user = await prisma.user.create({
        data: {
          email: userEmail,
          name: userName || userEmail.split('@')[0],
          image: userImage || undefined
        }
      })
    } catch (error: any) {
      // If user creation fails due to unique constraint, try to find the user again
      if (error.code === 'P2002') {
        user = await prisma.user.findUnique({
          where: { email: userEmail }
        })
      }
      if (!user) {
        throw error
      }
    }
  }

  return user
}

// GET /api/progress?courseId=xxx - Get progress for a specific course
export async function GET(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await getOrCreateUser(
      userEmail,
      request.headers.get('x-user-name') || undefined,
      request.headers.get('x-user-image') || undefined
    )

    const { searchParams } = new URL(request.url)
    const courseId = searchParams.get('courseId')

    if (!courseId) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 })
    }

    // Get enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseId
        }
      }
    })

    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled in this course' }, { status: 404 })
    }

    // Get all progress for this course
    const progress = await prisma.courseProgress.findMany({
      where: {
        userId: user.id,
        courseId: courseId
      },
      orderBy: { createdAt: 'asc' }
    })

    // Calculate overall progress
    const totalLessons = 10 // This should come from course data
    const completedLessons = progress.filter(p => p.completedAt).length
    const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

    return NextResponse.json({
      enrollment,
      progress,
      progressPercentage: Math.round(progressPercentage),
      totalLessons,
      completedLessons
    })
  } catch (error) {
    console.error('Error fetching progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/progress - Update progress for a lesson
export async function POST(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await getOrCreateUser(
      userEmail,
      request.headers.get('x-user-name') || undefined,
      request.headers.get('x-user-image') || undefined
    )

    const { 
      courseId, 
      moduleId, 
      lessonId, 
      lessonName, 
      completed,
      videoPosition,
      quizScore,
      timeSpent,
      notes
    } = await request.json()

    if (!courseId) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 })
    }

    // Get enrollment
    const enrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: courseId
        }
      }
    })

    if (!enrollment) {
      return NextResponse.json({ error: 'Not enrolled in this course' }, { status: 404 })
    }

    // Update last accessed time for enrollment
    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: { lastAccessed: new Date() }
    })

    // Find or create progress record
    const existingProgress = await prisma.courseProgress.findFirst({
      where: {
        userId: user.id,
        courseId: courseId,
        moduleId: moduleId || undefined,
        lessonId: lessonId || undefined
      }
    })

    let progress
    if (existingProgress) {
      // Update existing progress
      progress = await prisma.courseProgress.update({
        where: { id: existingProgress.id },
        data: {
          ...(completed !== undefined && { completedAt: completed ? new Date() : null }),
          ...(videoPosition !== undefined && { videoPosition }),
          ...(quizScore !== undefined && { quizScore }),
          ...(timeSpent !== undefined && { timeSpent }),
          ...(notes !== undefined && { notes }),
          updatedAt: new Date()
        }
      })
    } else {
      // Create new progress record
      progress = await prisma.courseProgress.create({
        data: {
          userId: user.id,
          courseId: courseId,
          enrollmentId: enrollment.id,
          moduleId,
          lessonId,
          lessonName,
          completedAt: completed ? new Date() : null,
          videoPosition,
          quizScore,
          timeSpent,
          notes
        }
      })
    }

    // Log activity
    const actionType = completed ? 'LESSON_COMPLETE' : 'LESSON_START'
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        courseId: courseId,
        actionType,
        metadata: JSON.stringify({
          moduleId,
          lessonId,
          lessonName,
          videoPosition,
          quizScore,
          timeSpent
        })
      }
    })

    // Check if course is completed
    const allProgress = await prisma.courseProgress.findMany({
      where: {
        userId: user.id,
        courseId: courseId
      }
    })

    const totalLessons = 10 // This should come from course data
    const completedLessons = allProgress.filter(p => p.completedAt).length

    if (completedLessons >= totalLessons && enrollment.status !== 'COMPLETED') {
      // Mark course as completed
      await prisma.enrollment.update({
        where: { id: enrollment.id },
        data: { 
          status: 'COMPLETED',
          completedAt: new Date()
        }
      })

      // Log course completion
      await prisma.activityLog.create({
        data: {
          userId: user.id,
          courseId: courseId,
          actionType: 'COURSE_COMPLETE',
          metadata: JSON.stringify({
            totalLessons,
            completedLessons,
            courseName: enrollment.courseName
          })
        }
      })
    }

    return NextResponse.json({ 
      success: true,
      progress,
      progressPercentage: Math.round((completedLessons / totalLessons) * 100)
    })
  } catch (error) {
    console.error('Error updating progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 