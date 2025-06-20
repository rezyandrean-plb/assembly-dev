"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="0xatmw-">
      <div className="mb-6" data-oid="k92gzae">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="pk032zi">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="fdsj342">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="ha2o:tg">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="vvjfkin"
        >
          <Bell className="h-4 w-4" data-oid="o7g4ztf" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="m3:yjyn"
        >
          <Palette className="h-4 w-4" data-oid="v9_m9cp" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="ewhf672"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="4tk2_yl"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="0r5pzjl"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="7_qiugg">
              <div
                className="flex items-center justify-between"
                data-oid=".bldo6_"
              >
                <div data-oid="ei5l0te">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="cxds0tr"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="0f3f_jt">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="ad_er3s"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="q7kd81u"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="uwq3cg."
                  ></div>
                </label>
              </div>

              <div data-oid="q:n242s">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="ez9bgj8"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="drb9wsr">
                  <div
                    className="flex items-center justify-between"
                    data-oid="3p:ihuk"
                  >
                    <div data-oid="o5lpffy">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="og:03k6"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="60owbmf">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="xvruwpk"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="trxl0mj"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="-.yq52:"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="4n2jeim"
                  >
                    <div data-oid="19z33ui">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="srdcw3u"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="34h-3r5">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="cajt2hz"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="s1:24d7"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="w9wioz4"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="lbtlhd0"
                  >
                    <div data-oid="-neamg3">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="zeyd0my"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="jsd.te8">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="rnn5qci"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="ygxopiw"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="usxe24s"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="8-9hgf_"
                  >
                    <div data-oid="d8u:l6s">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="1go2q1."
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="yezh276">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="zoiuzfh"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="3mcz9a4"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="-458zfz"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid=".a1w0ho">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="uhmih0u"
                >
                  <Save className="h-4 w-4" data-oid="15aa:54" />
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
            data-oid="yx8j10t"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="h57:..t"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="t0ml1tu">
              <div data-oid="-hnmzr:">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="ew97k4t"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="v5tr-t9">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="cf4f7tz"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="z4barcf"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="41x6j2j"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="4n:-1p6">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="4h0zbdf"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid=":v69:s4"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="my86:9j"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="jy_omhq">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="4xjaj7n"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="rkhbpok"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="9ar9ntj"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="2_:z9m6">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="xfu7ez9">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="q9dm64."
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="f-dit2h">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="c1ua9ys"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="2pz527i"
                    />

                    <span className="text-xs mb-2" data-oid="dz_kf6u">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="kz86xn4">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="7hi1-hz"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="sv0im9_"
                    />

                    <span className="text-sm mb-2" data-oid="o04-fqe">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="ki6.1y3">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="36f3o4j"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="0kwyl6r"
                    />

                    <span className="text-base mb-2" data-oid="b.z0e2x">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="gclt1:8">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="qj1s9:l"
              >
                <div data-oid="_s8q65.">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="alffr4u"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="6l7xk0x">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="qjf1bzm"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="tz.2if5"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="bocyl9d"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="6f1bquw"
              >
                <div data-oid="3vcy58p">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="rfatm:3"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="z:or:qq">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="27tr63j"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="rf-w79:"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="s_du.vt"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="8pssnhy">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="e0a0:d6"
                >
                  <Save className="h-4 w-4" data-oid="cighdx_" />
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
