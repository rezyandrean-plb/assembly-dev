"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users } from "lucide-react";

export default function CtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden"
      data-oid="ipwhr2a"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        data-oid="4l1nq5g"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400/30 to-transparent"
          data-oid="spp311_"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-orange-700/20 to-transparent"
          data-oid="iaby3zz"
        ></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10" data-oid="kvpzon7">
        <div
          className="max-w-4xl mx-auto text-center text-white"
          data-oid="ho7nqrc"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            data-oid="wc0k3c3"
          >
            Explore Our Content & Join the Community
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="1ff9wvp"
          >
            Take the next step in your real estate journey with Assembly's
            resources and network of professionals
          </motion.p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-6"
            data-oid="17buyn6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="ekg83:1"
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full flex items-center"
                data-oid="kwdd:bb"
              >
                <BookOpen className="mr-2 h-5 w-5" data-oid="yx9tad6" />
                Explore Content
                <ArrowRight className="ml-2 h-5 w-5" data-oid="k4u3is9" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="m3-lol0"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full flex items-center"
                data-oid="92-gigy"
              >
                <Users className="mr-2 h-5 w-5" data-oid="3rkc00x" />
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" data-oid="ae2pmyf" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
