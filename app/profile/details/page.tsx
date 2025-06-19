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
    <div className="p-6" data-oid="5ioriqw">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="5t1js7a"
      >
        <div data-oid="4o.5pn.">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="0fnzlgn">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="xm765-o">
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
          data-oid="_y5pyyu"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="ar3nv4_"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="cf7iyfd"
                />
              </svg>
              <span data-oid="4h6m9kt">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="oakjqhy"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid="q-6_pk6"
                />
              </svg>
              <span data-oid=".nmkcg0">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="qrlze_h">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="an9z8th"
        >
          <div className="flex items-start gap-4" data-oid="d6z9:0g">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="g8h0jwy">
              <Bell className="h-6 w-6 text-blue-600" data-oid="xb_jhfc" />
            </div>
            <div data-oid="vxczjit">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="calo9mw"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="pdl3019">
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
          data-oid="d32cnbk"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="n:xhupe">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="z:bu6qa">
              <Target className="h-5 w-5 text-orange-600" data-oid="qvdoy:." />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid="a-i2o5e"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="keycfx7">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="yzniu67">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="nsi_s-7">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="b4.8agp"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="h9ula_y"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="t5b.nb4">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="tzujpxl"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid="_8vhwo4"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="i2rq103"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid="s5ya035"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid="uq8tjoh"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="47e2on7"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="-al0y3h">
            <div className="flex items-center gap-3 mb-4" data-oid="rzvjgqu">
              <div className="bg-green-100 p-2 rounded-full" data-oid="v1cq24f">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="6h-2v5m"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="5o6t:ro"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="8f:rfw.">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="w6s7r47">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="qq91mmp"
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
                    data-oid=".oq8ch_"
                  />

                  <div className="ml-3" data-oid="a-6ld8_">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="uzmta.d"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="8zd.ny_"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="oq.xvbr"
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
                    data-oid="lkj-c.7"
                  />

                  <div className="ml-3" data-oid="v5b6.z8">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="fn_wb:p"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="h3gsrxm"
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="2vwsx:d"
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
                    data-oid="mor1sez"
                  />

                  <div className="ml-3" data-oid="s_nd9n:">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="-04578-"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="d4b5m7:"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="ky3:o_l">
                <span className="font-medium text-gray-700" data-oid="_kuhand">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="f4ql1ev">
            <div className="flex items-center gap-3 mb-4" data-oid="oa.7iwt">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="dm9czf0"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="_9o1710"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="cb8bihx"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="j_u7:2h">
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
                data-oid="0ggzb8o"
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="bgu:o5b">
                <p className="text-gray-700" data-oid="l_pu3ym">
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
          data-oid="l69aftx"
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="hfxkypb"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="shkfgzd">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="meej8p8">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="_c88gtm"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="5qx2url"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="j8_vspg">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="_e662a2">
                <label className="flex items-center" data-oid=".jo38rl">
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
                    data-oid=":6s4pd7"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="o7a5qdq"
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="-eljgzs">
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
                    data-oid="br8xnji"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="lr1:87t"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="hrxd6:7">
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
                    data-oid="0-ikubq"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="g2943nm"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="8r6-anr">
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
                    data-oid="c28vfp9"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="-xvornu"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="k_5sj1.">
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
                    data-oid="j0.mytx"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="wb_d5j7"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="u7bten_">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="k3be2ln"
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
