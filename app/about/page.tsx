"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Heart,
  Lightbulb,
  Target,
  Award,
  BookOpen,
  Coffee,
  Clock,
  Building2,
  Handshake,
  Sparkles,
  ArrowRight,
  Quote,
  Camera,
  Mic,
  Video,
  PenTool,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFacilitator, Facilitator } from "@/app/data/facilitators";
import Image from "next/image";

// Story-driven Hero Section
const StoryHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            Our Story
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creating Creators.
            <span className="block text-blue-800">Empowering Realtors.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In a world where information is abundant but guidance is scarce,
            Assembly was founded to bridge that gap. We believe that real
            progress happens not just through knowledge, but through mentorship,
            collaboration, and practical growth.
            <br />
            <br />
            Assembly is a space where aspiring creatives and realtors are
            equipped for the future—through expert-led training, peer learning,
            and real-world frameworks designed to nurture skill and confidence.
            We bring together those who are ready to go beyond watching and
            start doing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

// Founder's Story Section
const FounderStorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Placeholder for founder image */}
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/About-Us-01-scaled.jpg"
                    alt="About Us"
                    width={1000}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Floating quote */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className="w-6 h-6 text-blue-600 mb-2" />

                  <p className="text-sm text-gray-700 italic">
                    "Education should empower, not intimidate."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Spark That Started It All
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Back in 2018, our founder noticed something troubling in
                  Singapore's property market. While property investment was
                  creating incredible wealth for some, the knowledge and
                  strategies were locked away in exclusive circles.
                </p>
                <p>
                  "I watched too many people make costly mistakes simply because
                  they didn't have access to the right information," recalls our
                  founder. "That's when I realized we needed to democratize
                  property education."
                </p>
                <p>
                  What started as weekend workshops in small community centers
                  has grown into a comprehensive platform that has transformed
                  thousands of lives. But our mission remains the same: making
                  property investment success accessible to everyone.
                </p>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-gray-700 font-bold">
                  “It is the long history of humankind that those who learned to
                  collaborate and improvise most effectively have
                  prevailed.”{" "}
                </p>
                <p className="mt-2">- Charles Darwin</p>{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Our Purpose Section
const OurPurposeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    {
      icon: BookOpen,
      number: "xxx",
      label: "Webinars Done",
    },
    {
      icon: Award,
      number: "xxx",
      label: "Awards",
    },
    {
      icon: Heart,
      number: "xxx",
      label: "Likes",
    },
    {
      icon: Users,
      number: "xxx",
      label: "Attendees",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Purpose
              </h2>
              <div className="flex gap-1">
                <div className="w-8 h-1 bg-blue-600 rounded"></div>
                <div className="w-8 h-1 bg-orange-500 rounded"></div>
                <div className="w-8 h-1 bg-green-500 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/NLC24-43.jpg"
                    alt="Assembly Workshop"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">
                      ASSEMBLY
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 text-center">
                    BY PROPERTYLIMBROTHERS
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We go beyond education. Our aim is to build a thriving
                  community of like-minded professionals—people who aren't just
                  here to learn, but to connect and grow together. Through
                  mutual support and shared experience, we create a network
                  where knowledge turns into action, and potential turns into
                  progress.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  We don't just want to educate, we want to build up a community
                  where like-minded people can gather, share experiences, and
                  leverage on each other's experiences and expertise. We don't
                  just want to educate, we want to build up a community where
                  like-minded people can gather, share experiences, and leverage
                  on each other's experiences and expertise.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/NLC24-137.jpg"
                    alt="Speaking Engagement"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-lg">
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold mb-1 text-gray-700">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Our Values in Action Section
const ValuesInActionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Commitment to high-quality education and training.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Adapting to modern real estate trends and technologies.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong network of real estate professionals.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description:
        "Equipping individuals with the tools for long-term success.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These aren't just words on a wall. Here's how our core values
              shape everything we do, from course creation to student support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Meet the Team Section
const MeetTeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const facilitatorIds = [
    "melvin-lim",
    "adrian-lim",
    "marc-chan",
    "george-peng",
  ];

  const teamMembers = facilitatorIds
    .map((id) => getFacilitator(id))
    .filter(Boolean) as Facilitator[];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet the Humans Behind Assembly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just educators – we're property investors, former
              students, and passionate believers in the power of shared
              knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="min-h-[6rem]">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/facilitators">
              <Button
                size="lg"
                className="bg-slate-300 hover:bg-zinc-100 text-gray-800 hover:text-gray-800 px-8 py-3 rounded-xl transition-all duration-300 group"
              >
                Meet All Facilitators
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Future Vision Section
const FutureVisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const futureInitiatives = [
    {
      icon: Video,
      title: "Virtual Reality Learning",
      description: "Immersive property tours and investment simulations",
      timeline: "Coming 2024",
    },
    {
      icon: Building2,
      title: "Regional Expansion",
      description: "Bringing Assembly's methodology to Malaysia and Thailand",
      timeline: "2025",
    },
    {
      icon: PenTool,
      title: "AI-Powered Mentoring",
      description: "Personalized learning paths based on individual goals",
      timeline: "In Development",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-transparent rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Be part of the next chapter in property education. Whether
                you're a student, instructor, or industry partner, there's a
                place for you in our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main About Page component
function AboutPage() {
  return (
    <>
      <StoryHeroSection />
      <FounderStorySection />
      <OurPurposeSection />
      <ValuesInActionSection />
      <MeetTeamSection />
      <FutureVisionSection />
    </>
  );
}

// Export as dynamic to skip SSR
export default dynamic(() => Promise.resolve(AboutPage), {
  ssr: false,
});
