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
  Mail,
  MessageCircle,
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
    <section
      ref={sectionRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image Section - Takes 2 columns */}
            <div className="lg:col-span-2 relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={facilitator.image}
                      alt={facilitator.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-100">
                  <Star className="w-4 h-4" />
                  {facilitator.specialty}
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {facilitator.name}
                </h1>

                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  {facilitator.role}
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {facilitator.bio}
                </p>

                {/* Long Bio */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {facilitator.longBio}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              {facilitator.socialLinks && (
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium">
                    Connect with {facilitator.name.split(" ")[0]}:
                  </span>
                  <div className="flex gap-3">
                    {Object.entries(facilitator.socialLinks).map(
                      ([platform, url]) => {
                        const Icon = getSocialIcon(platform);
                        const linkUrl = getSocialLink(platform, url);

                        return (
                          <Link
                            key={platform}
                            href={linkUrl}
                            target={platform === "email" ? "_self" : "_blank"}
                            rel={
                              platform === "email" ? "" : "noopener noreferrer"
                            }
                            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group shadow-sm"
                          >
                            <Icon className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:scale-110 transition-all duration-300" />
                          </Link>
                        );
                      },
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
