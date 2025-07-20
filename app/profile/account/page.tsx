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
    <div className="p-6" data-oid="hvcf1za">
      <h1 className="text-2xl font-bold text-gray-800 mb-2" data-oid="q.kjc3a">
        Account Settings
      </h1>
      <p className="text-gray-600 mb-6" data-oid="596cswm">
        Manage your account information and security settings
      </p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="v5cx5v8">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
          data-oid="29:9lgf"
        >
          <User className="h-4 w-4" data-oid=".hfdyys" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
          data-oid="lcrmip7"
        >
          <Lock className="h-4 w-4" data-oid="fuf_gy8" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6" data-oid="7hr2h-i">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="2azbnqt"
          >
            <div className="space-y-8" data-oid="fuu5ylz">
              {/* Profile Picture Section */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-start gap-6"
                data-oid="bz5oifc"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  data-oid="sq1ns8c"
                >
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm"
                    data-oid="omtbvsy"
                  >
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      data-oid="h3gaiw5"
                    />

                    {isUploading && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                        data-oid="ntqj:5v"
                      >
                        <div
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                          data-oid="bu11_2w"
                        ></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                      data-oid="kya19ew"
                    >
                      <Camera className="h-8 w-8" data-oid="gh:7-xe" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    data-oid="oa4zd5o"
                  />
                </div>

                <div
                  className="flex flex-col items-center sm:items-start"
                  data-oid="_bawfzt"
                >
                  <h3
                    className="text-lg font-medium text-gray-800 mb-2"
                    data-oid="nthqwtv"
                  >
                    Profile Picture
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 text-center sm:text-left"
                    data-oid="p:qvp7s"
                  >
                    Upload a profile picture to personalize your account.
                    <br data-oid="q0jya-3" />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3" data-oid=":yfld.7">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                      data-oid="40lttff"
                    >
                      <Upload className="h-4 w-4" data-oid="eq_bvoc" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() =>
                          setProfileImage("/profile-placeholder.png")
                        }
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                        data-oid="th7ch8_"
                      >
                        <X className="h-4 w-4" data-oid="0zavo-4" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-6"
                data-oid="9436ta5"
              ></div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="e3bd:zy"
              >
                <div data-oid="wqz1t8w">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="3oc.rq_"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="63y49oj"
                  />
                </div>
                <div data-oid="84buv72">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="zturxd_"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="6-r5.6w"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="u_92_vl"
              >
                <div data-oid="3oawlgj">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="n5e9y-c"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="0pft75u"
                  />
                </div>
                <div data-oid="cc6gecn">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="n1p5i24"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="7gb-aj2"
                  />
                </div>
              </div>

              <div className="pt-4" data-oid="_kqsvlm">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="i7vy229"
                >
                  <Save className="h-4 w-4" data-oid="0gkvv3:" />
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
            data-oid="o5fwgzp"
          >
            <div className="space-y-6" data-oid="c21:3l1">
              <div data-oid="wsf.lf1">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="uzwzevs"
                >
                  Change Password
                </h3>
                <div className="space-y-4" data-oid="479v:md">
                  <div data-oid="vbfv28f">
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="25yotg:"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid=".o1007-"
                    />
                  </div>
                  <div data-oid="9g_z1o8">
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="hu:eee_"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="6ywb.1s"
                    />

                    <p
                      className="mt-1 text-xs text-gray-500"
                      data-oid="1p:ejiz"
                    >
                      Password must be at least 8 characters and include a
                      number and a special character.
                    </p>
                  </div>
                  <div data-oid="q9pqr6t">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="1o-5kxs"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="9uh-c-h"
                    />
                  </div>
                  <div data-oid="6mfymlw">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                      data-oid=":5l:s6."
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="clrdxq.">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="qovkp_a"
                >
                  Two-Factor Authentication
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="jqv9.dk"
                >
                  <div data-oid="m:zu5vk">
                    <p className="text-sm text-gray-700" data-oid="w_e0f28">
                      Add an extra layer of security to your account
                    </p>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="m63ehwj"
                    >
                      We'll send a verification code to your phone when you sign
                      in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                    data-oid="ok3:f0q"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="vq:t7pi">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="pqx4c49"
                >
                  Session Management
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                  data-oid="tl1h413"
                >
                  <div
                    className="flex justify-between items-center"
                    data-oid="8l1ra03"
                  >
                    <div data-oid="cbc3456">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="ea92:98"
                      >
                        Current Session
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="w6d:yhx"
                      >
                        Chrome on Windows • Singapore
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                      data-oid="-o.0oi2"
                    >
                      Active now
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                  data-oid="z4r.dw."
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
