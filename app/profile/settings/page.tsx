"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="rd:aya1">
      <div className="mb-6" data-oid="n-3vde1">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="swvke_j">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="8vq884.">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="rxirgmy">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="--bhew."
        >
          <Bell className="h-4 w-4" data-oid="8yk21dz" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="1lbbaak"
        >
          <Palette className="h-4 w-4" data-oid="sw624a." />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="sa1v8ac"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="c4-9whj"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="cno5f_."
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="q1kcdhy">
              <div
                className="flex items-center justify-between"
                data-oid="lfscu0e"
              >
                <div data-oid="8iksm2i">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="ke44m9a"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="3xd05kt">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="gmfldi3"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="-p8c2s:"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="fvpmvuo"
                  ></div>
                </label>
              </div>

              <div data-oid="j:2b:ku">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="eziym-7"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="usl:4po">
                  <div
                    className="flex items-center justify-between"
                    data-oid="jxi6mpb"
                  >
                    <div data-oid="f5fczfu">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="9gbm2d:"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="j:slx9v">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="o0me_3b"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="kt06-9."
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="pwbj316"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="9rock2e"
                  >
                    <div data-oid="pu7zc-f">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid=":-nfdn-"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="r5d3-p1">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="a74igni"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="ack13i3"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="r1jn6e."
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="w4p7qy:"
                  >
                    <div data-oid="uyj59jx">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="ouie4lk"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="xnsx3rk">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="dpl9f_6"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="u:yf9f4"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="qc_.0cw"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="l0c-0ud"
                  >
                    <div data-oid="b5459:6">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="sn1wwgx"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="fxps2b-">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="dkt751k"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="v:hbgtw"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="0ctm344"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="t62mzd6">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="l-h69_0"
                >
                  <Save className="h-4 w-4" data-oid="0r-77t7" />
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
            data-oid="owxt1s8"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="0eii5:w"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="a43s_39">
              <div data-oid="zanismv">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="2f7er65"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="cws22ct">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="6ep3tml"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="pijonl2"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="3.l_vcw"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="1ke79oz">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="jcazxqb"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="stqzdcn"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="4c-0sr3"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="rzee2o5">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="nw_vxc6"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="rs0ioyp"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="t78qcv8"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="-li4puq">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="pw0flbz">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid=".jw_pd5"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="s0higyz">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="uqkhj6s"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="lu70l6i"
                    />

                    <span className="text-xs mb-2" data-oid="36jqfqt">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="s5s5xkp">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="oc2pqch"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="g1-4t8z"
                    />

                    <span className="text-sm mb-2" data-oid="hst-dj6">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="mz_:wzm">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="sroiits"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="_omzha9"
                    />

                    <span className="text-base mb-2" data-oid="4r2uatk">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="2250_-h">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="rz:7h.a"
              >
                <div data-oid="dvz3u0t">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid=":0fr-58"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="9-4l7zy">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="0jlx.p9"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="9b1tgyx"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="_-4j4um"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="35z440n"
              >
                <div data-oid="0m7kneh">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="nfkjkjs"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="j5b4zuh">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="wdkcg-n"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="_wyxd_n"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="lrnr9cr"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="n6i9-f9">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="p71hjmd"
                >
                  <Save className="h-4 w-4" data-oid="tcdswad" />
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
