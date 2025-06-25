import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

// GET /api/progress?courseId=xxx - Get progress for a specific course
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    // Create user if doesn't exist
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name || session.user.email.split('@')[0],
          image: session.user.image
        }
      })
    }

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
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    // Create user if doesn't exist
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name || session.user.email.split('@')[0],
          image: session.user.image
        }
      })
    }

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
        courseId: courseId,
        completedAt: { not: null }
      }
    })

    const totalLessons = 10 // This should come from course data
    if (allProgress.length >= totalLessons && enrollment.status !== 'COMPLETED') {
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
          metadata: JSON.stringify({ courseName: enrollment.courseName })
        }
      })
    }

    return NextResponse.json({ 
      success: true, 
      progress,
      message: completed ? 'Lesson completed!' : 'Progress saved!'
    })
  } catch (error) {
    console.error('Error updating progress:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 