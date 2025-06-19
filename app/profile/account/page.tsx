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
    <div className="p-6" data-oid="-fhl7bq">
      <h1 className="text-2xl font-bold text-gray-800 mb-2" data-oid="skxgb3t">
        Account Settings
      </h1>
      <p className="text-gray-600 mb-6" data-oid="-7p203r">
        Manage your account information and security settings
      </p>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6" data-oid="kc.h2au">
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "profile"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("profile")}
          data-oid="e0h7fic"
        >
          <User className="h-4 w-4" data-oid="-fn3jt8" />
          Profile
        </button>
        <button
          className={`px-4 py-2 font-medium text-sm flex items-center gap-2 ${
            activeAccountTab === "security"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveAccountTab("security")}
          data-oid="3lq7um3"
        >
          <Lock className="h-4 w-4" data-oid="tmteqlw" />
          Security
        </button>
      </div>

      {/* Content Container with Background */}
      <div className="bg-white rounded-lg shadow-sm mb-6" data-oid="et1wcha">
        {/* Profile Tab Content */}
        {activeAccountTab === "profile" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-6"
            data-oid="1y0igtt"
          >
            <div className="space-y-8" data-oid="mhglask">
              {/* Profile Picture Section */}
              <div
                className="flex flex-col items-center sm:flex-row sm:items-start gap-6"
                data-oid="_vi9v0d"
              >
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  data-oid="0-axpu_"
                >
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm"
                    data-oid="yp0le-w"
                  >
                    <Image
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                      data-oid="voyre7n"
                    />

                    {isUploading && (
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full"
                        data-oid="ym8-wh6"
                      >
                        <div
                          className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"
                          data-oid="4_twe17"
                        ></div>
                      </div>
                    )}
                  </div>

                  {isHovering && !isUploading && (
                    <button
                      onClick={triggerFileInput}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full text-white transition-opacity"
                      data-oid="xt.ml.t"
                    >
                      <Camera className="h-8 w-8" data-oid="wuqqxgw" />
                    </button>
                  )}

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                    data-oid="1yf:ka."
                  />
                </div>

                <div
                  className="flex flex-col items-center sm:items-start"
                  data-oid="koii.w2"
                >
                  <h3
                    className="text-lg font-medium text-gray-800 mb-2"
                    data-oid="yp-bdhy"
                  >
                    Profile Picture
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 text-center sm:text-left"
                    data-oid="iu_ewu8"
                  >
                    Upload a profile picture to personalize your account.
                    <br data-oid="drr19oi" />
                    JPG, PNG or GIF. 1MB max size.
                  </p>

                  <div className="flex gap-3" data-oid="9zx--a-">
                    <button
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                      data-oid="3vhnyba"
                    >
                      <Upload className="h-4 w-4" data-oid="rbr2l8t" />
                      Upload New
                    </button>

                    {profileImage !== "/profile-placeholder.png" && (
                      <button
                        onClick={() =>
                          setProfileImage("/profile-placeholder.png")
                        }
                        className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                        data-oid="ka13qbe"
                      >
                        <X className="h-4 w-4" data-oid="zi4c:74" />
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="border-t border-gray-200 pt-6"
                data-oid="_gpkssf"
              ></div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="x6uw90x"
              >
                <div data-oid="rn:6fxb">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="vt_-hi5"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    defaultValue="melvinlim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="zlj:rp9"
                  />
                </div>
                <div data-oid="v7rpko6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="z2v24d:"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="melvin.lim@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="t1g1mps"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-oid="bedbqty"
              >
                <div data-oid="7nbu52d">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid=".7upfwj"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Melvin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="8ssxijm"
                  />
                </div>
                <div data-oid="xob1yjk">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                    data-oid="72f_n4y"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Lim"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    data-oid="nxd2_o0"
                  />
                </div>
              </div>

              <div className="pt-4" data-oid="-d57aqa">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2"
                  data-oid="f_2nx3b"
                >
                  <Save className="h-4 w-4" data-oid="6:hnw-7" />
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
            data-oid="1-i-bo_"
          >
            <div className="space-y-6" data-oid="ki0u3ae">
              <div data-oid="efj7i3p">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="87ielop"
                >
                  Change Password
                </h3>
                <div className="space-y-4" data-oid="oyj2qmx">
                  <div data-oid="3zssd1f">
                    <label
                      htmlFor="current-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="ql:oey2"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="current-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="qy7ol-b"
                    />
                  </div>
                  <div data-oid="lwvynmm">
                    <label
                      htmlFor="new-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="f_sh2ir"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="q.:n61w"
                    />

                    <p
                      className="mt-1 text-xs text-gray-500"
                      data-oid="5mot9o_"
                    >
                      Password must be at least 8 characters and include a
                      number and a special character.
                    </p>
                  </div>
                  <div data-oid="we1:29v">
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                      data-oid="a9clnc."
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                      data-oid="-mj:70w"
                    />
                  </div>
                  <div data-oid="fn-nwo7">
                    <button
                      type="button"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                      data-oid="i82v4k2"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="e2g800m">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="t70f.ws"
                >
                  Two-Factor Authentication
                </h3>
                <div
                  className="flex items-center justify-between"
                  data-oid=":1a4ihc"
                >
                  <div data-oid="k4.j6.:">
                    <p className="text-sm text-gray-700" data-oid="cz73otw">
                      Add an extra layer of security to your account
                    </p>
                    <p
                      className="text-xs text-gray-500 mt-1"
                      data-oid="ozysz5b"
                    >
                      We'll send a verification code to your phone when you sign
                      in.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition"
                    data-oid="4s_skph"
                  >
                    Enable
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6" data-oid="e:gpi_b">
                <h3
                  className="text-lg font-medium text-gray-800 mb-3"
                  data-oid="jedtjow"
                >
                  Session Management
                </h3>
                <div
                  className="bg-gray-50 p-4 rounded-lg mb-4"
                  data-oid="dl_kwxe"
                >
                  <div
                    className="flex justify-between items-center"
                    data-oid="g_ffg.d"
                  >
                    <div data-oid="hxzbhtv">
                      <p
                        className="text-sm font-medium text-gray-700"
                        data-oid="uwj6pel"
                      >
                        Current Session
                      </p>
                      <p
                        className="text-xs text-gray-500 mt-1"
                        data-oid="74__p0z"
                      >
                        Chrome on Windows • Singapore
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                      data-oid="kobpu9e"
                    >
                      Active now
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 border border-red-300 text-red-600 hover:bg-red-50 font-medium rounded-lg transition"
                  data-oid="bralqai"
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
