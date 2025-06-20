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
      data-oid="ugx_eru"
    >
      {/* Background Elements */}
      <div className="absolute inset-0" data-oid=".7tex7x">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
          data-oid="4x06:oa"
        />

        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"
          data-oid="6ojy2ia"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="f2ecb1i">
        <div className="max-w-6xl mx-auto" data-oid="03v8qsa">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            data-oid="_5o:no:"
          >
            {/* Content */}
            <motion.div
              className="text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="y5g-g3n"
            >
              <div
                className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
                data-oid="2aoe3c4"
              >
                {facilitator.specialty}
              </div>

              <h1
                className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
                data-oid="ttvlowc"
              >
                {facilitator.name}
              </h1>

              <p
                className="text-xl text-blue-200 mb-6 font-medium"
                data-oid="qfdbdhe"
              >
                {facilitator.role}
              </p>

              <p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                data-oid="r0813y4"
              >
                {facilitator.experience}
              </p>

              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                data-oid="u5exgm0"
              >
                {facilitator.description}
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid md:grid-cols-1 gap-8 max-w-xs mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                data-oid="n7-i.r7"
              >
                <div className="text-center" data-oid="p7:xb6w">
                  <div
                    className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4"
                    data-oid="xnpqq4j"
                  >
                    <BookOpen
                      className="w-8 h-8 text-white"
                      data-oid="82u86o9"
                    />
                  </div>
                  <div className="text-3xl font-bold mb-2" data-oid="2.qb92_">
                    {facilitator.stats?.coursesCreated}
                  </div>
                  <div className="text-blue-200" data-oid="p966nnk">
                    Courses Created
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              {facilitator.socialLinks && (
                <div className="flex gap-4" data-oid="0orfzd5">
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
                          data-oid="ipxp-bi"
                        >
                          <Icon
                            className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                            data-oid="jyb:t12"
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
              data-oid="201tgje"
            >
              <div className="relative" data-oid="0nj-9hu">
                <div
                  className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                  data-oid="x_ua-9l"
                >
                  <Image
                    src={facilitator.image}
                    alt={facilitator.name}
                    fill
                    className="object-cover"
                    data-oid="3_9nbox"
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
                  data-oid="da6bk3r"
                >
                  <div className="flex items-center gap-2" data-oid="c-on3-2">
                    <Award
                      className="w-5 h-5 text-blue-600"
                      data-oid="qs489.0"
                    />

                    <div data-oid="hxoga8k">
                      <div
                        className="text-sm font-bold text-gray-900"
                        data-oid="no30-u8"
                      >
                        Expert
                      </div>
                      <div className="text-xs text-gray-600" data-oid="66dvg3a">
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
