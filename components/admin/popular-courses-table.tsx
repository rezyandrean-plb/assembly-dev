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
    <div className="space-y-4" data-oid="8h5790t">
      {popularCourses.map((course) => (
        <div key={course.id} className="space-y-2" data-oid=":ki5ia_">
          <div className="flex items-center justify-between" data-oid="zfbo-rr">
            <div data-oid="5:4b569">
              <p className="text-sm font-medium" data-oid="jwtulu9">
                {course.title}
              </p>
              <div className="flex items-center gap-2" data-oid="k:uv2kx">
                <Badge
                  variant="outline"
                  className="text-xs border-[#123B79] text-[#123B79]"
                  data-oid="p:t6hiy"
                >
                  {course.category}
                </Badge>
                <span
                  className="text-xs text-muted-foreground"
                  data-oid="3qjmzq:"
                >
                  {course.enrollments} enrollments
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2" data-oid="rlxsgn-">
            <Progress
              value={course.completionRate}
              className="h-2 bg-gray-200"
              data-oid="hm57ffh"
            />

            <span className="text-xs font-medium" data-oid="9j3zir1">
              {course.completionRate}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
