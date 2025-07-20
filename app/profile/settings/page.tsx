"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Palette, Save } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <div className="p-6" data-oid="fpv7-5i">
      <div className="mb-6" data-oid=":exr9qv">
        <h1 className="text-2xl font-bold text-gray-800" data-oid="w3intl0">
          Settings
        </h1>
        <p className="text-gray-500 mt-1" data-oid="d5.0gae">
          Manage your preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="apof.53">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "notifications"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("notifications")}
          data-oid="_31cpz3"
        >
          <Bell className="h-4 w-4" data-oid="am6ss0f" />
          Notifications
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeTab === "appearance"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("appearance")}
          data-oid="9pu-dyy"
        >
          <Palette className="h-4 w-4" data-oid="xz_t1z:" />
          Appearance
        </button>
      </div>

      {/* Content */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        data-oid="qiwbxu_"
      >
        {activeTab === "notifications" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            data-oid="1f.i.uc"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid="px1ua8f"
            >
              Notification Settings
            </h2>
            <div className="space-y-6" data-oid="0z4bg1e">
              <div
                className="flex items-center justify-between"
                data-oid="mq-o_u_"
              >
                <div data-oid="jc9sbbz">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="0m:1e2c"
                  >
                    Email Notifications
                  </p>
                  <p className="text-xs text-gray-500" data-oid="njyokek">
                    Receive notifications via email
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="_vfqt:z"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                    data-oid="_j-pi.j"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="4-4evte"
                  ></div>
                </label>
              </div>

              <div data-oid="iud-jiu">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="qhalpk_"
                >
                  Email Preferences
                </h3>
                <div className="space-y-4" data-oid="s_x4crb">
                  <div
                    className="flex items-center justify-between"
                    data-oid=".jzu6ta"
                  >
                    <div data-oid="q2j:-g_">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="iccoe2_"
                      >
                        Course Updates
                      </p>
                      <p className="text-xs text-gray-500" data-oid=":hyd4r8">
                        Updates about courses you're enrolled in
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="bmabhdc"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="ovyijnb"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="uqwp:lm"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="u-x8:2:"
                  >
                    <div data-oid="c.o3pq6">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="s0wckdr"
                      >
                        New Course Announcements
                      </p>
                      <p className="text-xs text-gray-500" data-oid="3.opc-7">
                        Notifications about new course releases
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="bab5ob2"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="x0k8sl6"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="g42_.a2"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="4ro5rr6"
                  >
                    <div data-oid="fw:pk3p">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="6y.bxku"
                      >
                        Promotions and Discounts
                      </p>
                      <p className="text-xs text-gray-500" data-oid="b3ir7iu">
                        Special offers and discounts on courses
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="45_wn:o"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        data-oid="7g.03u8"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="so7-rxh"
                      ></div>
                    </label>
                  </div>

                  <div
                    className="flex items-center justify-between"
                    data-oid="afhm87a"
                  >
                    <div data-oid="zjqi09c">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="pejtt-n"
                      >
                        Learning Reminders
                      </p>
                      <p className="text-xs text-gray-500" data-oid="y58pe.4">
                        Reminders to continue your learning
                      </p>
                    </div>
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      data-oid="ch08_fk"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        data-oid="t:x3gfe"
                      />

                      <div
                        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        data-oid="k9-nnr9"
                      ></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-oid="9i35wba">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid=":uwjsnh"
                >
                  <Save className="h-4 w-4" data-oid="902v6ex" />
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
            data-oid="68xwze:"
          >
            <h2
              className="text-xl font-bold text-gray-800 mb-6"
              data-oid=":i2jhvf"
            >
              Appearance Settings
            </h2>
            <div className="space-y-6" data-oid="l_tgthb">
              <div data-oid="ucfpafx">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="0dd7i:8"
                >
                  Theme
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="9ceqxyw">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="5a9z193"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      defaultChecked
                      data-oid="wkakj5b"
                    />

                    <div
                      className="w-full h-16 bg-white border border-gray-200 rounded-md mb-2"
                      data-oid="czmd_59"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="pj925yo">
                      Light
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="fhwxnpp"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="y61rxue"
                    />

                    <div
                      className="w-full h-16 bg-gray-800 border border-gray-700 rounded-md mb-2"
                      data-oid="ksa90q7"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="7b66-ja">
                      Dark
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="oefqihw"
                  >
                    <input
                      type="radio"
                      name="theme"
                      className="sr-only"
                      data-oid="puq5sbu"
                    />

                    <div
                      className="w-full h-16 bg-gradient-to-b from-white to-gray-800 border border-gray-200 rounded-md mb-2"
                      data-oid="mkxnpo0"
                    ></div>
                    <span className="text-sm text-gray-700" data-oid="i9bs.dw">
                      System
                    </span>
                  </label>
                </div>
              </div>

              <div data-oid="mgo421-">
                <p
                  className="text-sm font-medium text-gray-700 mb-2"
                  data-oid="bv_cawj"
                >
                  Font Size
                </p>
                <div className="grid grid-cols-3 gap-4" data-oid="70.3a6d">
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="k5uh7s1"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="pii6w8j"
                    />

                    <span className="text-xs mb-2" data-oid="e.b40_o">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="v:sm2.k">
                      Small
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="9wav6t_"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      defaultChecked
                      data-oid="r2b7fsj"
                    />

                    <span className="text-sm mb-2" data-oid="tu99tq.">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid="yzx8yu5">
                      Medium
                    </span>
                  </label>
                  <label
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                    data-oid="uamr46_"
                  >
                    <input
                      type="radio"
                      name="fontSize"
                      className="sr-only"
                      data-oid="uckv:8-"
                    />

                    <span className="text-base mb-2" data-oid="mpwa.uq">
                      Aa
                    </span>
                    <span className="text-sm text-gray-700" data-oid=".30i9dt">
                      Large
                    </span>
                  </label>
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="qd9od41"
              >
                <div data-oid="nrje2qv">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="v7_9ufo"
                  >
                    Reduce Animations
                  </p>
                  <p className="text-xs text-gray-500" data-oid="s0v1289">
                    Minimize motion effects throughout the interface
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="ymcdr6z"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="7gpdz2c"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="6mfb2il"
                  ></div>
                </label>
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="nd.iix8"
              >
                <div data-oid="47ps07e">
                  <p
                    className="text-sm font-medium text-gray-700"
                    data-oid="qy2g_t5"
                  >
                    High Contrast Mode
                  </p>
                  <p className="text-xs text-gray-500" data-oid="x1arfrm">
                    Increase contrast for better visibility
                  </p>
                </div>
                <label
                  className="relative inline-flex items-center cursor-pointer"
                  data-oid="prokmso"
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    data-oid="6ha.qjn"
                  />

                  <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                    data-oid="1vwagjv"
                  ></div>
                </label>
              </div>

              <div className="pt-4" data-oid="43_.obb">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="yd7423m"
                >
                  <Save className="h-4 w-4" data-oid="fompry:" />
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
