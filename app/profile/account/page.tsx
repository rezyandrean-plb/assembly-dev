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
    <div className="p-6" data-oid="xzfq8n2">
      <h1 className="text-2xl font-bold text-gray-800 mb-2" data-oid="p6dquhk">
        Account Settings
      </h1>
      <p className="text-gray-600 mb-6" data-oid="v.u8goe">
        Manage your account information and security settings
      </p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="y5._gp3">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
          data-oid="tjo00f_"
        >
          <User className="h-4 w-4" data-oid="8-dft-g" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
          data-oid="hr3c714"
        >
          <Lock className="h-4 w-4" data-oid="nso6y4y" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6" data-oid="9bkhni5">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="bq.sahp"
          >
            <div className="space-y-8" data-oid="a5k_ui6">
              {/* Profile Picture Section */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-start gap-6"
                data-oid=":w9v12a"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  data-oid="n07z25v"
                >
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm"
                    data-oid="gl-nm.v"
                  >
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      data-oid="2zvt8.o"
                    />

                    {isUploading && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                        data-oid="brw:ky8"
                      >
                        <div
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                          data-oid="mp7eukr"
                        ></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                      data-oid="sw_3gjh"
                    >
                      <Camera className="h-8 w-8" data-oid="tzzzld3" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    data-oid="rt::obm"
                  />
                </div>

                <div
                  className="flex flex-col items-center sm:items-start"
                  data-oid="v4mexuj"
                >
                  <h3
                    className="text-lg font-medium text-gray-800 mb-2"
                    data-oid="rm9ge:s"
                  >
                    Profile Picture
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 text-center sm:text-left"
                    data-oid="k2b_b:w"
                  >
                    Upload a profile picture to personalize your account.
                    <br data-oid="wpq8goe" />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3" data-oid="ww.6gfq">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                      data-oid="zn1cpif"
                    >
                      <Upload className="h-4 w-4" data-oid="qotdywf" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() =>
                          setProfileImage("/profile-placeholder.png")
                        }
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                        data-oid="_3n60pe"
                      >
                        <X className="h-4 w-4" data-oid="7u48mzi" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-6"
                data-oid="vr7ivmv"
              ></div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="obm-h65"
              >
                <div data-oid="fjdoe4:">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="tjg87h4"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="iy85l_1"
                  />
                </div>
                <div data-oid="j9yko5a">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="507a644"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid=".d7oeo3"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="uc5gn.1"
              >
                <div data-oid="qd8wsfz">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="d6xf3pi"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="3_1id7u"
                  />
                </div>
                <div data-oid="vqsyuaq">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="dbtu1qf"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="0argyrc"
                  />
                </div>
              </div>

              <div className="pt-4" data-oid="-806zj1">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="g.4tlym"
                >
                  <Save className="h-4 w-4" data-oid="9uehb5b" />
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
            data-oid="-22mcdv"
          >
            <div className="space-y-6" data-oid="vs0km80">
              <div data-oid="9.xj:qg">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="xvp5-_9"
                >
                  Change Password
                </h3>
                <div className="space-y-4" data-oid="ics7g1b">
                  <div data-oid="w4ln_vu">
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="e9s3o85"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="24pals."
                    />
                  </div>
                  <div data-oid="87oy.9x">
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="7r-ngi4"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="7z6..my"
                    />

                    <p
                      className="mt-1 text-xs text-gray-500"
                      data-oid="y5vp7op"
                    >
                      Password must be at least 8 characters and include a
                      number and a special character.
                    </p>
                  </div>
                  <div data-oid="3_prfzh">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="x38gzf1"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="bw5z8b9"
                    />
                  </div>
                  <div data-oid="j17mn.1">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                      data-oid="ljyud_1"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="w03n-qg">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="kdrw-41"
                >
                  Two-Factor Authentication
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="4cqz5_2"
                >
                  <div data-oid="0kwtoi7">
                    <p className="text-sm text-gray-700" data-oid="-.6h13_">
                      Add an extra layer of security to your account
                    </p>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="f5-hd4w"
                    >
                      We'll send a verification code to your phone when you sign
                      in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                    data-oid="6ys8tu0"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid=":jkuvwi">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="l.y3ilq"
                >
                  Session Management
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                  data-oid="wc:-j3v"
                >
                  <div
                    className="flex justify-between items-center"
                    data-oid="a9wyzxk"
                  >
                    <div data-oid="k71murg">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="88:c_4j"
                      >
                        Current Session
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="jp_ygej"
                      >
                        Chrome on Windows • Singapore
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                      data-oid="avt2-mp"
                    >
                      Active now
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                  data-oid="63h2zhd"
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
