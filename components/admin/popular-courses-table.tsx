import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function PopularCoursesTable() {
  const popularCourses = [
    {
      id: 1,
      title: "Making The Right Move",
      category: "HDB, Webinar",
      enrollments: 245,
      completionRate: 78,
    },
    {
      id: 2,
      title: "The Shift in Singapore's Real Estate Market 2023",
      category: "Analysis",
      enrollments: 189,
      completionRate: 65,
    },
    {
      id: 3,
      title: "The Art of Real Estate Investment",
      category: "Analysis, Investment",
      enrollments: 156,
      completionRate: 72,
    },
    {
      id: 4,
      title: "Module 1 of Niche Positioning Masterclass",
      category: "Masterclass, Webinar",
      enrollments: 132,
      completionRate: 58,
    },
  ];

  return (
    <div className="space-y-4">
      {popularCourses.map((course) => (
        <div key={course.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{course.title}</p>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="text-xs border-[#123B79] text-[#123B79]"
                >
                  {course.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {course.enrollments} enrollments
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Progress
              value={course.completionRate}
              className="h-2 bg-gray-200"
            />

            <span className="text-xs font-medium">
              {course.completionRate}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
