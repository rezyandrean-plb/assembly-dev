"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactAnimation() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      data-oid="2d9z40w"
    >
      {/* Background elements */}
      <div className="absolute inset-0" data-oid="gv0do_n">
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
          data-oid="yynjlee"
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
          data-oid="iu-r.ff"
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
          data-oid="avowuem"
        />
      </div>

      {/* Phone device */}
      <motion.div
        className="relative bg-white rounded-[40px] w-[220px] h-[440px] shadow-xl border-8 border-gray-800 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        data-oid="5wm.l8j"
      >
        {/* Phone notch */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-10"
          data-oid="rcchvv8"
        ></div>

        {/* Screen content */}
        <div
          className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-4 pt-8 flex flex-col"
          data-oid="7hck6rf"
        >
          {/* App header */}
          <div className="text-center mb-4" data-oid="0ckpt.m">
            <h3 className="font-bold text-blue-900" data-oid="4vphn5c">
              Assembly SG
            </h3>
            <p className="text-xs text-gray-500" data-oid="drgjqzl">
              Contact Us
            </p>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-hidden flex flex-col justify-end space-y-3"
            data-oid="37.lo.:"
          >
            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              data-oid="dfpocu4"
            >
              <p className="text-xs text-gray-700" data-oid="_:sr1o8">
                Hello! I'm interested in property investment courses.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-600 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 mr-auto max-w-[80%] shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              data-oid="yipi1mr"
            >
              <p className="text-xs text-white" data-oid="1z4q7ko">
                Hi there! We'd be happy to help you with our property investment
                courses.
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              data-oid="hicmgel"
            >
              <p className="text-xs text-gray-700" data-oid="t-2nofk">
                Great! When can we schedule a consultation?
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-600 rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 mr-auto max-w-[80%] shadow-sm"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              data-oid="yxev37y"
            >
              <p className="text-xs text-white" data-oid="8bt7tac">
                We're available Mon-Fri, 9am-6pm. Would you like us to call you?
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-100 rounded-tl-xl rounded-tr-xl rounded-br-xl p-3 ml-auto max-w-[80%] shadow-sm"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              data-oid=":x-:_bg"
            >
              <p className="text-xs text-gray-700" data-oid="y2:hajs">
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
              data-oid="l590wv5"
            >
              <div className="flex space-x-1" data-oid="da-z0xb">
                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: 0,
                  }}
                  data-oid="3er1ilu"
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
                  data-oid="5swmstc"
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
                  data-oid="8oohepc"
                />
              </div>
            </motion.div>
          </div>

          {/* Message input */}
          <div
            className="mt-3 bg-white rounded-full border border-gray-300 flex items-center p-1 shadow-sm"
            data-oid="fe-auhx"
          >
            <div className="flex-1 px-2" data-oid="nmw0376">
              <div
                className="h-5 w-full bg-gray-100 rounded-full"
                data-oid="wslicwz"
              ></div>
            </div>
            <motion.div
              className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-oid="897n0l8"
            >
              <Send className="h-3 w-3 text-white" data-oid="6w5.r7u" />
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
        data-oid="21qos.6"
      >
        <Mail className="h-6 w-6 text-blue-600" data-oid=":4xvtac" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40 bg-blue-100 p-3 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
        data-oid="kch62w8"
      >
        <Phone className="h-6 w-6 text-blue-600" data-oid="gl0.zml" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-40 bg-blue-100 p-3 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        whileHover={{ y: -5, scale: 1.1 }}
        data-oid="ywtpj6u"
      >
        <MessageSquare className="h-6 w-6 text-blue-600" data-oid="hy104.." />
      </motion.div>
    </div>
  );
}
