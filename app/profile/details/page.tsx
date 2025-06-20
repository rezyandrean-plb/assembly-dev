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
    <div className="p-6" data-oid="1cslbxr">
      <div
        className="flex flex-col md:flex-row md:items-center justify-between mb-6"
        data-oid="n.4dzcc"
      >
        <div data-oid="g0n7-6f">
          <h1 className="text-2xl font-bold text-gray-800" data-oid="cw0ylzr">
            Learning Preferences
          </h1>
          <p className="text-gray-500 mt-1" data-oid="gi.c.t3">
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
          data-oid="veecs7i"
        >
          {isEditing ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="oirg34h"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="t_4rlxw"
                />
              </svg>
              <span data-oid="no24r:2">Save Preferences</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="_yq:cgn"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  data-oid=":egrg7k"
                />
              </svg>
              <span data-oid="nbnb:ps">Edit Preferences</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="b0e8pee">
        {/* Notification Banner */}
        <motion.div
          className="lg:col-span-3 bg-blue-50 rounded-xl p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          data-oid="i47cvv1"
        >
          <div className="flex items-start gap-4" data-oid=":opfz:c">
            <div className="bg-blue-100 p-3 rounded-full" data-oid="rwj7k3e">
              <Bell className="h-6 w-6 text-blue-600" data-oid="a_q6j:m" />
            </div>
            <div data-oid="-0erby2">
              <h3
                className="text-lg font-semibold text-blue-800"
                data-oid="5zmkpz8"
              >
                Course Matching Notifications
              </h3>
              <p className="text-blue-700 mt-1" data-oid="av7sy0r">
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
          data-oid="ognc.i_"
        >
          <div className="flex items-center gap-3 mb-4" data-oid="bp-dzd6">
            <div className="bg-orange-100 p-2 rounded-full" data-oid="-6:5dt2">
              <Target className="h-5 w-5 text-orange-600" data-oid="u17wx2j" />
            </div>
            <h3
              className="text-lg font-medium text-gray-800"
              data-oid="e9::6-d"
            >
              Areas of Interest
            </h3>
          </div>

          <p className="text-gray-600 mb-4" data-oid="2f-s7g-">
            Select topics you're interested in learning about
          </p>

          <div className="space-y-4" data-oid="q8j264e">
            {/* Display selected interests as tags */}
            <div className="flex flex-wrap gap-2 mb-4" data-oid="nuc7-0-">
              {userData.interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
                  data-oid="865lewf"
                >
                  {interest}
                  {isEditing && (
                    <button
                      className="ml-2 text-red-500 hover:text-red-700"
                      onClick={() => handleInterestChange(interest)}
                      data-oid="ob8l.w2"
                    >
                      &times;
                    </button>
                  )}
                </div>
              ))}
              {userData.interests.length === 0 && !isEditing && (
                <div className="text-gray-500 text-sm" data-oid="ngl2v9m">
                  No interests selected
                </div>
              )}
            </div>

            {/* Dropdown selection for interests */}
            {isEditing && (
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                data-oid="jaa7g0c"
              >
                <h4
                  className="text-sm font-medium text-gray-700 mb-3"
                  data-oid="lz74xpj"
                >
                  Select your interests:
                </h4>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-2"
                  data-oid="chj7oam"
                >
                  {availableInterests.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center p-2 hover:bg-gray-100 rounded"
                      data-oid="5peagwj"
                    >
                      <input
                        type="checkbox"
                        checked={userData.interests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 text-blue-600 rounded"
                        data-oid="3ewpu_9"
                      />

                      <span
                        className="ml-2 text-sm text-gray-700"
                        data-oid="lvgmvvs"
                      >
                        {interest}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="83rh1db">
            <div className="flex items-center gap-3 mb-4" data-oid="p7ur3u8">
              <div className="bg-green-100 p-2 rounded-full" data-oid="1bmay18">
                <Sliders
                  className="h-5 w-5 text-green-600"
                  data-oid="-:mwc:3"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid=".dc829t"
              >
                Experience Level
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="xf5lspr">
              Select your current knowledge level
            </p>

            {isEditing ? (
              <div className="flex flex-col space-y-2" data-oid="5.gn2k-">
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="0w:rdz:"
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
                    data-oid="vi78wd."
                  />

                  <div className="ml-3" data-oid="yok2yr5">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="r.pidut"
                    >
                      Beginner
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="i.y-851"
                    >
                      New to property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="6uevn1c"
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
                    data-oid="39d3_ml"
                  />

                  <div className="ml-3" data-oid="02tep2-">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="cwwqt36"
                    >
                      Intermediate
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="fc-ji0j"
                    >
                      Some experience with property investment
                    </span>
                  </div>
                </label>
                <label
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  data-oid="ijs0coa"
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
                    data-oid="zg7y0na"
                  />

                  <div className="ml-3" data-oid="gyku5e.">
                    <span
                      className="block text-sm font-medium text-gray-700"
                      data-oid="v_sjffp"
                    >
                      Advanced
                    </span>
                    <span
                      className="block text-xs text-gray-500"
                      data-oid="5li6fqz"
                    >
                      Experienced property investor
                    </span>
                  </div>
                </label>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="23l_sua">
                <span className="font-medium text-gray-700" data-oid="iw76sex">
                  {userData.experience}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8" data-oid="i06idbu">
            <div className="flex items-center gap-3 mb-4" data-oid="2mcirce">
              <div
                className="bg-purple-100 p-2 rounded-full"
                data-oid="l82f:yk"
              >
                <Target
                  className="h-5 w-5 text-purple-600"
                  data-oid="wh.586y"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="._7s9l3"
              >
                Learning Goals
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="o31p2z6">
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
                data-oid="-xyi:xr"
              />
            ) : (
              <div className="bg-gray-50 p-4 rounded-lg" data-oid="pohgc1b">
                <p className="text-gray-700" data-oid="2-54p6z">
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
          data-oid="cwsqsen"
        >
          {/* Preferred Learning Format */}
          <div
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            data-oid="25z82ts"
          >
            <div className="flex items-center gap-3 mb-4" data-oid="lprpd99">
              <div className="bg-blue-100 p-2 rounded-full" data-oid="eatg95e">
                <BookOpen
                  className="h-5 w-5 text-blue-600"
                  data-oid="8r9-qn1"
                />
              </div>
              <h3
                className="text-lg font-medium text-gray-800"
                data-oid="7m_84s7"
              >
                Preferred Format
              </h3>
            </div>

            <p className="text-gray-600 mb-4" data-oid="1dmsqz2">
              How do you prefer to learn?
            </p>

            {isEditing ? (
              <div className="space-y-2" data-oid="j4r:r5o">
                <label className="flex items-center" data-oid="n7--nb8">
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
                    data-oid="6_b9ii4"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="3xujey."
                  >
                    Video Courses
                  </span>
                </label>
                <label className="flex items-center" data-oid="ca6csnq">
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
                    data-oid="_9p:66z"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="0kojsa6"
                  >
                    Text Articles
                  </span>
                </label>
                <label className="flex items-center" data-oid="6og0:ny">
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
                    data-oid="8jk_zgb"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="k7inq8a"
                  >
                    Interactive Workshops
                  </span>
                </label>
                <label className="flex items-center" data-oid="8vr1395">
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
                    data-oid="r4_ui-v"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="5.-sanh"
                  >
                    Case Studies
                  </span>
                </label>
                <label className="flex items-center" data-oid="1deepap">
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
                    data-oid="afbwc2f"
                  />

                  <span
                    className="ml-2 text-sm text-gray-700"
                    data-oid="acrc88z"
                  >
                    Live Webinars
                  </span>
                </label>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2" data-oid="kf8wb5g">
                {userData.preferredFormat.map((format, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    data-oid="q1af00g"
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
