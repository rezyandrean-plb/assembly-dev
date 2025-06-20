"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Star,
  Linkedin,
  Twitter,
  Instagram,
  Quote,
  CheckCircle,
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
      className="relative py-20 bg-white overflow-hidden"
      data-oid="808o-l:"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20"
        data-oid=":fykm.o"
      />

      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"
        data-oid=":q7y-zb"
      />

      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full blur-3xl"
        data-oid="e:admc0"
      />

      <div className="container mx-auto px-4 relative z-10" data-oid="qfgl-tz">
        <div className="max-w-7xl mx-auto" data-oid="j0od1pd">
          <div
            className="grid lg:grid-cols-5 gap-12 items-center"
            data-oid="iabrnve"
          >
            {/* Image Section - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8 }}
              data-oid="_2punyr"
            >
              <div className="relative" data-oid="f::8fj-">
                {/* Main Image */}
                <div
                  className="relative w-full max-w-md mx-auto"
                  data-oid="egaes7o"
                >
                  <div
                    className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200"
                    data-oid="ov5eij9"
                  >
                    <Image
                      src={facilitator.image}
                      alt={facilitator.name}
                      fill
                      className="object-cover"
                      data-oid="0ql4ni6"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    data-oid="uzwr-0s"
                  >
                    <div className="flex items-center gap-3" data-oid=".:lg1us">
                      <div
                        className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                        data-oid="zs7hbl4"
                      >
                        <Star
                          className="w-6 h-6 text-blue-600"
                          data-oid="ou8jwjz"
                        />
                      </div>
                      <div data-oid="m9j8005">
                        <div
                          className="text-sm font-bold text-gray-900"
                          data-oid="n3mn.an"
                        >
                          Expert
                        </div>
                        <div
                          className="text-xs text-gray-600"
                          data-oid="c4p0wzy"
                        >
                          Facilitator
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    data-oid="hc7xy_l"
                  >
                    <div className="flex items-center gap-3" data-oid="j26z:s7">
                      <div
                        className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
                        data-oid="rc.ejap"
                      >
                        <BookOpen
                          className="w-6 h-6 text-green-600"
                          data-oid="u-0k6ma"
                        />
                      </div>
                      <div data-oid="ym60z9c">
                        <div
                          className="text-lg font-bold text-gray-900"
                          data-oid="su-33q9"
                        >
                          {facilitator.stats?.coursesCreated}
                        </div>
                        <div
                          className="text-xs text-gray-600"
                          data-oid="xmed-9d"
                        >
                          Courses
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content Section - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="a1-fe6n"
            >
              {/* Header */}
              <div data-oid="ywybxm.">
                <div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100"
                  data-oid="us9dxkk"
                >
                  <Star className="w-4 h-4" data-oid="gvtdop2" />
                  {facilitator.specialty}
                </div>

                <h1
                  className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                  data-oid="_d9s05e"
                >
                  {facilitator.name}
                </h1>

                <p
                  className="text-2xl text-blue-600 font-semibold mb-6"
                  data-oid="urs_tlo"
                >
                  {facilitator.role}
                </p>

                <p
                  className="text-xl text-gray-600 leading-relaxed mb-8"
                  data-oid="qmtickg"
                >
                  {facilitator.bio}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-2 gap-6" data-oid=":1l0yuu">
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg"
                  data-oid="949rg35"
                >
                  <div
                    className="flex items-center gap-3 mb-4"
                    data-oid="6gsc93o"
                  >
                    <div
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                      data-oid="e.qb:2p"
                    >
                      <Award
                        className="w-5 h-5 text-blue-600"
                        data-oid="2wzv-ti"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900" data-oid="n45cw.s">
                      Expertise
                    </h3>
                  </div>
                  <p className="text-gray-600" data-oid="z.cmrl5">
                    {facilitator.specialty}
                  </p>
                </div>

                <div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg"
                  data-oid="19hkrq9"
                >
                  <div
                    className="flex items-center gap-3 mb-4"
                    data-oid="6n.tr3n"
                  >
                    <div
                      className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                      data-oid="ub8m.os"
                    >
                      <BookOpen
                        className="w-5 h-5 text-green-600"
                        data-oid="gch:0gc"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900" data-oid="z.sdhiw">
                      Courses
                    </h3>
                  </div>
                  <p className="text-gray-600" data-oid="4q1vlzl">
                    {facilitator.stats?.coursesCreated} Expert Courses Created
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-l-4 border-blue-500"
                data-oid="kg.tkjw"
              >
                <Quote
                  className="w-8 h-8 text-blue-600 mb-4"
                  data-oid="5.fplnk"
                />

                <p
                  className="text-lg text-gray-700 italic leading-relaxed mb-4"
                  data-oid="bryz9n3"
                >
                  "My mission is to empower every investor with the knowledge
                  and confidence to make informed property decisions that will
                  transform their financial future."
                </p>
                <p
                  className="text-sm text-gray-600 font-medium"
                  data-oid="k-6oete"
                >
                  - {facilitator.name}
                </p>
              </div>

              {/* Social Links */}
              {facilitator.socialLinks && (
                <div className="flex items-center gap-4" data-oid=":t:qu8c">
                  <span
                    className="text-gray-600 font-medium"
                    data-oid="c4_jbfd"
                  >
                    Connect with {facilitator.name.split(" ")[0]}:
                  </span>
                  <div className="flex gap-3" data-oid="3eoazi5">
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
                            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group shadow-sm"
                            data-oid="d8yvcjc"
                          >
                            <Icon
                              className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:scale-110 transition-all duration-300"
                              data-oid="g_m8bv7"
                            />
                          </Link>
                        );
                      },
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
