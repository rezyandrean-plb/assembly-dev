import type { InstructorProps } from "@/app/components/instructor-card"

// Simplified instructor information with only name and image
export const instructors: Record<string, Pick<InstructorProps, "name" | "image">> = {
  "melvin-lim": {
    name: "Melvin Lim",
    image: "https://www.propertylimbrothers.com/wp-content/uploads/2017/10/Melvin-Lim_Headshot_V2_900px.jpg",
  },
  "nicole-ng": {
    name: "Nicole Ng",
    image: "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/07/29090251/Nicole1.jpg",
  },
  "adrian-lim": {
    name: "Adrian Lim",
    image:
      "https://plb-integrity1-media.propertylimbrothers.com/wp-content/uploads/2022/09/29080058/AdrianLim_new_9x9.jpg",
  },
  "sarah-chen": {
    name: "Sarah Chen",
    image: "/confident-asian-professional.png",
  },
}

// Helper function to get instructor by ID
export function getInstructor(id: string): Pick<InstructorProps, "name" | "image"> {
  const instructor = instructors[id]
  if (!instructor) {
    throw new Error(`Instructor with ID "${id}" not found`)
  }
  return instructor
}

// Helper function to get multiple instructors by ID
export function getInstructors(ids: string[]): Array<Pick<InstructorProps, "name" | "image">> {
  return ids.map((id) => getInstructor(id))
}
