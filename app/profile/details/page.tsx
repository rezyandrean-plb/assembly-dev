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
    <div className="p-6" data-oid="_jllcww">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="9v9omh3"
      >
        <div data-oid="c_-slno">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="ici03l1">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="i63audc">
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
          data-oid=":hvilv1"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="mwm3.g:"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="tje636:"
                />
              </svg>
              <span data-oid="e9nrmz_">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="69-e87n"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid="h65j60_"
                />
              </svg>
              <span data-oid="feq.p5h">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="q4183k_">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="g:mksa1"
        >
          <div className="flex items-start gap-4" data-oid="fstiaqu">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="e6hrrh5">
              <Bell className="h-6 w-6 text-blue-600" data-oid="tnizfjy" />
            </div>
            <div data-oid="6imppcn">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="zog6_ca"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="2.ztev2">
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
          data-oid=".-o.i7u"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="rdgnk9z">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="9ox7pzu">
              <Target className="h-5 w-5 text-orange-600" data-oid="k2n7.so" />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid="vcxp.a2"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="saqvz7h">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="knezi7z">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="9ti82ow">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="zgmzs.9"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="sr9e11z"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="_i44b--">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="ws-x.-2"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid=".:.idi0"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="y1etpbl"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid="wu5nby2"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid="soo2u_c"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="4pbbz67"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="xbmg899">
            <div className="flex items-center gap-3 mb-4" data-oid="kp:f51z">
              <div className="bg-green-100 p-2 rounded-full" data-oid="rkgu2.w">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="4h8:2te"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="dr03cjf"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="5orya53">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="n:fsbhg">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="_-:luya"
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
                    data-oid="laoi_g0"
                  />

                  <div className="ml-3" data-oid="yqn.dqs">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="3kdbl8c"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="grquw37"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="0n7kp6g"
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
                    data-oid="7e0i3pi"
                  />

                  <div className="ml-3" data-oid="z8v41e-">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="ksnoc21"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="32mgqe."
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid=":xx3ulw"
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
                    data-oid="kh-2zgg"
                  />

                  <div className="ml-3" data-oid="kxtvefp">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="85hr4xy"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="v3p01bd"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="_e3ysg0">
                <span className="font-medium text-gray-700" data-oid="yhehwf2">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="h4blt_c">
            <div className="flex items-center gap-3 mb-4" data-oid="_ugka4z">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="wk2ds.v"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="9whcszc"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="oz1nk75"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="zl_hr60">
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
                data-oid="1-w7tos"
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="oq31903">
                <p className="text-gray-700" data-oid="lsy_-s:">
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
          data-oid="ya4ue3e"
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="gr432ee"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="ou_-fwn">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="pgnfca.">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="e38hasn"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="tgijyv5"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="6lupnq0">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="i_9agxa">
                <label className="flex items-center" data-oid="efha5r0">
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
                    data-oid="e-ka9hn"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="5u.3g-r"
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="ja5li30">
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
                    data-oid="i9wfq1a"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="2odg:vd"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="sj0jfci">
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
                    data-oid="xu1f4-o"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="ya.yvr:"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="6z:t9sw">
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
                    data-oid="ep59bac"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="jaq70lg"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="fkqn.3e">
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
                    data-oid="339ag6h"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="16qipwh"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="jja658-">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="_9a6730"
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
