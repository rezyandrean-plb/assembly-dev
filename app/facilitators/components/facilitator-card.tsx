"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorCardProps {
  facilitator: Facilitator;
}

export function FacilitatorCard({ facilitator }: FacilitatorCardProps) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      data-oid="nd_owwl"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden" data-oid="0xuur81">
        <Image
          src={facilitator.image}
          alt={facilitator.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          data-oid="-txixxa"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          data-oid="zbgyfee"
        />

        {/* Floating Stats */}
        <div
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"
          data-oid="iuil:ko"
        >
          <div className="flex items-center gap-2 text-sm" data-oid="v3x2kl8">
            <Award className="w-4 h-4 text-blue-600" data-oid="21_47hw" />
            <span className="font-semibold text-gray-900" data-oid="-p04ocz">
              {facilitator.stats?.yearsExperience}+ years
            </span>
          </div>
        </div>

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 text-white" data-oid="sa3qyxt">
          <h3 className="text-xl font-bold mb-1" data-oid="u9l.q.t">
            {facilitator.name}
          </h3>
          <p className="text-blue-200 font-medium" data-oid="miex3sq">
            {facilitator.role}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6" data-oid="50t6b3w">
        <div className="mb-4" data-oid="ble809v">
          <div
            className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3"
            data-oid="67qw9e-"
          >
            {facilitator.specialty}
          </div>
          <p className="text-gray-600 leading-relaxed" data-oid="nw3fw0c">
            {facilitator.bio}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6" data-oid="ze4um5c">
          <div
            className="text-center p-3 bg-gray-50 rounded-lg"
            data-oid="m_n39eb"
          >
            <Users
              className="w-5 h-5 text-blue-600 mx-auto mb-1"
              data-oid="mg8wp9t"
            />
            <div className="text-lg font-bold text-gray-900" data-oid="nxmfuv-">
              {facilitator.stats?.studentsHelped.toLocaleString()}+
            </div>
            <div className="text-xs text-gray-600" data-oid="e1c:zlr">
              Students Helped
            </div>
          </div>
          <div
            className="text-center p-3 bg-gray-50 rounded-lg"
            data-oid="i9408l9"
          >
            <BookOpen
              className="w-5 h-5 text-blue-600 mx-auto mb-1"
              data-oid="wh78wqy"
            />
            <div className="text-lg font-bold text-gray-900" data-oid="wwme95-">
              {facilitator.stats?.coursesCreated}
            </div>
            <div className="text-xs text-gray-600" data-oid="rt.6mr-">
              Courses Created
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/facilitators/${facilitator.id}`} data-oid="qyjmmbc">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group"
            data-oid="eegisd5"
          >
            Learn More
            <ArrowRight
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
              data-oid="3k5-4p9"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
