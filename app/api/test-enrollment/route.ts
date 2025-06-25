import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Please log in first' }, { status: 401 })
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name || session.user.email.split('@')[0],
          image: session.user.image
        }
      })
    }

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