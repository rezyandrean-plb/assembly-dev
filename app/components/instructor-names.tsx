"use client";

import { useEffect, useState } from "react";
import { getFacilitator, Facilitator } from "@/app/data/facilitators";
import { Users } from "lucide-react";

interface InstructorNamesProps {
  instructorIds: string[];
}

export default function InstructorNames({
  instructorIds,
}: InstructorNamesProps) {
  const [instructors, setInstructors] = useState<Facilitator[]>([]);

  useEffect(() => {
    const facilitatorDetails = instructorIds
      .map((id) => {
        if (id === "tbd") {
          // Handle "To be announced" case
          return {
            id: "tbd",
            name: "To be announced",
            role: "",
            image: "",
            bio: "",
            longBio: "",
            specialty: "",
            experience: "",
            courses: [],
          } as Facilitator;
        }
        const facilitator = getFacilitator(id);
        return facilitator;
      })
      .filter(Boolean) as Facilitator[];
    setInstructors(facilitatorDetails);
  }, [instructorIds]);

  if (instructors.length === 0) {
    return null;
  }

  return (
    <div
      className="text-gray-600 text-sm mb-4 flex items-center"
      data-oid="h18qw60"
    >
      <Users className="w-4 h-4 mr-2" data-oid="0:jgvsr" />
      <span data-oid="j786.h3">
        {instructors.map((i) => i.name).join(", ")}
      </span>
    </div>
  );
}
