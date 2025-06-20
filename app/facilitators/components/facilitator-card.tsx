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
      data-oid="h5rn4x8"
    >
      {/* Image Section */}
      <div className="relative lg:w-1/2" data-oid="cbynda9">
        <div className="relative" data-oid="5eqnnrf">
          {/* Main Image */}
          <div
            className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            data-oid="63.sgr3"
          >
            <Image
              src={facilitator.image}
              alt={facilitator.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-oid="kmgp.h1"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              data-oid="r2bj1:_"
            />

            {/* Social Links */}
            {facilitator.socialLinks && (
              <div
                className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="ierqp2w"
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
                        data-oid="7e1lqla"
                      >
                        <Icon
                          className="w-4 h-4 text-gray-700"
                          data-oid=":_hpbgy"
                        />
                      </Link>
                    );
                  },
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 space-y-6" data-oid="2:16ywv">
        {/* Header */}
        <div data-oid="nt-tm0p">
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            data-oid=":1hmhhu"
          >
            <Star className="w-4 h-4" data-oid="x8v05jq" />
            {facilitator.specialty}
          </div>

          <h3
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            data-oid="uqhlfs7"
          >
            {facilitator.name}
          </h3>

          <p
            className="text-xl text-blue-600 font-semibold mb-4"
            data-oid="ko-ga79"
          >
            {facilitator.role}
          </p>

          <p
            className="text-gray-600 leading-relaxed text-lg"
            data-oid="k:2f2_5"
          >
            {facilitator.longBio}
          </p>
          <p className="text-gray-500 text-lg" data-oid="cu3qsjw">
            {facilitator.stats?.coursesCreated} Expert Courses
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4" data-oid="q7mc7jv">
          <Link
            href={`/facilitators/${facilitator.id}`}
            className="flex-1"
            data-oid="q8u54dp"
          >
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl group"
              data-oid=":3:p8xy"
            >
              Meet {facilitator.name.split(" ")[0]}
              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                data-oid="40pc_d9"
              />
            </Button>
          </Link>
          <Link href="/courses" data-oid="wlopfbt">
            <Button
              variant="outline"
              className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50"
              data-oid="bh69_r_"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
