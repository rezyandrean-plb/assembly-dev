"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="45upqpe">
      <div className="mb-6" data-oid=":mow7ng">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="btpx091">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="u5mjtz6">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="p91py2r">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="20_xalv"
        >
          <Bell className="h-4 w-4" data-oid="3f5d3-f" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="u8i6kpq"
        >
          <Palette className="h-4 w-4" data-oid="mt.y9ni" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="-i4wb-b"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="8rx2i-5"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="7:4gl9c"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="yrmr27p">
              <div
                className="flex items-center justify-between"
                data-oid="p1fwv--"
              >
                <div data-oid=":.b5gn.">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="4wjanob"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="-vllvm9">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="2n9f9ra"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="56fk8qd"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="t9pa3vj"
                  ></div>
                </label>
              </div>

              <div data-oid="vsbam2:">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="51vl:7n"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="shtvtmn">
                  <div
                    className="flex items-center justify-between"
                    data-oid="-xj1vp8"
                  >
                    <div data-oid="fcqdvbk">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="8s7mcya"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid="_.f2y37">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="sjzifcg"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="mj5iwok"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="vk1fl4m"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="i.u8140"
                  >
                    <div data-oid="gkzd90-">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="gz2kl55"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="y2.uhlb">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="4xp:2rx"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="o6_m38t"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="lar_.gd"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="w:zvvtt"
                  >
                    <div data-oid="b--z:ky">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="4q6_2c9"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="6_6:x.x">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="nujyjgm"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="o_x.3pu"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid=":1sd5d9"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="f3ec.bk"
                  >
                    <div data-oid="an:hbfv">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="9mwfwu:"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="bknnc.:">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="k6g36gq"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="._09h_l"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="e3qyypi"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="..6i6u1">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="ytn-olr"
                >
                  <Save className="h-4 w-4" data-oid="3cnns5n" />
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
            data-oid="22emq:a"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="2fezj6e"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="nz8ubuz">
              <div data-oid="dxtvd.g">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="jr8f1c5"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="n7aob.d">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="2-0mks-"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="_-e3x06"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="x60yd.6"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="lv_vqbe">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="ys76uf."
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="-31z8un"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="5z.cdnv"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="7gd-0tl">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="y-h5v5f"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="cm-j0kc"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="953bl-p"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="ps8nh6.">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="pf6b_s:">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="j6_4zbq"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="so3zy.n">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="ig9zj0v"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="41a4du0"
                    />

                    <span className="text-xs mb-2" data-oid="d1-8mce">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="aj4ecgb">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="8_hq6pp"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="yc1ymox"
                    />

                    <span className="text-sm mb-2" data-oid=":p0nsio">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="erhwdh5">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="03y8quh"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="q_v.2p_"
                    />

                    <span className="text-base mb-2" data-oid="f3pq-:w">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="1bwhuq.">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="n35m6lg"
              >
                <div data-oid="fia:7xy">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="cry4f:f"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="jolzt6g">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="5a48tzr"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="ti05a2e"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="76r.t1c"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid=".lh:_yi"
              >
                <div data-oid="l727j7j">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="-tv10vb"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="n9tmn-c">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="v62m4o-"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="m-6_ht0"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="i:ktfuy"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="crghc3f">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="5q1cyu2"
                >
                  <Save className="h-4 w-4" data-oid="qxhpibe" />
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
