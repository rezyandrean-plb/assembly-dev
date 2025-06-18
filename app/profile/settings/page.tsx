"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="ha.386w">
      <div className="mb-6" data-oid="vgm5:7d">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="bfp85ut">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid=".5po3o:">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="-cpaveo">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid=":k8g7di"
        >
          <Bell className="h-4 w-4" data-oid="wvjsrou" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="hd2saiw"
        >
          <Palette className="h-4 w-4" data-oid="jcyegtf" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="tg1n5_o"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="jfge1t7"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="3ho:ycg"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="_c0id2w">
              <div
                className="flex items-center justify-between"
                data-oid="9n-qw42"
              >
                <div data-oid="-optr56">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="yxmm2p8"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="op9-.2a">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="md8gg5g"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="jkxkhfk"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="t-h-vq2"
                  ></div>
                </label>
              </div>

              <div data-oid="e4b38xk">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="nj-ekg6"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="t0y9nt1">
                  <div
                    className="flex items-center justify-between"
                    data-oid="9atzdas"
                  >
                    <div data-oid="4phdvts">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="..quqyy"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="7e7ozlv">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="1ue:qb-"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="0gzoqmg"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="a-fzxjm"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid=":i0cq_:"
                  >
                    <div data-oid=":kax21n">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="c7vu7:s"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="39msyh0">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid=":v:wgpw"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="i8t2v_-"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="in5c87q"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="m0o_0yd"
                  >
                    <div data-oid="fjkqg-n">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="iayb:3a"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="yfx6gq-">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="s-:-4bc"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="ndd__tr"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="..4jq8w"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="8d3bqh7"
                  >
                    <div data-oid="vaqllg8">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="4dao5_4"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="w1:geph">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="4n.wlcj"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="25lmt93"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="1eky:76"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="id:9:s0">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="e9l_i:t"
                >
                  <Save className="h-4 w-4" data-oid="4dg:9te" />
                  Save Notification Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "appearance" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="h_bbcpi"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="s0-o-hp"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="s:947q3">
              <div data-oid="nec9nn7">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="e5chthd"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid=":n6ns_4">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="k96tm9u"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="jmmc-oe"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="r9qz92g"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="3z58:0-">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="vr0:k4y"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="w8ig6on"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="3630hit"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="stxbr81">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="7yzr4yw"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="9n3l4lc"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="m0297z0"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="swj8-4z">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="1s.l63z">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="pf0-w9r"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="cwn9q65">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="o:p6q49"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="ccjcz9o"
                    />

                    <span className="text-xs mb-2" data-oid="ix7o7r_">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="yto:j66">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="wbgtkgd"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="aak51tk"
                    />

                    <span className="text-sm mb-2" data-oid="c1o4mgl">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="uuyp5i4">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="0bs:i62"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="pt_uiif"
                    />

                    <span className="text-base mb-2" data-oid="ef:u3mf">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="f0xgcqt">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid=".i9j3m:"
              >
                <div data-oid="8xjv99u">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="h3n3t2n"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="hr9676g">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="05vgi.a"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="ig91o4e"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="yak5-o4"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid=".znbgb-"
              >
                <div data-oid="8hv7821">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="tpkel48"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="y1wegrf">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="yidrde0"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="0w:v2ge"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="inrmcyz"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="3k2_kaq">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="0maygyx"
                >
                  <Save className="h-4 w-4" data-oid="-3zuvel" />
                  Save Appearance Settings
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
