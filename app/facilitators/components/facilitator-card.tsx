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
  Mail,
  MessageCircle,
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

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    whatsapp: MessageCircle,
    email: Mail,
  };

  const getSocialLink = (platform: string, url: string) => {
    if (platform === "email") {
      return `mailto:${url}`;
    }
    if (platform === "whatsapp") {
      return url.startsWith("wa.me/") ? `https://${url}` : url;
    }
    return url;
  };

  const getSocialIcon = (platform: string) => {
    return socialIcons[platform as keyof typeof socialIcons];
  };

  return (
    <motion.div
      className={`group relative ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex gap-8 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      data-oid="zk1bi_m"
    >
      {/* Image Section */}
      <div className="relative lg:w-1/2" data-oid="8bfhzos">
        <div className="relative" data-oid="n557tp-">
          {/* Main Image */}
          <div
            className="relative w-80 h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500"
            data-oid="i8jabsc"
          >
            <Image
              src={facilitator.image}
              alt={facilitator.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-oid="kz78km_"
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              data-oid="k2bvj0."
            />

            {/* Social Links */}
            {facilitator.socialLinks && (
              <div
                className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="9-gw.wb"
              >
                {Object.entries(facilitator.socialLinks).map(
                  ([platform, url]) => {
                    const Icon = getSocialIcon(platform);
                    const linkUrl = getSocialLink(platform, url);

                    return (
                      <Link
                        key={platform}
                        href={linkUrl}
                        target={platform === "email" ? "_self" : "_blank"}
                        rel={platform === "email" ? "" : "noopener noreferrer"}
                        className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg"
                        data-oid="yelk-:1"
                      >
                        <Icon
                          className="w-4 h-4 text-gray-700"
                          data-oid="59lcolw"
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
      <div className="lg:w-1/2 space-y-6" data-oid="ydubw3-">
        {/* Header */}
        <div data-oid="djmi-9h">
          <div
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
            data-oid="6f:7coq"
          >
            <Star className="w-4 h-4" data-oid="b_ytd:x" />
            {facilitator.specialty}
          </div>

          <h3
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
            data-oid="_tfzqpe"
          >
            {facilitator.name}
          </h3>

          <p
            className="text-xl text-blue-600 font-semibold mb-4"
            data-oid="rd719d4"
          >
            {facilitator.role}
          </p>

          <p
            className="text-gray-600 leading-relaxed text-lg"
            data-oid=".5k1o_i"
          >
            {facilitator.longBio}
          </p>
          <p className="text-gray-500 text-lg" data-oid="v6oboa4">
            {facilitator.stats?.coursesCreated} Expert Courses
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4" data-oid="ibb5qkp">
          <Link
            href={`/facilitators/${facilitator.id}`}
            className="flex-1"
            data-oid=".r091:q"
          >
            <Button
              className="w-full bg-slate-300 hover:bg-zinc-100 text-gray-800 hover:text-gray-800 py-4 px-8 rounded-xl text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
              data-oid="_zftv5g"
            >
              Meet {facilitator.name.split(" ")[0]}
              <ArrowRight
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                data-oid="vhwlmjw"
              />
            </Button>
          </Link>
          <Link href="/courses" data-oid="c7sztxa">
            <Button
              variant="outline"
              className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50"
              data-oid="h6pe_ud"
            >
              View Courses
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
