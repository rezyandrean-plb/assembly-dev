"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#f0f4f8] relative overflow-hidden"
      data-oid="jm4abj4"
    >
      <div className="container mx-auto px-4 relative z-10" data-oid="hq8q8ph">
        <div
          className="max-w-4xl mx-auto text-center text-gray-800"
          data-oid="dsr37lx"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            data-oid="z5w2ybu"
          >
            Can't Find What You're Looking For?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="lfxcj4h"
          >
            There's so much to learn that it doesn't all fit into one page.
            Click below to access our content.
          </motion.p>

          <div className="flex justify-center" data-oid="pxz_qol">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
              data-oid="q5:87kw"
            >
              <Button
                size="lg"
                className="bg-[#123B79] text-white hover:bg-[#0A2A5E] px-8 py-6 text-lg rounded-full flex items-center"
                data-oid="5.h5qak"
              >
                <BookOpen className="mr-2 h-5 w-5" data-oid="u5-no-c" />
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" data-oid="bnnmv:8" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
