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
      data-oid="l1m66ym"
    >
      {/* Image Section */}
      <div className="relative lg:w-1/2" data-oid="zu-7q3i">
        <div className="relative" data-oid="qdnc8nq">
          {/* Main Image */}
          <div
            className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            data-oid="d3qy-ki"
          >
            <Image
              src={facilitator.image}
              alt={facilitator.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-oid="cr_bsnx"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              data-oid="lcyl2b1"
            />

            {/* Social Links */}
            {facilitator.socialLinks && (
              <div
                className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="3h:u-7f"
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
                        data-oid="ds0qgik"
                      >
                        <Icon
                          className="w-4 h-4 text-gray-700"
                          data-oid="wmb9rqi"
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
      <div className="lg:w-1/2 space-y-6" data-oid="432y32p">
        {/* Header */}
        <div data-oid="uvx8.kt">
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            data-oid="bl8fpov"
          >
            <Star className="w-4 h-4" data-oid="th2_9b:" />
            {facilitator.specialty}
          </div>

          <h3
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            data-oid="dsx1f-x"
          >
            {facilitator.name}
          </h3>

          <p
            className="text-xl text-blue-600 font-semibold mb-4"
            data-oid="8cn023u"
          >
            {facilitator.role}
          </p>

          <p
            className="text-gray-600 leading-relaxed text-lg"
            data-oid="o_nmqf7"
          >
            {facilitator.longBio}
          </p>
          <p className="text-gray-500 text-lg" data-oid="4p5eiwc">
            {facilitator.stats?.coursesCreated} Expert Courses
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4" data-oid="ts_5ogw">
          <Link
            href={`/facilitators/${facilitator.id}`}
            className="flex-1"
            data-oid="69dejkm"
          >
            <Button
              className="w-full bg-slate-300 hover:bg-zinc-100 text-gray-800 hover:text-gray-800 py-4 px-8 rounded-xl text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
              data-oid="3yqu0cc"
            >
              Meet {facilitator.name.split(" ")[0]}
              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                data-oid="jiyio:_"
              />
            </Button>
          </Link>
          <Link href="/courses" data-oid="bntexzg">
            <Button
              variant="outline"
              className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50"
              data-oid="cveqe:v"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
