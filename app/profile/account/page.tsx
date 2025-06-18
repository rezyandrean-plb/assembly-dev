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
    <div className="p-6" data-oid="hoqwiks">
      <h1 className="text-2xl font-bold text-gray-800 mb-2" data-oid="uy3obk5">
        Account Settings
      </h1>
      <p className="text-gray-600 mb-6" data-oid="672zxcy">
        Manage your account information and security settings
      </p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="wcv.iui">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
          data-oid="9r_1_-j"
        >
          <User className="h-4 w-4" data-oid="4fk48a5" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
          data-oid="ocaz.is"
        >
          <Lock className="h-4 w-4" data-oid="qoh3s80" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6" data-oid="4n-m7x.">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="rd_2nt6"
          >
            <div className="space-y-8" data-oid="1xm0un.">
              {/* Profile Picture Section */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-start gap-6"
                data-oid="sck:7me"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  data-oid="2:iify9"
                >
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm"
                    data-oid="v6xz-z4"
                  >
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      data-oid="s4fhvfb"
                    />

                    {isUploading && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                        data-oid="5rjktoz"
                      >
                        <div
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                          data-oid="2rrei8-"
                        ></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                      data-oid="3b_zuzz"
                    >
                      <Camera className="h-8 w-8" data-oid="vumf6op" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    data-oid="g_rn5y2"
                  />
                </div>

                <div
                  className="flex flex-col items-center sm:items-start"
                  data-oid="oi6ssz7"
                >
                  <h3
                    className="text-lg font-medium text-gray-800 mb-2"
                    data-oid="n5hfb:-"
                  >
                    Profile Picture
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 text-center sm:text-left"
                    data-oid="lwsu_u-"
                  >
                    Upload a profile picture to personalize your account.
                    <br data-oid="412lwik" />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3" data-oid="bks358p">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                      data-oid="ize3wao"
                    >
                      <Upload className="h-4 w-4" data-oid="e3-0kyv" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() =>
                          setProfileImage("/profile-placeholder.png")
                        }
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                        data-oid="_qmhuiw"
                      >
                        <X className="h-4 w-4" data-oid="v.a4.3l" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-6"
                data-oid="akwhzfh"
              ></div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="dt:00m_"
              >
                <div data-oid="w.7euqo">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="pmz46i5"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="e8va3wl"
                  />
                </div>
                <div data-oid="qsbn9ip">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="l6b7m5z"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="zqjmc9y"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="zc2tde."
              >
                <div data-oid="kgv69te">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="ga.x.ah"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="z_x510x"
                  />
                </div>
                <div data-oid="g.6e55c">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="g5.vme8"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="o69p5p9"
                  />
                </div>
              </div>

              <div className="pt-4" data-oid="us8wtl9">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="-mms7sl"
                >
                  <Save className="h-4 w-4" data-oid=".1f27ps" />
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
            data-oid="x3xlqz-"
          >
            <div className="space-y-6" data-oid="f:90.zb">
              <div data-oid="os:tdit">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="fmx64gk"
                >
                  Change Password
                </h3>
                <div className="space-y-4" data-oid="-tmy6e-">
                  <div data-oid="o7e3oeg">
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="0uzdw:_"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="ip-jjvy"
                    />
                  </div>
                  <div data-oid="swjhs90">
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="ey8-bm8"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="0a3bkcj"
                    />

                    <p
                      className="mt-1 text-xs text-gray-500"
                      data-oid="8k6c_lk"
                    >
                      Password must be at least 8 characters and include a
                      number and a special character.
                    </p>
                  </div>
                  <div data-oid="-_g_3ia">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="-:.g1lv"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="-nbgiuc"
                    />
                  </div>
                  <div data-oid="c5e5mwr">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                      data-oid="t:0d7kh"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="6:1hakj">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid=":.ruowk"
                >
                  Two-Factor Authentication
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid="mxm_9ir"
                >
                  <div data-oid="d9095ow">
                    <p className="text-sm text-gray-700" data-oid="i0cag.e">
                      Add an extra layer of security to your account
                    </p>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="3gn6pt_"
                    >
                      We'll send a verification code to your phone when you sign
                      in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                    data-oid="zak1rxz"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="-al2n4q">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="lrzj5.q"
                >
                  Session Management
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                  data-oid="mpqxncw"
                >
                  <div
                    className="flex justify-between items-center"
                    data-oid="6c1r6ut"
                  >
                    <div data-oid="4p8tpmq">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="wd_ky2c"
                      >
                        Current Session
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="au:.f4f"
                      >
                        Chrome on Windows • Singapore
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                      data-oid="p7wr:65"
                    >
                      Active now
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                  data-oid="an:ziw0"
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
