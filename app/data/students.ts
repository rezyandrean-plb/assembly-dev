export interface Student {
  id: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  joinDate: string;
  enrolledCourses: string[]; // Course slugs
  completedCourses: string[]; // Course slugs
  reviews: {
    courseSlug: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  isPublic: boolean;
  stats: {
    totalCourses: number;
    completedCourses: number;
    totalHours: number;
  };
}

export const students: Student[] = [
  {
    id: "gilbert-tan",
    username: "gilberttanjh",
    name: "Gilbert Tan",
    image: "/profile-placeholder.png",
    bio: "Property enthusiast and investor. Always looking to learn more about the Singapore property market.",
    joinDate: "2023-08-15",
    enrolledCourses: [
      "making-the-right-move",
      "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo",
      "property-financing-strategy-mastery",
      "new-launch-condo-selection-strategies",
    ],
    completedCourses: [
      "making-the-right-move",
      "hdb-upgraders-101-secrets-to-upgrading-from-a-hdb-to-a-condo",
    ],
    reviews: [
      {
        courseSlug: "making-the-right-move",
        rating: 5,
        comment: "Great content",
        date: "3 months ago",
      },
    ],
    isPublic: true,
    stats: {
      totalCourses: 4,
      completedCourses: 2,
      totalHours: 12,
    },
  },
  // Add more students as needed
];

// Helper functions
export function getStudent(username: string): Student | undefined {
  return students.find((student) => student.username === username);
}

export function getStudentById(id: string): Student | undefined {
  return students.find((student) => student.id === id);
}

export function getAllStudents(): Student[] {
  return students.filter((student) => student.isPublic);
}

export function getStudentCourses(username: string) {
  const student = getStudent(username);
  if (!student) return { enrolled: [], completed: [] };

  return {
    enrolled: student.enrolledCourses,
    completed: student.completedCourses,
  };
}
