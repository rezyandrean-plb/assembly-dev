"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="76eut8v">
      <div className="mb-6" data-oid="11v4ctp">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="ci6ij9w">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="h78lo6l">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="p8soz-5">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="dw6q6ge"
        >
          <Bell className="h-4 w-4" data-oid="e.:aqn." />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="t_wwkp1"
        >
          <Palette className="h-4 w-4" data-oid="_wzc4o4" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="i3z:nnm"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="io9y37e"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="10_gnoo"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="-c_qz6w">
              <div
                className="flex items-center justify-between"
                data-oid="cxwwuby"
              >
                <div data-oid="3db4e33">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="4lpm-2n"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="dfsrglu">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="1.0x14b"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="p3m466f"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="35_x5ii"
                  ></div>
                </label>
              </div>

              <div data-oid="9mm5x8k">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="3nll3o4"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="o-yfwtn">
                  <div
                    className="flex items-center justify-between"
                    data-oid="ye73co8"
                  >
                    <div data-oid="u:oa7xk">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="-:-qo2s"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="l00j4mm">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="hsrdlqn"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="sb9u0sj"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="8lc-7du"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="k4fda7m"
                  >
                    <div data-oid="4e:crmn">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="whzwc8q"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="3z8wf1n">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="txs1-lo"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="7j8zn.a"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="kcot_ui"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="43njxyd"
                  >
                    <div data-oid="0v6:bqm">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="8yasfv4"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="autr2_n">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="vgivtlv"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="31ewrf5"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="mp61x5l"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="tn114t8"
                  >
                    <div data-oid="u_r2pg.">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="uyrhksy"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="snylrxm">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="hne90ow"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="4by3c:o"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="6w612j5"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="cnrsez_">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="ttz8bss"
                >
                  <Save className="h-4 w-4" data-oid="k3.whbw" />
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
            data-oid="-y1rdd:"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="s:4:jsv"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="txj7y_4">
              <div data-oid="v6o23je">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="yldb-9k"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="1uopfsx">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="rn-qsjb"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="b5rubg."
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="fho3hkr"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="l3e-lhg">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="v9llo21"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="i0okpmx"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="8gk8fhy"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="lsyew3:">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="s:dq3db"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="na722wn"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid=":ut7cds"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="y0_qrur">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid=":87199s">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="nancyx6"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="jef:ot_">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="c6xzwkk"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="tl:myc_"
                    />

                    <span className="text-xs mb-2" data-oid="uhmeg4z">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="9ildn3u">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="gk6mzp8"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="fab_ix_"
                    />

                    <span className="text-sm mb-2" data-oid="8bkrozs">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="nc80r5_">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="fq:9rc8"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="6.u4wu4"
                    />

                    <span className="text-base mb-2" data-oid="6uqi1cm">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="ivy:iid">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid=".rhb2ix"
              >
                <div data-oid="9464p40">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="bbbwzs8"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="wei.kvy">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="sp4qgc1"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="f14:d0q"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="59iwozs"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="-4agm7d"
              >
                <div data-oid="t7pzwrn">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="5poqkfs"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="ez:u2qj">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="jpibltp"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="o7g_370"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="doupm-:"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="ov9m.y:">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="1qhrkzd"
                >
                  <Save className="h-4 w-4" data-oid="dazc36q" />
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
