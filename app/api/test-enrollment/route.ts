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

export async function POST(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Please log in first' }, { status: 401 })
    }

    const user = await getOrCreateUser(
      userEmail,
      request.headers.get('x-user-name') || undefined,
      request.headers.get('x-user-image') || undefined
    )

    // Test course data
    const testCourse = {
      id: "condo-investment-workshop",
      title: "Condo Investment Workshop: Building a Profitable Property Portfolio with Confidence",
      slug: "condo-investment-workshop",
      price: "Free"
    }

    // Check if already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: testCourse.id
        }
      }
    })

    if (existingEnrollment) {
      return NextResponse.json({ 
        message: 'Already enrolled in this course!',
        enrollment: existingEnrollment 
      })
    }

    // Create enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: user.id,
        courseId: testCourse.id,
        courseName: testCourse.title,
        courseSlug: testCourse.slug,
        price: 0
      }
    })

    // Log enrollment activity
    await prisma.activityLog.create({
      data: {
        userId: user.id,
        courseId: testCourse.id,
        actionType: 'ENROLLMENT',
        metadata: JSON.stringify({ 
          courseName: testCourse.title,
          source: 'test-enrollment'
        })
      }
    })

    // Create some sample progress
    await prisma.courseProgress.create({
      data: {
        userId: user.id,
        courseId: testCourse.id,
        enrollmentId: enrollment.id,
        lessonId: "lesson-1",
        lessonName: "Introduction to Condo Investment",
        completedAt: new Date(),
        timeSpent: 15
      }
    })

    await prisma.courseProgress.create({
      data: {
        userId: user.id,
        courseId: testCourse.id,
        enrollmentId: enrollment.id,
        lessonId: "lesson-2", 
        lessonName: "Market Analysis Fundamentals",
        timeSpent: 25
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Successfully enrolled in test course with sample progress!',
      enrollment,
      user: { name: user.name, email: user.email }
    })
  } catch (error) {
    console.error('Test enrollment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 