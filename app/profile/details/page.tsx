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
    <div className="p-6" data-oid="o45mrxt">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="b508fdt"
      >
        <div data-oid=".0469xb">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="c-6hu0p">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="7e58fe5">
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
          data-oid="qsk.2om"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="qo4--ft"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="j-5zdrq"
                />
              </svg>
              <span data-oid="xott2am">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="nns4o6o"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid="9itb5xb"
                />
              </svg>
              <span data-oid="1v154uf">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="gqvgvq.">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="knn0mq4"
        >
          <div className="flex items-start gap-4" data-oid="_71jeza">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="f_sq6yz">
              <Bell className="h-6 w-6 text-blue-600" data-oid="k_wflzp" />
            </div>
            <div data-oid="dbf:h6u">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="ush6lma"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="h.dzwiz">
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
          data-oid="_j2k.cj"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="_s-an.b">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="9rca0kv">
              <Target className="h-5 w-5 text-orange-600" data-oid="v9ivw7j" />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid="kr0yl_n"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="kdtt1iz">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="9vo70b9">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="yh2.2i:">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="0elsi-a"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="5959taa"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="qlq9p1a">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="q:1_wa0"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid="x5oxzid"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="qi6gb.o"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid="ba8b1r9"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid="51m9m:8"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="vd0pr3v"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="z5.d.m-">
            <div className="flex items-center gap-3 mb-4" data-oid="u5tyexz">
              <div className="bg-green-100 p-2 rounded-full" data-oid="-4lgwwy">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="ah-ffgc"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="0sk6yr2"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="wk0bca5">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="759drpe">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="x-0yzib"
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
                    data-oid="fqjzjww"
                  />

                  <div className="ml-3" data-oid="n07sfbd">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="3wcbgyr"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="7uz5gbt"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid=".f5v6_."
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
                    data-oid="jffokj4"
                  />

                  <div className="ml-3" data-oid="02ju:1b">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="ts6a3tl"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="ip9_huf"
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="eneeuvf"
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
                    data-oid="d:k8mz1"
                  />

                  <div className="ml-3" data-oid="yvchsra">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="u2:dcpy"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="d:tenfv"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="u.uj7se">
                <span className="font-medium text-gray-700" data-oid="j3uomzv">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="---kcpq">
            <div className="flex items-center gap-3 mb-4" data-oid="0d4:6ru">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="8ymstb1"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="_kw49q_"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid=":zq9f4l"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="--9-363">
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
                data-oid="06udmjz"
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="6q4ql27">
                <p className="text-gray-700" data-oid="qbl0jq.">
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
          data-oid="p38alwj"
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="hu258k5"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="5c8j3i9">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="o6i9p6k">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="kgxyz0_"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="1gub1wa"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid=".o..e.8">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="m6zp.by">
                <label className="flex items-center" data-oid="75_-wqa">
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
                    data-oid="f1i5h5b"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="wbkjw6a"
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="0vntq8s">
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
                    data-oid="e:uhuja"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="nkorpz-"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="0384i3d">
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
                    data-oid="mpd1a_j"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="6svuwds"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="2citk2y">
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
                    data-oid="jo7l8qv"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="lv6vt_9"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="hk:ukat">
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
                    data-oid="ekghmc7"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="2atp7vb"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="asnbqlr">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="33-wq2o"
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
