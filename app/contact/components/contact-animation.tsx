"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactAnimation() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      data-oid="4-kh8on"
    >
      {/* Background elements */}
      <div className="absolute inset-0" data-oid="-y6-_vq">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-100 opacity-40"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          data-oid="5ne-dc_"
        />

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-200 opacity-30"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          data-oid="t0cthj."
        />

        <motion.div
          className="absolute top-1/2 right-20 w-20 h-20 rounded-full bg-blue-300 opacity-20"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
          data-oid="z-wvsge"
        />
      </div>

      {/* Phone device */}
      <motion.div
        className="relative bg-white rounded-[40px] w-[220px] h-[440px] shadow-xl border-8 border-gray-800 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        data-oid="l_s7rtd"
      >
        {/* Phone notch */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"
          data-oid="scp0rsi"
        ></div>

        {/* Screen content */}
        <div
          className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-4 pt-8 flex flex-col"
          data-oid="mvsj.d5"
        >
          {/* App header */}
          <div className="text-center mb-4" data-oid="h0e3e7w">
            <h3 className="font-bold text-blue-900" data-oid="rjmutrm">
              Assembly SG
            </h3>
            <p className="text-xs text-gray-500" data-oid="1k0x9tu">
              Contact Us
            </p>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-hidden flex flex-col justify-end space-y-3"
            data-oid="p.v5::j"
          >
            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              data-oid="cbd_5jd"
            >
              <p className="text-xs text-gray-700" data-oid="ty2to03">
                Hello! I'm interested in property investment courses.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-600 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 mr-auto max-w-[80%] shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              data-oid="jkr6y6x"
            >
              <p className="text-xs text-white" data-oid="xd4c1ce">
                Hi there! We'd be happy to help you with our property investment
                courses.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              data-oid="-:nw:kh"
            >
              <p className="text-xs text-gray-700" data-oid="3j6ddzh">
                Great! When can we schedule a consultation?
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-600 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 mr-auto max-w-[80%] shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              data-oid="ezi_z0m"
            >
              <p className="text-xs text-white" data-oid="z6xvhtw">
                We're available Mon-Fri, 9am-6pm. Would you like us to call you?
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              data-oid="5j9d2mz"
            >
              <p className="text-xs text-gray-700" data-oid="si4meax">
                Yes, please call me tomorrow at 10am.
              </p>
            </motion.div>

            {/* Typing indicator */}
            <motion.div
              className="bg-gray-200 rounded-full p-3 w-16 mr-auto flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: 3,
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
              }}
              data-oid=":mtriva"
            >
              <div className="flex space-x-1" data-oid="ip7awfw">
                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0,
                  }}
                  data-oid="465s0vc"
                />

                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.2,
                  }}
                  data-oid="fw01_3:"
                />

                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0.4,
                  }}
                  data-oid="3kaih2u"
                />
              </div>
            </motion.div>
          </div>

          {/* Message input */}
          <div
            className="mt-3 bg-white rounded-full border border-gray-300 flex items-center p-1 shadow-sm"
            data-oid="mai.8w."
          >
            <div className="flex-1 px-2" data-oid="mr9v67_">
              <div
                className="h-5 w-full bg-gray-100 rounded-full"
                data-oid="y_n3vto"
              ></div>
            </div>
            <motion.div
              className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-oid="sw:2w:p"
            >
              <Send className="h-3 w-3 text-white" data-oid="43owzig" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-20 left-20 bg-blue-100 p-3 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
        data-oid="fb9-jn:"
      >
        <Mail className="h-6 w-6 text-blue-600" data-oid="0p75lvk" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40 bg-blue-100 p-3 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
        data-oid="i2ny60j"
      >
        <Phone className="h-6 w-6 text-blue-600" data-oid="7.o8po." />
      </motion.div>

      <motion.div
        className="absolute top-40 right-40 bg-blue-100 p-3 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
        data-oid="65mi.h."
      >
        <MessageSquare className="h-6 w-6 text-blue-600" data-oid="09r7q6p" />
      </motion.div>
    </div>
  );
}
