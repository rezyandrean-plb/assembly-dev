"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Lock, Save, Upload, Camera, X } from "lucide-react";

export default function AccountPage() {
  // Add state for active tab in account section
  const [activeAccountTab, setActiveAccountTab] = useState("profile");
  const [profileImage, setProfileImage] = useState("/profile-placeholder.png");
  const [isHovering, setIsHovering] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);

      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          setProfileImage(event.target.result);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="p-6" data-oid=".8izmh.">
      <h1 className="text-2xl font-bold text-gray-800 mb-2" data-oid="evuoj98">
        Account Settings
      </h1>
      <p className="text-gray-600 mb-6" data-oid="_cp7xad">
        Manage your account information and security settings
      </p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="8kmzwxf">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
          data-oid="kvc7-iw"
        >
          <User className="h-4 w-4" data-oid="pfso48j" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
          data-oid="ywew133"
        >
          <Lock className="h-4 w-4" data-oid="85t_-m0" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6" data-oid="iz855e1">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="j._w-h3"
          >
            <div className="space-y-8" data-oid="cudqx_4">
              {/* Profile Picture Section */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-start gap-6"
                data-oid="uonik18"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  data-oid="bbmg_:j"
                >
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm"
                    data-oid="2od61x:"
                  >
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      data-oid="_z9nfgs"
                    />

                    {isUploading && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                        data-oid="xyq_zs_"
                      >
                        <div
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                          data-oid="b.ok8g:"
                        ></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                      data-oid="59j2_91"
                    >
                      <Camera className="h-8 w-8" data-oid="6t0o-u:" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    data-oid="lxeeu_6"
                  />
                </div>

                <div
                  className="flex flex-col items-center sm:items-start"
                  data-oid="6fr.x_9"
                >
                  <h3
                    className="text-lg font-medium text-gray-800 mb-2"
                    data-oid="ak57ry7"
                  >
                    Profile Picture
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 text-center sm:text-left"
                    data-oid="3j9_l2q"
                  >
                    Upload a profile picture to personalize your account.
                    <br data-oid="30n3g4p" />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3" data-oid="py21b1n">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                      data-oid="4-quvqu"
                    >
                      <Upload className="h-4 w-4" data-oid="ghwsmno" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() =>
                          setProfileImage("/profile-placeholder.png")
                        }
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                        data-oid="-4oc2js"
                      >
                        <X className="h-4 w-4" data-oid="562-1rf" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-6"
                data-oid="nyt3ya-"
              ></div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="8-mntvw"
              >
                <div data-oid="w0u7msv">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="jlb21i3"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="3eghic1"
                  />
                </div>
                <div data-oid=".bo8zmp">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="wi90ev7"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="02082-l"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="dl.:-ho"
              >
                <div data-oid="8xbp__g">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="s-5uzrx"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="z4us4j3"
                  />
                </div>
                <div data-oid="b_li4_z">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="j2mpy4s"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="g89zx3l"
                  />
                </div>
              </div>

              <div className="pt-4" data-oid="qkr3mn1">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="zxh4zt7"
                >
                  <Save className="h-4 w-4" data-oid="ed5vpym" />
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Tab Content */}
        {activeAccountTab === "security" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="-p24vns"
          >
            <div className="space-y-6" data-oid=":e51m0_">
              <div data-oid="b:t16a:">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="0-1rqwb"
                >
                  Change Password
                </h3>
                <div className="space-y-4" data-oid="s_n:yq:">
                  <div data-oid="lfialvs">
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="xn-cy2o"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="728d76a"
                    />
                  </div>
                  <div data-oid="slfcifx">
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="uqvygq8"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="nt6w5:."
                    />

                    <p
                      className="mt-1 text-xs text-gray-500"
                      data-oid="258zz:s"
                    >
                      Password must be at least 8 characters and include a
                      number and a special character.
                    </p>
                  </div>
                  <div data-oid="2gs99gl">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="32z9dgo"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="kz_ql1m"
                    />
                  </div>
                  <div data-oid="k2v-ue9">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                      data-oid="ame6jxc"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="s.p90rn">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="ny6y7hk"
                >
                  Two-Factor Authentication
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="2ttx27t"
                >
                  <div data-oid="zgebwqu">
                    <p className="text-sm text-gray-700" data-oid="erk2fdu">
                      Add an extra layer of security to your account
                    </p>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="ioyibae"
                    >
                      We'll send a verification code to your phone when you sign
                      in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                    data-oid="a_sopai"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="boqb.m8">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="3041kaj"
                >
                  Session Management
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                  data-oid="y16plc."
                >
                  <div
                    className="flex justify-between items-center"
                    data-oid="3r.nyop"
                  >
                    <div data-oid="3wx1f4r">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="nr8d66j"
                      >
                        Current Session
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="-s:4-av"
                      >
                        Chrome on Windows • Singapore
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                      data-oid="2:oqit5"
                    >
                      Active now
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                  data-oid="mt31ih6"
                >
                  Sign Out of All Devices
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
