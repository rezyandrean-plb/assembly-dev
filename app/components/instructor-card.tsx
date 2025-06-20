"use client";

import Image from "next/image";

export interface InstructorProps {
  name: string;
  image: string;
  title?: string;
  bio?: string;
}

export function InstructorCard({ name, image }: InstructorProps) {
  return (
    <div className="flex flex-col items-center" data-oid="a9m68dw">
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3"
        data-oid="nj91zqe"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
          data-oid="jp6co-p"
        />
      </div>
      <h3
        className="font-semibold text-center text-[#123B79]"
        data-oid="14k4zlk"
      >
        {name}
      </h3>
    </div>
  );
}
