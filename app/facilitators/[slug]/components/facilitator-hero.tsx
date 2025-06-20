"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Calendar,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Facilitator } from "@/app/data/facilitators";

interface FacilitatorHeroProps {
  facilitator: Facilitator;
}

export function FacilitatorHero({ facilitator }: FacilitatorHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden"
      data-oid="0m7m2.x"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid="ou-3d8j">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          data-oid="mmc2e7w"
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
          data-oid="4c3___n"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="fod-m3j">
        <div className="max-w-6xl mx-auto" data-oid="z73fneh">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="huxsx_c"
          >
            {/* Content */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="yd9tf81"
            >
              <div
                className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
                data-oid="av.33b4"
              >
                {facilitator.specialty}
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                data-oid="p1vb78u"
              >
                {facilitator.name}
              </h1>

              <p
                className="text-xl text-blue-200 mb-6 font-medium"
                data-oid="nfxmdze"
              >
                {facilitator.role}
              </p>

              <p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                data-oid="nh.zp:0"
              >
                {facilitator.experience}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8" data-oid="gywb:13">
                <div className="text-center" data-oid="8pq0ask">
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    data-oid="ww.g7uc"
                  >
                    {facilitator.stats?.yearsExperience}+
                  </div>
                  <div className="text-sm text-blue-200" data-oid="kxywm4:">
                    Years Experience
                  </div>
                </div>
                <div className="text-center" data-oid="7.:2x-k">
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    data-oid="d1nv5u7"
                  >
                    {facilitator.stats?.studentsHelped.toLocaleString()}+
                  </div>
                  <div className="text-sm text-blue-200" data-oid="jz1woqf">
                    Students Helped
                  </div>
                </div>
                <div className="text-center" data-oid="s:is9_i">
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    data-oid="-au0358"
                  >
                    {facilitator.stats?.coursesCreated}
                  </div>
                  <div className="text-sm text-blue-200" data-oid="_r2jqg2">
                    Courses Created
                  </div>
                </div>
              </div>

              {/* Social Links */}
              {facilitator.socialLinks && (
                <div className="flex gap-4" data-oid=":_8duqq">
                  {Object.entries(facilitator.socialLinks).map(
                    ([platform, url]) => {
                      const Icon =
                        socialIcons[platform as keyof typeof socialIcons];
                      return (
                        <Link
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                          data-oid="zvq8c90"
                        >
                          <Icon
                            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                            data-oid="k14skar"
                          />
                        </Link>
                      );
                    },
                  )}
                </div>
              )}
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="cy2p6p5"
            >
              <div className="relative" data-oid="70s.2xb">
                <div
                  className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                  data-oid="6170m80"
                >
                  <Image
                    src={facilitator.image}
                    alt={facilitator.name}
                    fill
                    className="object-cover"
                    data-oid="1-x_5.7"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  data-oid="1c:x0xd"
                >
                  <div className="flex items-center gap-2" data-oid="u1rmz0.">
                    <Award
                      className="w-5 h-5 text-blue-600"
                      data-oid="jkf0-69"
                    />
                    <div data-oid="n__a8zs">
                      <div
                        className="text-sm font-bold text-gray-900"
                        data-oid="wsynguq"
                      >
                        Expert
                      </div>
                      <div className="text-xs text-gray-600" data-oid="qynpw05">
                        Facilitator
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
