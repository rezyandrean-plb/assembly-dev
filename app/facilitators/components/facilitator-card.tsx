"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Quote,
  Star,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorCardProps {
  facilitator: Facilitator;
  index: number;
}

export function FacilitatorCard({ facilitator, index }: FacilitatorCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`group relative ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex gap-8 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      data-oid="lao2o9v"
    >
      {/* Image Section */}
      <div className="relative lg:w-1/2" data-oid="ktq2r9m">
        <div className="relative" data-oid="jxcxu7_">
          {/* Main Image */}
          <div
            className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            data-oid="vvjaay."
          >
            <Image
              src={facilitator.image}
              alt={facilitator.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-oid="2.dguto"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              data-oid="pdcqi.r"
            />

            {/* Experience Badge */}
            <div
              className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
              data-oid="1y2vs1-"
            >
              <div className="flex items-center gap-2" data-oid="q2.npj_">
                <Award className="w-4 h-4 text-blue-600" data-oid="woazq03" />
                <span
                  className="text-sm font-bold text-gray-900"
                  data-oid="e4dgr8p"
                >
                  {facilitator.stats?.yearsExperience}+ Years
                </span>
              </div>
            </div>

            {/* Social Links */}
            {facilitator.socialLinks && (
              <div
                className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="yh94luh"
              >
                {Object.entries(facilitator.socialLinks).map(
                  ([platform, url]) => {
                    const icons = {
                      linkedin: Linkedin,
                      twitter: Twitter,
                      instagram: Instagram,
                    };
                    const Icon = icons[platform as keyof typeof icons];
                    return (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                        data-oid="u.g3k1-"
                      >
                        <Icon
                          className="w-4 h-4 text-gray-700"
                          data-oid="3h5r3-3"
                        />
                      </Link>
                    );
                  },
                )}
              </div>
            )}
          </div>

          {/* Floating Quote */}
          <motion.div
            className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} bg-white rounded-2xl p-6 shadow-xl max-w-xs border-l-4 border-blue-500`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            data-oid="i741cul"
          >
            <Quote className="w-5 h-5 text-blue-600 mb-2" data-oid="7mf508j" />
            <p
              className="text-sm text-gray-700 italic leading-relaxed"
              data-oid="439o9v."
            >
              "Empowering investors with practical knowledge and proven
              strategies."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 space-y-6" data-oid="990bfi9">
        {/* Header */}
        <div data-oid="f:zmufs">
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            data-oid="qaamgha"
          >
            <Star className="w-4 h-4" data-oid="00.4joc" />
            {facilitator.specialty}
          </div>

          <h3
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            data-oid="r8c9l0g"
          >
            {facilitator.name}
          </h3>

          <p
            className="text-xl text-blue-600 font-semibold mb-4"
            data-oid="-stvp5h"
          >
            {facilitator.role}
          </p>

          <p
            className="text-gray-600 leading-relaxed text-lg"
            data-oid="qmt0k2r"
          >
            {facilitator.bio}
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-3 gap-4" data-oid="sba.2gb">
          <div
            className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
            data-oid="5yei8rx"
          >
            <div
              className="text-2xl font-bold text-blue-900 mb-1"
              data-oid="5m2wjno"
            >
              {facilitator.stats?.studentsHelped.toLocaleString()}+
            </div>
            <div
              className="text-xs text-blue-700 font-medium"
              data-oid="mgfb06c"
            >
              Students Mentored
            </div>
          </div>
          <div
            className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
            data-oid="9qaz-50"
          >
            <div
              className="text-2xl font-bold text-green-900 mb-1"
              data-oid="-u1orn2"
            >
              {facilitator.stats?.coursesCreated}
            </div>
            <div
              className="text-xs text-green-700 font-medium"
              data-oid="1x4zd:_"
            >
              Expert Courses
            </div>
          </div>
          <div
            className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl"
            data-oid="m2k5oh."
          >
            <div
              className="text-2xl font-bold text-orange-900 mb-1"
              data-oid="_tza2t1"
            >
              {facilitator.stats?.yearsExperience}+
            </div>
            <div
              className="text-xs text-orange-700 font-medium"
              data-oid=".f6_kbi"
            >
              Years Experience
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4" data-oid="u3zs47f">
          <Link
            href={`/facilitators/${facilitator.id}`}
            className="flex-1"
            data-oid="immi9i4"
          >
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl group"
              data-oid="jf0.hqi"
            >
              Meet {facilitator.name.split(" ")[0]}
              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                data-oid="jd-bk7."
              />
            </Button>
          </Link>
          <Link href="/courses" data-oid="nvxh0dg">
            <Button
              variant="outline"
              className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50"
              data-oid="l_:zyf1"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
