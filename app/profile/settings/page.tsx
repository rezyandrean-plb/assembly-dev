"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="7rar7.i">
      <div className="mb-6" data-oid="ke:a3vx">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="vocq301">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="v-nv29z">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="ljnfpkt">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="aqt9yv4"
        >
          <Bell className="h-4 w-4" data-oid="mr1su6_" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="hwuax-c"
        >
          <Palette className="h-4 w-4" data-oid="9aypr3i" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="ooq2_f0"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid=".j-b2qd"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="fgeb5k9"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="vfz.l2q">
              <div
                className="flex items-center justify-between"
                data-oid="j8ah6n7"
              >
                <div data-oid="p-o5zqi">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="sltopxy"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="2rlrjn3">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="oevcdq0"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="e0fsx7v"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="_muy:cc"
                  ></div>
                </label>
              </div>

              <div data-oid="y-r9uq-">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="gv99kz4"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="hc6r9t2">
                  <div
                    className="flex items-center justify-between"
                    data-oid="3te0uok"
                  >
                    <div data-oid="uo..lx-">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="1rk7ag:"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="r.3wwrg">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="9l64e3a"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="dsydc7z"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="xznn74a"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="jeyufp:"
                  >
                    <div data-oid="8iiquft">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="w9:-qqe"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="elckro:">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="zn6z7:f"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="ic888j_"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="0.3_xwy"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="b64.7ok"
                  >
                    <div data-oid="l96-uzm">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="cwb_rk4"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="1.8xgwj">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="e4-4.v-"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="ya482sn"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="qsq3o9w"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="myh2um5"
                  >
                    <div data-oid="51yj9-l">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="ensu_oi"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="7c1xbcd">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="c8ntqjt"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="wmh:-pk"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="00thcls"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="-zf.g3z">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="_4b_1uc"
                >
                  <Save className="h-4 w-4" data-oid="wrx:y68" />
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
            data-oid="mbqd5dj"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="rf-9a1:"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="a7.1wg2">
              <div data-oid="01m.gi6">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="_ldvn.-"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid=":awyx3-">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="dn9rvjl"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="7y4nt0l"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="_68jz8f"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="ndt1pgz">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="bb7pxk:"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="9c0zlfp"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="jhggpf4"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="8xcb6tb">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="u25656x"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid=":w_gspr"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="b-qg-rs"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="gic6q_q">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="1inszkh">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="98i466c"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="mv4p0es">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="j5o.60-"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="a47bb52"
                    />

                    <span className="text-xs mb-2" data-oid="4ob-am2">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="tgxyo89">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid=":xt7h5p"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="44yf8t5"
                    />

                    <span className="text-sm mb-2" data-oid="0qmvbbj">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="r5fs1xx">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="ko_rtc2"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="l..pynp"
                    />

                    <span className="text-base mb-2" data-oid="12n3tgy">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="cwz1b.0">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="s6u-a2m"
              >
                <div data-oid="ygwpyho">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="7weajs_"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="iswg6i2">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="it0_zx9"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="-gk72hj"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="y874o50"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="ci1sy9q"
              >
                <div data-oid="xzzqr78">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="bm1p-vw"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="rdm8xl0">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="k4v:cny"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="42h0x1w"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="wkd_sp-"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="ay28azj">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="tla6cu0"
                >
                  <Save className="h-4 w-4" data-oid="n6:m3m3" />
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
