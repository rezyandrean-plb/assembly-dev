"use client";

import Image from "next/image";

export interface InstructorProps {
  name: string;
  image: string;
}

export function InstructorCard({ name, image }: InstructorProps) {
  return (
    <div className="flex flex-col items-center" data-oid="tt_ecg:">
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3"
        data-oid="5omdo.0"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
          data-oid="a41ck_w"
        />
      </div>
      <h3
        className="font-semibold text-center text-[#123B79]"
        data-oid="g.x0dgv"
      >
        {name}
      </h3>
    </div>
  );
}
