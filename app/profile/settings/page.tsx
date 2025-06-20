"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="s9_aqei">
      <div className="mb-6" data-oid="kli_f.m">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="wn9m_na">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="dg9eu9s">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="iwo20-r">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="zxzi:jx"
        >
          <Bell className="h-4 w-4" data-oid="q_zmv24" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="gqes0-f"
        >
          <Palette className="h-4 w-4" data-oid="2e0wl6e" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="0oe8oji"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="rpojv78"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="qpkky17"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="h19lavi">
              <div
                className="flex items-center justify-between"
                data-oid="n7q69cm"
              >
                <div data-oid="hqdy571">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="raxxdw:"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="iqckmnh">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="knu7kia"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="1xlde4o"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="2uoo.ss"
                  ></div>
                </label>
              </div>

              <div data-oid="n7yu2u-">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="e4bdl.e"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="ajfcub:">
                  <div
                    className="flex items-center justify-between"
                    data-oid="_p315_t"
                  >
                    <div data-oid="pg6:8ga">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="pj9ck26"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid=":wrhnto">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="nmm3h:w"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="vlk9u3g"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="7mrg3dd"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="oo7r_m0"
                  >
                    <div data-oid="hymwn49">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="bhq7yik"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="lq.88q:">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="na790hx"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="ae9c.9x"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="xmmh6p9"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="h0wwkrx"
                  >
                    <div data-oid="zgo_do-">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="ojzt_hm"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid=".6cwy66">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="dh_mupy"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="mtr1bel"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="nipx-hf"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="uml_8ge"
                  >
                    <div data-oid="p4ku7iz">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="q451v3u"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="u01y9m8">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="o-swryy"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="h66-zq3"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="5jj80.j"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="gvf4knu">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="kq-ag90"
                >
                  <Save className="h-4 w-4" data-oid=":n3jsue" />
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
            data-oid="lspyhg6"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="s3jyw7f"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="r-s9zs0">
              <div data-oid="15m-xsg">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="_bwhn1:"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="yh74yit">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="l1x6jyk"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="ebroc28"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="upgpuva"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="jc732xs">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="n_u604h"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="8_k-w.y"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="3d4g-f1"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="kne.p2m">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="yn7p83v"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="n3suzci"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="ejsbtn1"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="09zinqf">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="r8dji04">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="d.cnro_"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="yd7_po.">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="u.uvm-5"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="ljg:w-s"
                    />

                    <span className="text-xs mb-2" data-oid="e0tzblf">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="qahtvhy">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="tzz9g5l"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="5kuft.c"
                    />

                    <span className="text-sm mb-2" data-oid="gj.juz0">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="3g0lpek">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="0h59riq"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="9uw5pmz"
                    />

                    <span className="text-base mb-2" data-oid="plpb97i">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="gwgyhv4">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="jg4o2db"
              >
                <div data-oid="2:38c0a">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="4xv4p4-"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="fi.j.dg">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="tn4eaw9"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="bgfz526"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="nfvo047"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="8hhgu4g"
              >
                <div data-oid="8j.9uyq">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="nkn-39b"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="duyi2xk">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="7c6oc3s"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="qjw67kp"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="iqseacl"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="3njwy:.">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="m7lzjfo"
                >
                  <Save className="h-4 w-4" data-oid="0inl_rg" />
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
