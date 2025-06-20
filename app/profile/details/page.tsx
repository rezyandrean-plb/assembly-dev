"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, BookOpen, Sliders, Target } from "lucide-react";

export default function LearningPreferencesPage() {
  const [isEditing, setIsEditing] = useState(false);

  // Predefined list of interest areas
  const availableInterests = [
    "HDB Investment",
    "Condo Investment",
    "Commercial Property",
    "Property Financing",
    "Property Tax Planning",
    "Rental Management",
    "Property Valuation",
    "Market Analysis",
    "Real Estate Law",
    "Property Flipping",
    "REIT Investing",
    "International Property",
    "Property Development",
    "Mortgage Refinancing",
    "Retirement Planning with Property",
  ];

  // Mock user data
  const [userData, setUserData] = useState({
    interests: [
      "HDB Investment",
      "Condo Investment",
      "Property Financing",
      "Market Analysis",
    ],

    experience: "Intermediate",
    learningGoals:
      "Learn advanced property investment strategies and understand the Singapore real estate market in depth.",
    preferredFormat: ["Video Courses", "Case Studies", "Interactive Workshops"],
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save the data to your backend here
  };

  const handleInterestChange = (interest) => {
    if (userData.interests.includes(interest)) {
      setUserData({
        ...userData,
        interests: userData.interests.filter((i) => i !== interest),
      });
    } else {
      setUserData({
        ...userData,
        interests: [...userData.interests, interest],
      });
    }
  };

  return (
    <div className="p-6" data-oid="4mvnctp">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="p926rjp"
      >
        <div data-oid="481hs1p">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="cg9mw5q">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="8:oay3b">
            Customize your learning experience and notification settings
          </p>
        </div>

        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className={`mt-4 md:mt-0 px-4 py-2 rounded-lg flex items-center gap-2 ${
            isEditing
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
          data-oid=".xks75m"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="mjivgb:"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="wcfsuq_"
                />
              </svg>
              <span data-oid="f8xff-x">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="qp7powx"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid="e_v349y"
                />
              </svg>
              <span data-oid="tv85kt9">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="nuzd_fk">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="fjvsysu"
        >
          <div className="flex items-start gap-4" data-oid="odp2:d7">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="1bs8xbu">
              <Bell className="h-6 w-6 text-blue-600" data-oid="qv83my7" />
            </div>
            <div data-oid="b9duour">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="sjq7-20"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="by-7uwd">
                We'll notify you when new courses match your learning
                preferences. Set your interests and experience level below to
                receive personalized recommendations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Left Column - Areas of Interest */}
        <motion.div
          className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          data-oid="chf60sj"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="kt1z8kh">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="rauu-v-">
              <Target className="h-5 w-5 text-orange-600" data-oid="2o12osy" />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid=".psc6qb"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="0gzp84w">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="6wpjm86">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="6:v8.:p">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="56pv4sk"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="kig7t86"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="5r:4v8z">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="zuvsh8b"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid="9ffm-:3"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="y9v2-0e"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid="v0x6oqt"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid=".7ujd5d"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="b0j3:._"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="uua81n9">
            <div className="flex items-center gap-3 mb-4" data-oid="tt1j0i-">
              <div className="bg-green-100 p-2 rounded-full" data-oid="vri1f.6">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="4m6:78h"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="_ppc577"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="gs4-61a">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="hbsh:vu">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="oaql1wb"
                >
                  <input
                    type="radio"
                    name="experience"
                    value="Beginner"
                    checked={userData.experience === "Beginner"}
                    onChange={() =>
                      setUserData({ ...userData, experience: "Beginner" })
                    }
                    className="h-4 w-4 text-blue-600"
                    data-oid="mtxzchk"
                  />

                  <div className="ml-3" data-oid="3f9qj8h">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="cwr-::3"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="lepbmmv"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="q25.cut"
                >
                  <input
                    type="radio"
                    name="experience"
                    value="Intermediate"
                    checked={userData.experience === "Intermediate"}
                    onChange={() =>
                      setUserData({ ...userData, experience: "Intermediate" })
                    }
                    className="h-4 w-4 text-blue-600"
                    data-oid="8tmfb6i"
                  />

                  <div className="ml-3" data-oid="8priyaj">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="ctz7v_r"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="z8qib9q"
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="oouidp_"
                >
                  <input
                    type="radio"
                    name="experience"
                    value="Advanced"
                    checked={userData.experience === "Advanced"}
                    onChange={() =>
                      setUserData({ ...userData, experience: "Advanced" })
                    }
                    className="h-4 w-4 text-blue-600"
                    data-oid="hu8ia82"
                  />

                  <div className="ml-3" data-oid="lm3ho:4">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="a2otmtc"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="k-zqp5m"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="z5hbpl8">
                <span className="font-medium text-gray-700" data-oid="b0044tm">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="ly461iz">
            <div className="flex items-center gap-3 mb-4" data-oid=".vvs_np">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="9x_z1u4"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="1i5p53v"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="jqw-i0d"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="1pju.eo">
              What do you want to achieve through our courses?
            </p>

            {isEditing ? (
              <textarea
                value={userData.learningGoals}
                onChange={(e) =>
                  setUserData({ ...userData, learningGoals: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your learning goals..."
                data-oid="nbngegc"
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="22cx_k.">
                <p className="text-gray-700" data-oid="vhe3mfg">
                  {userData.learningGoals}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right Column - Preferred Format */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          data-oid="n0zi11."
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="7.0xvrs"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="zrbw6gu">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="u9.9ew4">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="mvnh05b"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="r.on6c2"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="0okyj:k">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="5ilddzt">
                <label className="flex items-center" data-oid="lgzxqyi">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Video Courses")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Video Courses"]
                        : userData.preferredFormat.filter(
                            (f) => f !== "Video Courses",
                          );
                      setUserData({ ...userData, preferredFormat: newFormats });
                    }}
                    className="h-4 w-4 text-blue-600"
                    data-oid="fgrxoeg"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="jy0sa4m"
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="35wz:nt">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Text Articles")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Text Articles"]
                        : userData.preferredFormat.filter(
                            (f) => f !== "Text Articles",
                          );
                      setUserData({ ...userData, preferredFormat: newFormats });
                    }}
                    className="h-4 w-4 text-blue-600"
                    data-oid="5far2-9"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="-lgh:v5"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="56349m3">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes(
                      "Interactive Workshops",
                    )}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Interactive Workshops"]
                        : userData.preferredFormat.filter(
                            (f) => f !== "Interactive Workshops",
                          );
                      setUserData({ ...userData, preferredFormat: newFormats });
                    }}
                    className="h-4 w-4 text-blue-600"
                    data-oid="pafxx3h"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="55pnkli"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="60eyylk">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Case Studies")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Case Studies"]
                        : userData.preferredFormat.filter(
                            (f) => f !== "Case Studies",
                          );
                      setUserData({ ...userData, preferredFormat: newFormats });
                    }}
                    className="h-4 w-4 text-blue-600"
                    data-oid="qfxu_a:"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="mkuu:ch"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="k1jbsqv">
                  <input
                    type="checkbox"
                    checked={userData.preferredFormat.includes("Live Webinars")}
                    onChange={(e) => {
                      const newFormats = e.target.checked
                        ? [...userData.preferredFormat, "Live Webinars"]
                        : userData.preferredFormat.filter(
                            (f) => f !== "Live Webinars",
                          );
                      setUserData({ ...userData, preferredFormat: newFormats });
                    }}
                    className="h-4 w-4 text-blue-600"
                    data-oid="990_qr7"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="qlh77j8"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="xvl2rh9">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="mohxj_5"
                  >
                    {format}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
