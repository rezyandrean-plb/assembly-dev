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

// GET /api/enrollments - Get user's enrolled courses
export async function GET(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Unauthorized - No user email provided' }, { status: 401 })
    }

    const user = await getOrCreateUser(
      userEmail,
      request.headers.get('x-user-name') || undefined,
      request.headers.get('x-user-image') || undefined
    )

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: user.id,
        status: { in: ['ACTIVE', 'COMPLETED'] }
      },
      include: {
        progress: {
          orderBy: { updatedAt: 'desc' }
        }
      },
      orderBy: { enrolledAt: 'desc' }
    })

    // Calculate progress percentage for each enrollment
    const enrollmentsWithProgress = enrollments.map(enrollment => {
      const totalLessons = 10 // This should come from course data
      const completedLessons = enrollment.progress.filter(p => p.completedAt).length
      const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0
      
      return {
        ...enrollment,
        progressPercentage: Math.round(progressPercentage)
      }
    })

    return NextResponse.json(enrollmentsWithProgress)
  } catch (error) {
    console.error('Error fetching enrollments:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/enrollments - Enroll user in course(s)
export async function POST(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Unauthorized - No user email provided' }, { status: 401 })
    }

    const user = await getOrCreateUser(
      userEmail,
      request.headers.get('x-user-name') || undefined,
      request.headers.get('x-user-image') || undefined
    )

    const { courses, orderId } = await request.json()

    if (!courses || !Array.isArray(courses)) {
      return NextResponse.json({ error: 'Invalid courses data' }, { status: 400 })
    }

    // Create enrollments for each course
    const enrollments = await Promise.all(
      courses.map(async (course: any) => {
        // Check if already enrolled
        const existingEnrollment = await prisma.enrollment.findUnique({
          where: {
            userId_courseId: {
              userId: user.id,
              courseId: course.id.toString()
            }
          }
        })

        if (existingEnrollment) {
          return existingEnrollment
        }

        // Create new enrollment
        const enrollment = await prisma.enrollment.create({
          data: {
            userId: user.id,
            courseId: course.id.toString(),
            courseName: course.title,
            courseSlug: course.slug,
            price: typeof course.price === 'number' ? course.price : parseFloat(course.price.toString().replace(/[^0-9.-]/g, '')) || 0
          }
        })

        // Log enrollment activity
        await prisma.activityLog.create({
          data: {
            userId: user.id,
            courseId: course.id.toString(),
            actionType: 'ENROLLMENT',
            metadata: JSON.stringify({ orderId, courseName: course.title })
          }
        })

        return enrollment
      })
    )

    return NextResponse.json({ 
      success: true, 
      enrollments,
      message: `Successfully enrolled in ${enrollments.length} course(s)`
    })
  } catch (error) {
    console.error('Error creating enrollments:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 