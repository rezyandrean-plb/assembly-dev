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
  Star,
  Zap,
  TrendingUp,
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
      data-oid="sr23.rd"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full" data-oid="2-g33e9">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"
          data-oid="a4l-.5o"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-60"
          data-oid="5il5r7z"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full opacity-30"
          data-oid="m49eicj"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="bm10:yg">
        <div className="max-w-4xl mx-auto text-center" data-oid="qlk4xyi">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="adjv59m"
          >
            <Sparkles className="w-4 h-4" data-oid="1-l_dxm" />
            Our Story
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="ofms1rq"
          >
            Creating Creators.
            <span className="block text-blue-800" data-oid="vn2lani">
              Empowering Realtors.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="t14fxmg"
          >
            In a world where information is abundant but guidance is scarce,
            Assembly was founded to bridge that gap. We believe that real
            progress happens not just through knowledge, but through mentorship,
            collaboration, and practical growth.
            <br data-oid="ot0im2q" />
            <br data-oid="tk9_lj3" />
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
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="_0.ht60">
      <div className="container mx-auto px-4" data-oid="5_d__rp">
        <div className="max-w-6xl mx-auto" data-oid="pda6h6y">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="6_6pdv0"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="itk:e6o"
            >
              <div className="relative" data-oid="v462blp">
                {/* Placeholder for founder image */}
                <div
                  className="w-full h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden"
                  data-oid="vfgql01"
                >
                  <Image
                    src="/images/About-Us-01-scaled.jpg"
                    alt="About Us"
                    width={1000}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                    data-oid="41ph-11"
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
                  data-oid="yv.0s5l"
                >
                  <Quote
                    className="w-6 h-6 text-blue-600 mb-2"
                    data-oid="31_df2k"
                  />

                  <p
                    className="text-sm text-gray-700 italic"
                    data-oid="ditek1n"
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
              data-oid="9agb8ss"
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                data-oid="elkwh8s"
              >
                The Spark That Started It All
              </h2>
              <div
                className="space-y-6 text-gray-700 leading-relaxed"
                data-oid="r1919lw"
              >
                <p data-oid="kvp0xju">
                  Back in 2018, our founder noticed something troubling in
                  Singapore's property market. While property investment was
                  creating incredible wealth for some, the knowledge and
                  strategies were locked away in exclusive circles.
                </p>
                <p data-oid="bki6vm5">
                  "I watched too many people make costly mistakes simply because
                  they didn't have access to the right information," recalls our
                  founder. "That's when I realized we needed to democratize
                  property education."
                </p>
                <p data-oid=":.0h8..">
                  What started as weekend workshops in small community centers
                  has grown into a comprehensive platform that has transformed
                  thousands of lives. But our mission remains the same: making
                  property investment success accessible to everyone.
                </p>
              </div>

              <div
                className="mt-8 p-6 bg-blue-50 rounded-xl"
                data-oid="kdbm532"
              >
                <p className="text-gray-700 font-bold" data-oid="beay2yv">
                  “It is the long history of humankind that those who learned to
                  collaborate and improvise most effectively have
                  prevailed.”{" "}
                </p>
                <p className="mt-2" data-oid="ix3j4fn">
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="466w5el">
      <div className="container mx-auto px-4" data-oid="dx:vbo9">
        <div className="max-w-7xl mx-auto" data-oid="a7.htga">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="2ur-:q5"
          >
            <div className="flex items-center gap-4 mb-6" data-oid="6tnp54s">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                data-oid="wn-lu04"
              >
                Our Purpose
              </h2>
              <div className="flex gap-1" data-oid="yvup-lb">
                <div
                  className="w-8 h-1 bg-blue-600 rounded"
                  data-oid="5yt0p08"
                ></div>
                <div
                  className="w-8 h-1 bg-orange-500 rounded"
                  data-oid="i4qbwsq"
                ></div>
                <div
                  className="w-8 h-1 bg-green-500 rounded"
                  data-oid="m.-s5jt"
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div
            className="grid lg:grid-cols-3 gap-12 items-center"
            data-oid="5odb4jp"
          >
            {/* Left Image */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid="vwcccr9"
            >
              <div className="relative" data-oid="e8lu:bu">
                <div
                  className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl overflow-hidden shadow-xl"
                  data-oid="ieehee5"
                >
                  <Image
                    src="/images/NLC24-43.jpg"
                    alt="Assembly Workshop"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                    data-oid="x-jflj."
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
                  data-oid="tybte-7"
                >
                  <div className="flex items-center gap-2" data-oid="66t-c5z">
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full"
                      data-oid=".dozin-"
                    ></div>
                    <span
                      className="text-sm font-semibold text-gray-900"
                      data-oid="s22yce_"
                    >
                      ASSEMBLY
                    </span>
                  </div>
                  <p
                    className="text-xs text-gray-600 text-center"
                    data-oid="t70vaf1"
                  >
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
              data-oid="hw.di:f"
            >
              <div
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
                data-oid="as2d7qc"
              >
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  data-oid=".x:4wsn"
                >
                  We go beyond education. Our aim is to build a thriving
                  community of like-minded professionals—people who aren't just
                  here to learn, but to connect and grow together. Through
                  mutual support and shared experience, we create a network
                  where knowledge turns into action, and potential turns into
                  progress.
                </p>
              </div>

              {/* Mission Statement */}
              <div
                className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600"
                data-oid="t0v_c0_"
              >
                <h3
                  className="font-bold text-gray-900 mb-2 flex items-center gap-2"
                  data-oid="a52za.2"
                >
                  <Target
                    className="w-5 h-5 text-blue-600"
                    data-oid="6l8ef2:"
                  />
                  Our Mission
                </h3>
                <p className="text-gray-700" data-oid="amqtr2j">
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
              data-oid="bd.md8b"
            >
              <div className="relative" data-oid="3jqn4p.">
                <div
                  className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl"
                  data-oid="px-gjlt"
                >
                  <Image
                    src="/images/NLC24-137.jpg"
                    alt="Speaking Engagement"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                    data-oid="6vvp__d"
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
            data-oid="eco4i79"
          >
            <div
              className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white"
              data-oid="x920ca5"
            >
              <div className="grid md:grid-cols-4 gap-8" data-oid="aaq02lg">
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
                    data-oid="c9tz..f"
                  >
                    <div
                      className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      data-oid="x7gjy4u"
                    >
                      <stat.icon
                        className="w-8 h-8 text-white"
                        data-oid="pf11se0"
                      />
                    </div>
                    <div className="text-3xl font-bold mb-2" data-oid="64w4gas">
                      {stat.number}
                    </div>
                    <div
                      className="text-lg font-semibold mb-1"
                      data-oid="i4q0kb."
                    >
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
    <section ref={sectionRef} className="py-24 bg-gray-900" data-oid="_t1smsf">
      <div className="container mx-auto px-4" data-oid="sskpvf_">
        <div className="max-w-6xl mx-auto" data-oid="21accb0">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="o6rlrnf"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-oid="dtd14a8"
            >
              Our Core Values
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="_j7yy71"
            >
              These aren't just words on a wall. Here's how our core values
              shape everything we do, from course creation to student support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-oid=".fkaedi">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="x_yps10"
              >
                <div className="flex items-start gap-6" data-oid="3dwb_f9">
                  <div
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"
                    data-oid="asb1g7l"
                  >
                    <value.icon
                      className="w-8 h-8 text-white"
                      data-oid=".5ry.9u"
                    />
                  </div>
                  <div className="flex-1" data-oid="nmnc_7r">
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      data-oid=".x8ryio"
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      data-oid="jeqz2ot"
                    >
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="ik:fneb">
      <div className="container mx-auto px-4" data-oid="68.2yhg">
        <div className="max-w-6xl mx-auto" data-oid="rg0k9xs">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="ja2tntg"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="34l0v:s"
            >
              Meet the Humans Behind Assembly
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="mgrve0u"
            >
              We're not just educators – we're property investors, former
              students, and passionate believers in the power of shared
              knowledge.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="4o-z2z7"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="9pt08ua"
              >
                <div className="relative mb-6" data-oid="_y7ixwz">
                  <div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    data-oid=".gu249y"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      data-oid="7k5n07b"
                    />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    data-oid="ntp1wrb"
                  >
                    <Heart className="w-4 h-4 text-white" data-oid="x9x4n31" />
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-1"
                  data-oid="ni5yp2u"
                >
                  {member.name}
                </h3>
                <p
                  className="text-blue-600 font-medium mb-2"
                  data-oid="pss7-65"
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-3" data-oid="45oi9.h">
                  {member.bio}
                </p>
                <div
                  className="bg-gray-50 rounded-lg px-3 py-1 inline-block"
                  data-oid="we0ogvb"
                >
                  <span className="text-xs text-gray-700" data-oid="ocg9ajr">
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
      data-oid="i.s.wm8"
    >
      <div className="container mx-auto px-4" data-oid="eajjf:7">
        <div className="max-w-6xl mx-auto" data-oid="leogjni">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="7hqggbt"
          >
            <div
              className="bg-transparent rounded-2xl p-8 max-w-2xl mx-auto"
              data-oid="gzd4.y8"
            >
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid="mxn2d0-"
              >
                Join Our Journey
              </h3>
              <p className="text-gray-600 mb-6" data-oid="m12_rsx">
                Be part of the next chapter in property education. Whether
                you're a student, instructor, or industry partner, there's a
                place for you in our growing community.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid=":-4yods"
              >
                <Link href="/courses" data-oid="xsjhx-2">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                    data-oid="e.oqpwe"
                  >
                    Start Learning
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="6f:58bh"
                    />
                  </Button>
                </Link>
                <Link href="/contact" data-oid="7chf-i:">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="14oubzm"
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
      <Navbar data-oid="8-62qc3" />
      <div className="bg-white" data-oid="2cqmrfa">
        <StoryHeroSection data-oid="o9bkr6x" />
        <FounderStorySection data-oid="ski8e2f" />
        <OurPurposeSection data-oid="t009tbk" />
        <ValuesInActionSection data-oid="v:.rqzw" />
        <MeetTeamSection data-oid="mskm8:c" />
        <FutureVisionSection data-oid="-owidh3" />
      </div>
    </>
  );
}
