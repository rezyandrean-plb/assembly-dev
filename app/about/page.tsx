"use client";

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
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { getInstructors } from "@/app/data/instructors";
import Image from "next/image";

// Story-driven Hero Section
const StoryHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
      data-oid="l:o4hur"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full" data-oid="hd0q2:k">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"
          data-oid="rg9ee4a"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-60"
          data-oid="3y2st9d"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full opacity-30"
          data-oid="5z1fal."
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="g6n.eis">
        <div className="max-w-4xl mx-auto text-center" data-oid="xsiwrta">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="6osgc3n"
          >
            <Sparkles className="w-4 h-4" data-oid="l0vc.e1" />
            Our Story
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="s1-zhz2"
          >
            Creating Creators.
            <span className="block text-blue-800" data-oid="t_pnux7">
              Empowering Realtors.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="l10x8p1"
          >
            In a world where information is abundant but guidance is scarce,
            Assembly was founded to bridge that gap. We believe that real
            progress happens not just through knowledge, but through mentorship,
            collaboration, and practical growth.
            <br data-oid="ettr28_" />
            <br data-oid="0oqln4u" />
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
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="7arr2qz">
      <div className="container mx-auto px-4" data-oid="pjlq1we">
        <div className="max-w-6xl mx-auto" data-oid="kkbes30">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="avqmr.o"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="-vj0p90"
            >
              <div className="relative" data-oid="lq9m--3">
                {/* Placeholder for founder image */}
                <div
                  className="w-full h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden"
                  data-oid="aui0_:l"
                >
                  <Image
                    src="/images/About-Us-01-scaled.jpg"
                    alt="About Us"
                    width={1000}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                    data-oid="2z94pkj"
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
                  data-oid="n4t31o3"
                >
                  <Quote
                    className="w-6 h-6 text-blue-600 mb-2"
                    data-oid="7k99f8d"
                  />

                  <p
                    className="text-sm text-gray-700 italic"
                    data-oid="qx.1t7q"
                  >
                    "Education should empower, not intimidate."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="hctiu4:"
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                data-oid="gk1fq5s"
              >
                The Spark That Started It All
              </h2>
              <div
                className="space-y-6 text-gray-700 leading-relaxed"
                data-oid="qz6tngy"
              >
                <p data-oid="vfprub5">
                  Back in 2018, our founder noticed something troubling in
                  Singapore's property market. While property investment was
                  creating incredible wealth for some, the knowledge and
                  strategies were locked away in exclusive circles.
                </p>
                <p data-oid="_i6ja-_">
                  "I watched too many people make costly mistakes simply because
                  they didn't have access to the right information," recalls our
                  founder. "That's when I realized we needed to democratize
                  property education."
                </p>
                <p data-oid="xb77u7o">
                  What started as weekend workshops in small community centers
                  has grown into a comprehensive platform that has transformed
                  thousands of lives. But our mission remains the same: making
                  property investment success accessible to everyone.
                </p>
              </div>

              <div
                className="mt-8 p-6 bg-blue-50 rounded-xl"
                data-oid="9wd5ebi"
              >
                <p className="text-gray-700 font-bold" data-oid="ktpbto0">
                  “It is the long history of humankind that those who learned to
                  collaborate and improvise most effectively have
                  prevailed.”{" "}
                </p>
                <p className="mt-2" data-oid="aplola8">
                  - Charles Darwin
                </p>{" "}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Behind the Scenes Section
const BehindScenesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const behindScenes = [
    {
      icon: Coffee,
      title: "Early Morning Brainstorms",
      description:
        "Our team starts each day at 7 AM, discussing market trends and how to better serve our students.",
      image: "Team meeting",
    },
    {
      icon: Mic,
      title: "Recording Sessions",
      description:
        "Hundreds of hours go into creating each course, ensuring every detail is perfect for our learners.",
      image: "Recording studio",
    },
    {
      icon: Heart,
      title: "Student Success Calls",
      description:
        "Nothing beats the joy of hearing about our students' property investment wins and life changes.",
      image: "Success celebration",
    },
    {
      icon: Building2,
      title: "Property Site Visits",
      description:
        "Our instructors regularly visit properties to bring real-world insights into our courses.",
      image: "Property visit",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid=":xzy8fy">
      <div className="container mx-auto px-4" data-oid="d38g8xn">
        <div className="max-w-6xl mx-auto" data-oid="22acfxw">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid=":hh4s84"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="0jeeoks"
            >
              Behind the Scenes at Assembly
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="..4z.vi"
            >
              Ever wondered what goes on behind the curtain? Here's a glimpse
              into our daily life and the passion that drives everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-oid="2o_gcem">
            {behindScenes.map((item, index) => (
              <motion.div
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="0gfq0l3"
              >
                <div
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
                  data-oid="p72-2il"
                >
                  <div className="flex items-start gap-6" data-oid="o2-17mv">
                    <div
                      className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      data-oid="bkfd-gg"
                    >
                      <item.icon
                        className="w-8 h-8 text-blue-600"
                        data-oid="qu75:w:"
                      />
                    </div>
                    <div className="flex-1" data-oid="xlmmft7">
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3"
                        data-oid="awe6209"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed mb-4"
                        data-oid="dmgws1r"
                      >
                        {item.description}
                      </p>
                      <div
                        className="w-full h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-lg flex items-center justify-center"
                        data-oid="mhnytyl"
                      >
                        <span
                          className="text-gray-500 text-sm"
                          data-oid="h069ya-"
                        >
                          {item.image}
                        </span>
                      </div>
                    </div>
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

// Our Values in Action Section
const ValuesInActionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly evolve our teaching methods and course content to stay ahead of market changes.",
      example: "Recently launched AR property tours for remote learning",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description:
        "We only teach strategies we've personally tested and proven in real market conditions.",
      example:
        "Our instructors invest alongside students using the same strategies",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in the power of collective learning and peer support.",
      example: "Monthly networking events connect students across Singapore",
    },
    {
      icon: Target,
      title: "Results",
      description:
        "Every course is designed with measurable outcomes and real-world application.",
      example: "Average student ROI of 127% within 24 months",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900" data-oid="wv4yc4b">
      <div className="container mx-auto px-4" data-oid="-4c2xuq">
        <div className="max-w-6xl mx-auto" data-oid="lfjetgj">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="j.sqzx0"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-oid="x2y8bl0"
            >
              Our Values in Action
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="8brex44"
            >
              These aren't just words on a wall. Here's how our core values
              shape everything we do, from course creation to student support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-oid="aceq06g">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="8bbx7-i"
              >
                <div className="flex items-start gap-6" data-oid="wn-k12r">
                  <div
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"
                    data-oid="szhdms:"
                  >
                    <value.icon
                      className="w-8 h-8 text-white"
                      data-oid="njlu_1m"
                    />
                  </div>
                  <div className="flex-1" data-oid="n5jq0.d">
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      data-oid="wsyqb7h"
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      data-oid="y84bn9j"
                    >
                      {value.description}
                    </p>
                    <div
                      className="bg-blue-900/50 rounded-lg p-4"
                      data-oid="h9cv-:9"
                    >
                      <p
                        className="text-blue-200 text-sm font-medium"
                        data-oid="z07up61"
                      >
                        Example in Action:
                      </p>
                      <p
                        className="text-blue-100 text-sm mt-1"
                        data-oid="k5v97jr"
                      >
                        {value.example}
                      </p>
                    </div>
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

  const instructors = getInstructors(["melvin-lim", "nicole-ng", "adrian-lim"]);

  const teamMembers = [
    ...instructors.map((instructor) => ({
      name: instructor.name,
      role: "Lead Instructor",
      image: instructor.image,
      bio: "20+ years in property investment with a passion for teaching",
      specialty: "Property Investment Strategy",
    })),
    {
      name: "Sarah Chen",
      role: "Content Creator",
      image: "/confident-asian-professional.png",
      bio: "Former marketing executive turned education specialist",
      specialty: "Course Development",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white" data-oid="93h83ou">
      <div className="container mx-auto px-4" data-oid=":e_f6nw">
        <div className="max-w-6xl mx-auto" data-oid="cozo_p:">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="2igrcbs"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="05v1rzs"
            >
              Meet the Humans Behind Assembly
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="ufs-2d9"
            >
              We're not just educators – we're property investors, former
              students, and passionate believers in the power of shared
              knowledge.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="zxis4ad"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="8gn6n4t"
              >
                <div className="relative mb-6" data-oid="2qekx3u">
                  <div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    data-oid="w9dht9u"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      data-oid="vmdo0tq"
                    />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    data-oid="03n-kg7"
                  >
                    <Heart className="w-4 h-4 text-white" data-oid="tl11k1i" />
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-1"
                  data-oid=".0efqtt"
                >
                  {member.name}
                </h3>
                <p
                  className="text-blue-600 font-medium mb-2"
                  data-oid=".ezabl4"
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-3" data-oid="3_6n33i">
                  {member.bio}
                </p>
                <div
                  className="bg-gray-50 rounded-lg px-3 py-1 inline-block"
                  data-oid="jqb35kv"
                >
                  <span className="text-xs text-gray-700" data-oid="-enp-5:">
                    {member.specialty}
                  </span>
                </div>
              </motion.div>
            ))}
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
      data-oid="5z9fcei"
    >
      <div className="container mx-auto px-4" data-oid="1mmwoq1">
        <div className="max-w-6xl mx-auto" data-oid="h8utf5u">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="_:yjv.s"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="4sh2u67"
            >
              The Future We're Building
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="-s36jmt"
            >
              Our journey is far from over. Here's what we're working on to make
              property education even more accessible and effective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16" data-oid="q67p8q8">
            {futureInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="ws.ge8n"
              >
                <div
                  className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-600 rounded-xl flex items-center justify-center mb-6"
                  data-oid="gbidkti"
                >
                  <initiative.icon
                    className="w-8 h-8 text-white"
                    data-oid="8fkl63f"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  data-oid="0ekb4xg"
                >
                  {initiative.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed mb-4"
                  data-oid="tpwwate"
                >
                  {initiative.description}
                </p>
                <div
                  className="bg-blue-50 rounded-lg px-3 py-2 inline-block"
                  data-oid="ha8su3x"
                >
                  <span
                    className="text-blue-700 text-sm font-medium"
                    data-oid="ef3yg90"
                  >
                    {initiative.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="8xph0a:"
          >
            <div
              className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
              data-oid="txaf-je"
            >
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="c1c_3k7"
              >
                Join Our Journey
              </h3>
              <p className="text-gray-600 mb-6" data-oid="pjd.oz5">
                Be part of the next chapter in property education. Whether
                you're a student, instructor, or industry partner, there's a
                place for you in our growing community.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="dif4a5:"
              >
                <Link href="/courses" data-oid="3w_e_8u">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                    data-oid="jyd9ibr"
                  >
                    Start Learning
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="s-qw-3a"
                    />
                  </Button>
                </Link>
                <Link href="/contact" data-oid="jrykpro">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="h37omvj"
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
export default function AboutPage() {
  return (
    <>
      <Navbar data-oid="t75mmyk" />
      <div className="bg-white" data-oid="v32dwv5">
        <StoryHeroSection data-oid="s5udr.k" />
        <FounderStorySection data-oid="4eyjvq." />
        <BehindScenesSection data-oid="khzd-eg" />
        <ValuesInActionSection data-oid="iftj55z" />
        <MeetTeamSection data-oid="q-5afye" />
        <FutureVisionSection data-oid="jppro4f" />
      </div>
    </>
  );
}
