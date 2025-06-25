import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    // Get user email from request headers (sent by frontend)
    const userEmail = request.headers.get('x-user-email')
    
    if (!userEmail) {
      return NextResponse.json({ error: 'Unauthorized - No user email provided' }, { status: 401 })
    }

    let user = await prisma.user.findUnique({
      where: { email: userEmail }
    })

    // Create user if doesn't exist
    if (!user) {
      const userName = request.headers.get('x-user-name') || userEmail.split('@')[0]
      try {
        user = await prisma.user.create({
          data: {
            email: userEmail,
            name: userName,
            image: request.headers.get('x-user-image') || undefined
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

    // Get enrollment stats
    const enrollmentStats = await prisma.enrollment.groupBy({
      by: ['status'],
      where: { userId: user.id },
      _count: { status: true }
    })

    // Get completed courses count
    const completedCoursesCount = await prisma.enrollment.count({
      where: {
        userId: user.id,
        status: 'COMPLETED'
      }
    })

    // Get total courses enrolled
    const totalEnrolledCount = await prisma.enrollment.count({
      where: {
        userId: user.id,
        status: { in: ['ACTIVE', 'COMPLETED'] }
      }
    })

    // Get total learning time (in hours)
    const totalTimeResult = await prisma.courseProgress.aggregate({
      where: { userId: user.id },
      _sum: { timeSpent: true }
    })
    const totalLearningHours = Math.round((totalTimeResult._sum.timeSpent || 0) / 60)

    // Get recent activity
    const recentActivity = await prisma.activityLog.findMany({
      where: { userId: user.id },
      orderBy: { timestamp: 'desc' },
      take: 10
    })

    // Get current streak (consecutive days with activity)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    let currentStreak = 0
    let checkDate = new Date(today)
    
    while (currentStreak < 30) { // Max check 30 days
      const dayStart = new Date(checkDate)
      const dayEnd = new Date(checkDate)
      dayEnd.setHours(23, 59, 59, 999)
      
      const dayActivity = await prisma.activityLog.findFirst({
        where: {
          userId: user.id,
          timestamp: {
            gte: dayStart,
            lte: dayEnd
          }
        }
      })
      
      if (dayActivity) {
        currentStreak++
        checkDate.setDate(checkDate.getDate() - 1)
      } else {
        break
      }
    }

    // Calculate completion rate
    const completionRate = totalEnrolledCount > 0 
      ? Math.round((completedCoursesCount / totalEnrolledCount) * 100)
      : 0

    const stats = {
      totalCourses: totalEnrolledCount,
      completedCourses: completedCoursesCount,
      activeCourses: totalEnrolledCount - completedCoursesCount,
      totalLearningHours,
      currentStreak,
      completionRate,
      recentActivity: recentActivity.map(activity => ({
        id: activity.id,
        actionType: activity.actionType,
        courseId: activity.courseId,
        timestamp: activity.timestamp,
        metadata: activity.metadata ? JSON.parse(activity.metadata) : null
      }))
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching user stats:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 