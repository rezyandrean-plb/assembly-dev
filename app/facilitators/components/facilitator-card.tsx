"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Quote,
  Star,
  Linkedin,
  Twitter,
  Instagram,
  BookOpen,
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
      className={`group relative ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex gap-12 items-center py-16`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      data-oid="l17l:eo"
    >
      {/* Image Section */}
      <div className="relative lg:w-2/5" data-oid="utjjisu">
        <div className="relative" data-oid="s00.tsg">
          {/* Main Image Container */}
          <div
            className="relative w-96 h-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-gray-100 to-gray-200"
            data-oid="durp8n9"
          >
            <Image
              src={facilitator.image}
              alt={facilitator.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-oid="ynyzx8."
            />

            {/* Subtle Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
              data-oid="2wtkbkg"
            />

            {/* Specialty Badge */}
            <div
              className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-100"
              data-oid="n0-ik5w"
            >
              <div className="flex items-center gap-2" data-oid="r6j10ws">
                <Star className="w-4 h-4 text-blue-600" data-oid="_:328si" />
                <span
                  className="text-sm font-bold text-gray-900"
                  data-oid="sldwp1k"
                >
                  Expert
                </span>
              </div>
            </div>

            {/* Social Links */}
            {facilitator.socialLinks && (
              <div
                className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="zp4n:.w"
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
                        className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg border border-gray-100"
                        data-oid="ri36w07"
                      >
                        <Icon
                          className="w-4 h-4 text-gray-700"
                          data-oid="rcpvr0_"
                        />
                      </Link>
                    );
                  },
                )}
              </div>
            )}

            {/* Course Count Badge */}
            <div
              className="absolute bottom-6 left-6 bg-blue-600 text-white rounded-full px-4 py-2 shadow-lg"
              data-oid="ur.9f09"
            >
              <div className="flex items-center gap-2" data-oid="0n4buc6">
                <BookOpen className="w-4 h-4" data-oid="yzsleyl" />
                <span className="text-sm font-bold" data-oid="4dyj-u1">
                  {facilitator.stats?.coursesCreated} Courses
                </span>
              </div>
            </div>
          </div>

          {/* Floating Quote */}
          <motion.div
            className={`absolute -bottom-8 ${isEven ? "-right-8" : "-left-8"} bg-white rounded-2xl p-6 shadow-xl max-w-sm border-l-4 border-blue-500`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            data-oid=":eqtg8e"
          >
            <Quote className="w-5 h-5 text-blue-600 mb-3" data-oid="mr7:93x" />
            <p
              className="text-sm text-gray-700 italic leading-relaxed"
              data-oid="kvfa4ob"
            >
              "Empowering investors with practical knowledge and proven
              strategies."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-3/5 space-y-8" data-oid="09al42p">
        {/* Header */}
        <div data-oid="poa7.__">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-100"
            data-oid="1hq0ho2"
          >
            <Star className="w-4 h-4" data-oid="gmcmv28" />
            {facilitator.specialty}
          </div>

          <h3
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            data-oid="c8xn4lu"
          >
            {facilitator.name}
          </h3>

          <p
            className="text-2xl text-blue-600 font-semibold mb-6"
            data-oid="94gfy8g"
          >
            {facilitator.role}
          </p>

          <p
            className="text-gray-600 leading-relaxed text-xl"
            data-oid="w24mswm"
          >
            {facilitator.bio}
          </p>
        </div>

        {/* Key Achievements */}
        <div
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
          data-oid="g.gdmmf"
        >
          <h4
            className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3"
            data-oid="dn.ojao"
          >
            <div
              className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
              data-oid="zz2azv5"
            >
              <Star className="w-4 h-4 text-blue-600" data-oid="c96lw_2" />
            </div>
            Notable Achievements
          </h4>
          <ul className="space-y-4" data-oid="2ftp11l">
            {facilitator.achievements.slice(0, 3).map((achievement, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4"
                data-oid="-6yiou6"
              >
                <div
                  className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"
                  data-oid="sl4.ct8"
                />

                <span
                  className="text-gray-700 text-lg leading-relaxed"
                  data-oid="k7lmoma"
                >
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4" data-oid="f8bisd9">
          <Link
            href={`/facilitators/${facilitator.id}`}
            className="flex-1"
            data-oid="8fkty.-"
          >
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
              data-oid="wa6jsgw"
            >
              Meet {facilitator.name.split(" ")[0]}
              <ArrowRight
                className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform"
                data-oid="3:kws3l"
              />
            </Button>
          </Link>
          <Link href="/courses" data-oid="mkg_zxm">
            <Button
              variant="outline"
              className="px-8 py-4 rounded-xl border-2 border-gray-300 hover:bg-gray-50 text-lg font-semibold transition-all duration-300"
              data-oid=".9q1cnl"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
