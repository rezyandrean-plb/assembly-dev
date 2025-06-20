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
      data-oid="s-w4a8e"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full" data-oid="6k0v29m">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-60"
          data-oid="ogafo-v"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-60"
          data-oid="gqtkzox"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full opacity-30"
          data-oid="dd..ei4"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="ntjv739">
        <div className="max-w-4xl mx-auto text-center" data-oid="t80tr7i">
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-oid="yhegh-e"
          >
            <Sparkles className="w-4 h-4" data-oid="a2wrwb6" />
            Our Story
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="zjjwoc0"
          >
            Creating Creators.
            <span className="block text-blue-800" data-oid="jpvu_58">
              Empowering Realtors.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="fl3m2ek"
          >
            In a world where information is abundant but guidance is scarce,
            Assembly was founded to bridge that gap. We believe that real
            progress happens not just through knowledge, but through mentorship,
            collaboration, and practical growth.
            <br data-oid="2f7p6rk" />
            <br data-oid="0r0r.vg" />
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
    <section ref={sectionRef} className="py-24 bg-gray-50" data-oid="qt1i-1d">
      <div className="container mx-auto px-4" data-oid="w3e-:ep">
        <div className="max-w-6xl mx-auto" data-oid="_22mab-">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            data-oid="9848d2g"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
              data-oid="si_les2"
            >
              <div className="relative" data-oid="93twvm9">
                {/* Placeholder for founder image */}
                <div
                  className="w-full h-96 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center overflow-hidden"
                  data-oid="sm85-0t"
                >
                  <Image
                    src="/images/About-Us-01-scaled.jpg"
                    alt="About Us"
                    width={1000}
                    height={384}
                    className="object-cover w-full h-full"
                    priority
                    data-oid="e.gme7t"
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
                  data-oid="7caod31"
                >
                  <Quote
                    className="w-6 h-6 text-blue-600 mb-2"
                    data-oid="h4fgdll"
                  />

                  <p
                    className="text-sm text-gray-700 italic"
                    data-oid="q340q-c"
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
              data-oid="dgnagpk"
            >
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                data-oid="bi5j6a8"
              >
                The Spark That Started It All
              </h2>
              <div
                className="space-y-6 text-gray-700 leading-relaxed"
                data-oid="yzoafoy"
              >
                <p data-oid="5061e-v">
                  Back in 2018, our founder noticed something troubling in
                  Singapore's property market. While property investment was
                  creating incredible wealth for some, the knowledge and
                  strategies were locked away in exclusive circles.
                </p>
                <p data-oid="4bg:8kg">
                  "I watched too many people make costly mistakes simply because
                  they didn't have access to the right information," recalls our
                  founder. "That's when I realized we needed to democratize
                  property education."
                </p>
                <p data-oid="a-h4wef">
                  What started as weekend workshops in small community centers
                  has grown into a comprehensive platform that has transformed
                  thousands of lives. But our mission remains the same: making
                  property investment success accessible to everyone.
                </p>
              </div>

              <div
                className="mt-8 p-6 bg-blue-50 rounded-xl"
                data-oid="ifuw1z1"
              >
                <p className="text-gray-700 font-bold" data-oid="nnrp5vg">
                  “It is the long history of humankind that those who learned to
                  collaborate and improvise most effectively have
                  prevailed.”{" "}
                </p>
                <p className="mt-2" data-oid="a8a1z3z">
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="t7n2fiz">
      <div className="container mx-auto px-4" data-oid="w9jj1u8">
        <div className="max-w-7xl mx-auto" data-oid="w12uedm">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="she64yy"
          >
            <div className="flex items-center gap-4 mb-6" data-oid="nt126s_">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                data-oid="5.jv52a"
              >
                Our Purpose
              </h2>
              <div className="flex gap-1" data-oid="31fw7ce">
                <div
                  className="w-8 h-1 bg-blue-600 rounded"
                  data-oid="x5k.3e2"
                ></div>
                <div
                  className="w-8 h-1 bg-orange-500 rounded"
                  data-oid="6g:of9q"
                ></div>
                <div
                  className="w-8 h-1 bg-green-500 rounded"
                  data-oid="v55r5v9"
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div
            className="grid lg:grid-cols-3 gap-12 items-center"
            data-oid="8scvxh1"
          >
            {/* Left Image */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-oid=":49_l_t"
            >
              <div className="relative" data-oid="0a1ql:5">
                <div
                  className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl overflow-hidden shadow-xl"
                  data-oid="4nli.4d"
                >
                  <Image
                    src="/images/NLC24-43.jpg"
                    alt="Assembly Workshop"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                    data-oid="dej213c"
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
                  data-oid="_0ds1n:"
                >
                  <div className="flex items-center gap-2" data-oid="ie3hqcd">
                    <div
                      className="w-3 h-3 bg-blue-600 rounded-full"
                      data-oid="jg1eevx"
                    ></div>
                    <span
                      className="text-sm font-semibold text-gray-900"
                      data-oid="k8:2nqx"
                    >
                      ASSEMBLY
                    </span>
                  </div>
                  <p
                    className="text-xs text-gray-600 text-center"
                    data-oid="uwvvu:a"
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
              data-oid="5wjz-qq"
            >
              <div
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg"
                data-oid="c83yq32"
              >
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  data-oid="i.cf63i"
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
                data-oid="x.j4d94"
              >
                <h3
                  className="font-bold text-gray-900 mb-2 flex items-center gap-2"
                  data-oid="l-vbis3"
                >
                  <Target
                    className="w-5 h-5 text-blue-600"
                    data-oid="4tpjidw"
                  />
                  Our Mission
                </h3>
                <p className="text-gray-700" data-oid="kj7m-_k">
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
              data-oid="azgzg8s"
            >
              <div className="relative" data-oid="qy9ch_-">
                <div
                  className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl"
                  data-oid="7_dhuso"
                >
                  <Image
                    src="/images/NLC24-137.jpg"
                    alt="Speaking Engagement"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                    data-oid="wq-x4sv"
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
            data-oid="82bmt-d"
          >
            <div
              className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-12 text-white"
              data-oid="b_dn9jq"
            >
              <div className="grid md:grid-cols-4 gap-8" data-oid="yj5ft0d">
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
                    data-oid="smk7or5"
                  >
                    <div
                      className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      data-oid="1d8dn:r"
                    >
                      <stat.icon
                        className="w-8 h-8 text-white"
                        data-oid="fxmnib8"
                      />
                    </div>
                    <div className="text-3xl font-bold mb-2" data-oid="dl:apnm">
                      {stat.number}
                    </div>
                    <div
                      className="text-lg font-semibold mb-1"
                      data-oid="8sfpo:h"
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
    <section ref={sectionRef} className="py-24 bg-gray-900" data-oid="8iie-ex">
      <div className="container mx-auto px-4" data-oid="xh-:0fg">
        <div className="max-w-6xl mx-auto" data-oid="bnrrtn-">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="-u8ph8d"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              data-oid=":uifn0z"
            >
              Our Core Values
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="srwuyy."
            >
              These aren't just words on a wall. Here's how our core values
              shape everything we do, from course creation to student support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8" data-oid="nycfnqv">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="fk2k-ci"
              >
                <div className="flex items-start gap-6" data-oid="u-koh_m">
                  <div
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0"
                    data-oid="7u.hgm_"
                  >
                    <value.icon
                      className="w-8 h-8 text-white"
                      data-oid="oo9:6va"
                    />
                  </div>
                  <div className="flex-1" data-oid="0t15l11">
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      data-oid="ohhiycq"
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      data-oid="-g7ppgx"
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
    <section ref={sectionRef} className="py-24 bg-white" data-oid="0lenlfp">
      <div className="container mx-auto px-4" data-oid="lmph45_">
        <div className="max-w-6xl mx-auto" data-oid="i6l:ofy">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            data-oid="klyk5wp"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              data-oid="ch-e0pj"
            >
              Meet the Humans Behind Assembly
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              data-oid="djqg_z7"
            >
              We're not just educators – we're property investors, former
              students, and passionate believers in the power of shared
              knowledge.
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="6c5wgu9"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                data-oid="t9f3vj4"
              >
                <div className="relative mb-6" data-oid="ux.smf_">
                  <div
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300"
                    data-oid="84ovrtv"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      data-oid="by4yzkr"
                    />
                  </div>
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    data-oid="mj.uud0"
                  >
                    <Heart className="w-4 h-4 text-white" data-oid="5l1fxu9" />
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-1"
                  data-oid="jdeeho7"
                >
                  {member.name}
                </h3>
                <p
                  className="text-blue-600 font-medium mb-2"
                  data-oid="9de5650"
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-3" data-oid="_y3lfxw">
                  {member.bio}
                </p>
                <div
                  className="bg-gray-50 rounded-lg px-3 py-1 inline-block"
                  data-oid="yv.e52d"
                >
                  <span className="text-xs text-gray-700" data-oid="zckepdz">
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
      data-oid=":ms:m0l"
    >
      <div className="container mx-auto px-4" data-oid="t7jnrp9">
        <div className="max-w-6xl mx-auto" data-oid="612l9d4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="lj.aftg"
          >
            <div
              className="bg-transparent rounded-2xl p-8 max-w-2xl mx-auto"
              data-oid="umx3_tg"
            >
              <h3
                className="text-2xl font-bold text-gray-900 mb-4"
                data-oid=":1-i:5s"
              >
                Join Our Journey
              </h3>
              <p className="text-gray-600 mb-6" data-oid="ry9rg3.">
                Be part of the next chapter in property education. Whether
                you're a student, instructor, or industry partner, there's a
                place for you in our growing community.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-oid="r3yo3hp"
              >
                <Link href="/courses" data-oid="0-gfhax">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl transition-all duration-300 group"
                    data-oid="f8zrtqe"
                  >
                    Start Learning
                    <ArrowRight
                      className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                      data-oid="3wiywbl"
                    />
                  </Button>
                </Link>
                <Link href="/contact" data-oid="2so_m:h">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl transition-all duration-300"
                    data-oid="5pwtvq4"
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
      <Navbar data-oid="qm2rq9l" />
      <div className="bg-white" data-oid="42:03:2">
        <StoryHeroSection data-oid="vucl3e1" />
        <FounderStorySection data-oid="074x8yz" />
        <OurPurposeSection data-oid="lsk7sh3" />
        <ValuesInActionSection data-oid="ss8ls24" />
        <MeetTeamSection data-oid="se4fy-c" />
        <FutureVisionSection data-oid="b8x-q-b" />
      </div>
    </>
  );
}
