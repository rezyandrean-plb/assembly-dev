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
    <div className="p-6" data-oid="fpq5t1x">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid=":_u0xfs"
      >
        <div data-oid="46.2pf:">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="0r::gdg">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="sqmttac">
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
          data-oid="nidtjm7"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="x:qlutg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="taa3n1c"
                />
              </svg>
              <span data-oid="p2k4l9z">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="1kzxu0m"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid="61i5qdn"
                />
              </svg>
              <span data-oid="c.i8cbi">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="jeo6:-n">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="fpzkzep"
        >
          <div className="flex items-start gap-4" data-oid="nvw_0kd">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="1mf:hr9">
              <Bell className="h-6 w-6 text-blue-600" data-oid="r3_das:" />
            </div>
            <div data-oid="wo39i3.">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="7h4iasa"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="vy9f-8l">
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
          data-oid="prlh94z"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="lb5eu:s">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="e:v0e-5">
              <Target className="h-5 w-5 text-orange-600" data-oid="6y1y7nh" />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid="qn3x-6r"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="vf.g8zp">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="essi4-u">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="jjeo9e5">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="o8sv7s-"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="8x.gci."
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="f7yn:pz">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="eq:qscs"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid="4y_a_3:"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="50e4s0i"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid=":q:y3el"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid="jet:f_l"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="jak3m9q"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="vezxhjj">
            <div className="flex items-center gap-3 mb-4" data-oid="4b87b7u">
              <div className="bg-green-100 p-2 rounded-full" data-oid="_ifmz6y">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="31ys7hi"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="tq::15m"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="gug3p4n">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="2fqt.4.">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="7ulf28n"
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
                    data-oid="k1z8gb4"
                  />

                  <div className="ml-3" data-oid="mbj8_np">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="_no.:a6"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="0nih553"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="mn9c53y"
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
                    data-oid="-6fnssj"
                  />

                  <div className="ml-3" data-oid="a4z7wac">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="sotxe-u"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid=":3wh4by"
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="si27yga"
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
                    data-oid=":.ro.yl"
                  />

                  <div className="ml-3" data-oid="yq0u.3n">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="s9-ykm7"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="jb-7j._"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="r64psol">
                <span className="font-medium text-gray-700" data-oid="-:bntb3">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid=":p-glic">
            <div className="flex items-center gap-3 mb-4" data-oid="ia63jtz">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="cb11:ve"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="va19u6q"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="2xm8sj5"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="d:wnwwv">
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
                data-oid="8p7z88."
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="b4qfo2n">
                <p className="text-gray-700" data-oid="6sxoxeb">
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
          data-oid="h4z79no"
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="7fsp_id"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="91n139t">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="025ul1_">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="r4fus9n"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="cllyk_x"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="84kdt0w">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="99r6gf2">
                <label className="flex items-center" data-oid="u2rmzex">
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
                    data-oid="4otrc6k"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="yu1yxwl"
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="dggsf4d">
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
                    data-oid="9wqtqos"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="qif71g4"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="n3fzmbm">
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
                    data-oid="s1yedne"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="eppgqcb"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="vopqz7g">
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
                    data-oid="4zm:6ee"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="icqeqjg"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="tsv-djz">
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
                    data-oid=":k7el.6"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="q3ruc1n"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="_6ifiva">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="47455am"
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
