"use client";

import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Users,
  FileText,
  Mail,
  ChevronRight,
  Clock,
  Globe,
  Database,
} from "lucide-react";
import Navbar from "../components/navbar";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: Eye },
    { id: "collection", title: "Information Collection", icon: Database },
    { id: "usage", title: "How We Use Data", icon: Users },
    { id: "sharing", title: "Information Sharing", icon: Globe },
    { id: "advertising", title: "Advertising", icon: FileText },
    { id: "rights", title: "Your Rights", icon: Shield },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
      data-oid="x:eehdo"
    >
      {/* Navigation */}
      <Navbar data-oid="s48ywqr" />

      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden" data-oid="-:t4gci">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#123b79] via-[#1e4a8c] to-[#2563eb] opacity-95"
          data-oid="y19s8.6"
        ></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
          data-oid="6ke5ye3"
        />

        <div
          className="relative max-w-6xl mx-auto px-4 text-center"
          data-oid="6vt_sa-"
        >
          <div
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            data-oid="2yj_pa:"
          >
            <Shield className="w-5 h-5 text-blue-200" data-oid="95xvy2y" />
            <span className="text-blue-100 font-medium" data-oid="d8z-uzk">
              Privacy & Security
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            data-oid="ngm4fi."
          >
            Privacy Policy
          </h1>

          <p
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            data-oid="n.:vamq"
          >
            We're committed to protecting your privacy and being transparent
            about how we collect, use, and share your information.
          </p>

          <div
            className="flex items-center justify-center gap-2 text-blue-200"
            data-oid="d9au-_6"
          >
            <Clock className="w-4 h-4" data-oid="dt8tnx0" />
            <span className="text-sm" data-oid="uy_id8z">
              Last updated: January 1, 2024
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16" data-oid="c:jo8fg">
        <div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12"
          data-oid="2_2nwad"
        >
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1" data-oid="bcntz1g">
            <div className="sticky top-32" data-oid="61y_jfn">
              <div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                data-oid="w0i:o:p"
              >
                <div
                  className="p-6 bg-gradient-to-r from-[#123b79] to-[#2563eb] text-white"
                  data-oid="6o7r_s5"
                >
                  <h3 className="font-semibold text-lg" data-oid="2tb8-oj">
                    Quick Navigation
                  </h3>
                  <p className="text-blue-100 text-sm mt-1" data-oid="5njtg1d">
                    Jump to any section
                  </p>
                </div>

                <nav className="p-2" data-oid=":u655ve">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                          activeSection === section.id
                            ? "bg-blue-50 text-[#123b79] border-l-4 border-[#123b79]"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        data-oid="0c8ooyn"
                      >
                        <IconComponent className="w-4 h-4" data-oid="-4::gax" />
                        <span
                          className="font-medium text-sm"
                          data-oid="7akz6ll"
                        >
                          {section.title}
                        </span>
                        {activeSection === section.id && (
                          <ChevronRight
                            className="w-4 h-4 ml-auto"
                            data-oid="im18vo3"
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3" data-oid="n6gvuy2">
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              data-oid="-524hq2"
            >
              {/* Overview Section */}
              {activeSection === "overview" && (
                <div className="p-8" data-oid="bxr-:am">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="5b_q.qj"
                  >
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                      data-oid="ai:6dj7"
                    >
                      <Eye
                        className="w-6 h-6 text-[#123b79]"
                        data-oid="lc:xsgv"
                      />
                    </div>
                    <div data-oid="q2wdd_h">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="8or3tlh"
                      >
                        Overview
                      </h2>
                      <p className="text-gray-600" data-oid="f2qnqq.">
                        Understanding our privacy practices
                      </p>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none" data-oid="y690euz">
                    <p
                      className="text-gray-700 leading-relaxed mb-6"
                      data-oid="47k:feb"
                    >
                      This Privacy Policy describes how your personal
                      information is collected, used, and shared when you visit
                      or make a purchase from our website (the "Site").
                    </p>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8"
                      data-oid="pdnbjtk"
                    >
                      <div
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
                        data-oid="9a-5ghr"
                      >
                        <Shield
                          className="w-8 h-8 text-[#123b79] mb-3"
                          data-oid="1sgwfx3"
                        />
                        <h3
                          className="font-semibold text-gray-900 mb-2"
                          data-oid="a.x34c."
                        >
                          Data Protection
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="hdl2ngz">
                          We implement industry-standard security measures to
                          protect your personal information.
                        </p>
                      </div>

                      <div
                        className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100"
                        data-oid="w70af38"
                      >
                        <Users
                          className="w-8 h-8 text-green-600 mb-3"
                          data-oid="0-be_e7"
                        />
                        <h3
                          className="font-semibold text-gray-900 mb-2"
                          data-oid="en.1g.p"
                        >
                          Transparency
                        </h3>
                        <p className="text-gray-600 text-sm" data-oid="2jleuv4">
                          We're committed to being clear about what data we
                          collect and how we use it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Information Collection Section */}
              {activeSection === "collection" && (
                <div className="p-8" data-oid="1l:l820">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="jnnjmsb"
                  >
                    <div
                      className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center"
                      data-oid="x0qs29k"
                    >
                      <Database
                        className="w-6 h-6 text-purple-600"
                        data-oid="ndkd8j6"
                      />
                    </div>
                    <div data-oid="vxyu.mn">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="h158u0k"
                      >
                        Information We Collect
                      </h2>
                      <p className="text-gray-600" data-oid="p197-ww">
                        Types of data we gather
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="ngwgf6c">
                    <div
                      className="bg-gray-50 rounded-xl p-6"
                      data-oid="qe3mul9"
                    >
                      <h3
                        className="font-semibold text-gray-900 mb-3"
                        data-oid="2ij9_j2"
                      >
                        Device Information
                      </h3>
                      <p className="text-gray-700 mb-4" data-oid="le3y-5b">
                        When you visit the Site, we automatically collect
                        certain information about your device, including
                        information about your web browser, IP address, time
                        zone, and some of the cookies that are installed on your
                        device.
                      </p>

                      <div className="space-y-3" data-oid="bynforg">
                        <div
                          className="flex items-start gap-3"
                          data-oid="bvdt5kh"
                        >
                          <div
                            className="w-2 h-2 bg-[#123b79] rounded-full mt-2"
                            data-oid="pfl.dg7"
                          ></div>
                          <div data-oid="7uy2k01">
                            <strong data-oid="z3ef230">Cookies:</strong> Data
                            files placed on your device with an anonymous unique
                            identifier
                          </div>
                        </div>
                        <div
                          className="flex items-start gap-3"
                          data-oid="0l4_kt2"
                        >
                          <div
                            className="w-2 h-2 bg-[#123b79] rounded-full mt-2"
                            data-oid="-jo_zby"
                          ></div>
                          <div data-oid="vs-4veq">
                            <strong data-oid="1lg9.3u">Log files:</strong> Track
                            actions and collect data including IP address and
                            browser type
                          </div>
                        </div>
                        <div
                          className="flex items-start gap-3"
                          data-oid="rkf6-3u"
                        >
                          <div
                            className="w-2 h-2 bg-[#123b79] rounded-full mt-2"
                            data-oid="zdx40np"
                          ></div>
                          <div data-oid="p_via0:">
                            <strong data-oid=":1.8pzd">Web beacons:</strong>{" "}
                            Electronic files used to record browsing information
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="bg-blue-50 rounded-xl p-6"
                      data-oid="z_4bamp"
                    >
                      <h3
                        className="font-semibold text-gray-900 mb-3"
                        data-oid="_c_fqzq"
                      >
                        Order Information
                      </h3>
                      <p className="text-gray-700" data-oid="kjrsilq">
                        When you make a purchase, we collect your name, billing
                        address, shipping address, payment information, email
                        address, and phone number.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Usage Section */}
              {activeSection === "usage" && (
                <div className="p-8" data-oid="fu0twdg">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="x9jmvvd"
                  >
                    <div
                      className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center"
                      data-oid="94fh4bh"
                    >
                      <Users
                        className="w-6 h-6 text-green-600"
                        data-oid="z_-olbl"
                      />
                    </div>
                    <div data-oid="lyxuke6">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="80t105z"
                      >
                        How We Use Your Information
                      </h2>
                      <p className="text-gray-600" data-oid=".yr_ors">
                        Our data usage practices
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="pjge:tm">
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="x0hpg8b"
                    >
                      We use the information we collect to fulfill orders,
                      communicate with you, screen for potential risk or fraud,
                      and improve our services.
                    </p>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid=".kk.mj7"
                    >
                      {[
                        "Process and fulfill your orders",
                        "Send you important updates",
                        "Provide customer support",
                        "Improve our website and services",
                        "Prevent fraud and ensure security",
                        "Analyze usage patterns",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                          data-oid="mnp91uy"
                        >
                          <div
                            className="w-2 h-2 bg-green-500 rounded-full"
                            data-oid="x6q.7hk"
                          ></div>
                          <span className="text-gray-700" data-oid="1q6uy91">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sharing Section */}
              {activeSection === "sharing" && (
                <div className="p-8" data-oid="62tb2x:">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="il38d1b"
                  >
                    <div
                      className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center"
                      data-oid="13lnqid"
                    >
                      <Globe
                        className="w-6 h-6 text-orange-600"
                        data-oid="0e8_-31"
                      />
                    </div>
                    <div data-oid="3vm:-vg">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid=":p99yzy"
                      >
                        Information Sharing
                      </h2>
                      <p className="text-gray-600" data-oid="06xoihu">
                        When and how we share data
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="ea5fh2o">
                    <div
                      className="bg-red-50 border border-red-200 rounded-xl p-6"
                      data-oid="t4g1msw"
                    >
                      <h3
                        className="font-semibold text-red-900 mb-2"
                        data-oid="2-_8bm2"
                      >
                        We Do Not Sell Your Data
                      </h3>
                      <p className="text-red-800" data-oid="8qj:9x8">
                        We never sell, trade, or rent your personal information
                        to third parties.
                      </p>
                    </div>

                    <div className="space-y-4" data-oid="r7m6o79">
                      <h3
                        className="font-semibold text-gray-900"
                        data-oid="82uz.gk"
                      >
                        We may share information with:
                      </h3>

                      <div className="space-y-3" data-oid="1fizel_">
                        <div
                          className="p-4 border border-gray-200 rounded-lg"
                          data-oid="r4hj5g_"
                        >
                          <strong className="text-gray-900" data-oid="013javl">
                            Service Providers:
                          </strong>
                          <p className="text-gray-600 mt-1" data-oid="1nur0ew">
                            Trusted partners who help us operate our website and
                            serve you better.
                          </p>
                        </div>

                        <div
                          className="p-4 border border-gray-200 rounded-lg"
                          data-oid="a2xf84k"
                        >
                          <strong className="text-gray-900" data-oid=":1bros-">
                            Legal Requirements:
                          </strong>
                          <p className="text-gray-600 mt-1" data-oid="bun9z5q">
                            When required by law or to protect our rights and
                            safety.
                          </p>
                        </div>

                        <div
                          className="p-4 border border-gray-200 rounded-lg"
                          data-oid="rwtma9y"
                        >
                          <strong className="text-gray-900" data-oid="trr3-z1">
                            Analytics Services:
                          </strong>
                          <p className="text-gray-600 mt-1" data-oid="hf9jptz">
                            Google Analytics to understand how customers use our
                            site.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Advertising Section */}
              {activeSection === "advertising" && (
                <div className="p-8" data-oid="1205dv0">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="aj:_7ds"
                  >
                    <div
                      className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center"
                      data-oid="fcpmt9b"
                    >
                      <FileText
                        className="w-6 h-6 text-yellow-600"
                        data-oid="n8wptbc"
                      />
                    </div>
                    <div data-oid="vgsnbu_">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="3xa5h9z"
                      >
                        Behavioral Advertising
                      </h2>
                      <p className="text-gray-600" data-oid="awtct5l">
                        How we use data for marketing
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="0324aia">
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="tu:qrmu"
                    >
                      We use your information to provide targeted advertisements
                      that may be of interest to you.
                    </p>

                    <div
                      className="bg-blue-50 rounded-xl p-6"
                      data-oid="a_ay3o4"
                    >
                      <h3
                        className="font-semibold text-gray-900 mb-4"
                        data-oid="9im.11m"
                      >
                        Opt-out Options
                      </h3>
                      <div className="space-y-3" data-oid="pdftu7w">
                        {[
                          {
                            name: "Facebook",
                            url: "https://www.facebook.com/settings/?tab=ads",
                          },
                          {
                            name: "Google",
                            url: "https://www.google.com/settings/ads/anonymous",
                          },
                          {
                            name: "Bing",
                            url: "https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads",
                          },
                        ].map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-300 transition-colors"
                            data-oid="y-naa:z"
                          >
                            <div
                              className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                              data-oid="k3wv1l1"
                            >
                              <span
                                className="text-xs font-semibold text-blue-600"
                                data-oid="ves5rsr"
                              >
                                {platform.name[0]}
                              </span>
                            </div>
                            <span className="text-gray-700" data-oid="1v1oq9p">
                              Opt out of {platform.name} ads
                            </span>
                            <ChevronRight
                              className="w-4 h-4 text-gray-400 ml-auto"
                              data-oid="2.5hwaj"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rights Section */}
              {activeSection === "rights" && (
                <div className="p-8" data-oid="1ont944">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="izrbyvc"
                  >
                    <div
                      className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center"
                      data-oid="vc.ue1t"
                    >
                      <Shield
                        className="w-6 h-6 text-indigo-600"
                        data-oid="2o8.9vq"
                      />
                    </div>
                    <div data-oid="a7yg.32">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="-1whdvx"
                      >
                        Your Rights
                      </h2>
                      <p className="text-gray-600" data-oid="m6qac5a">
                        What you can do with your data
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid=":umwf_k">
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="-_1ql8j"
                    >
                      You have several rights regarding your personal
                      information, especially if you're a European resident.
                    </p>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="03xt.cm"
                    >
                      {[
                        {
                          title: "Access",
                          desc: "Request access to your personal information",
                        },
                        {
                          title: "Correction",
                          desc: "Ask us to correct inaccurate information",
                        },
                        {
                          title: "Deletion",
                          desc: "Request deletion of your personal data",
                        },
                        {
                          title: "Portability",
                          desc: "Get a copy of your data in a usable format",
                        },
                      ].map((right, index) => (
                        <div
                          key={index}
                          className="p-4 bg-indigo-50 rounded-lg border border-indigo-200"
                          data-oid="_43z0pt"
                        >
                          <h3
                            className="font-semibold text-indigo-900 mb-2"
                            data-oid="ktirkao"
                          >
                            {right.title}
                          </h3>
                          <p
                            className="text-indigo-700 text-sm"
                            data-oid="510.n.h"
                          >
                            {right.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === "security" && (
                <div className="p-8" data-oid="tg74weh">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="0ujtw5_"
                  >
                    <div
                      className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center"
                      data-oid="q:qjlg9"
                    >
                      <Lock
                        className="w-6 h-6 text-red-600"
                        data-oid="ifw7:ka"
                      />
                    </div>
                    <div data-oid="rki-hkk">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="7-hty-q"
                      >
                        Data Security
                      </h2>
                      <p className="text-gray-600" data-oid="k6oratx">
                        How we protect your information
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="ubof6ck">
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="ffvzya9"
                    >
                      We implement appropriate security measures to protect your
                      personal information, though no method is 100% secure.
                    </p>

                    <div
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      data-oid="1hjbzit"
                    >
                      {[
                        {
                          icon: Lock,
                          title: "Encryption",
                          desc: "SSL encryption for all data transmission",
                        },
                        {
                          icon: Shield,
                          title: "Access Control",
                          desc: "Strict access controls and authentication",
                        },
                        {
                          icon: Database,
                          title: "Secure Storage",
                          desc: "Protected servers and databases",
                        },
                      ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <div
                            key={index}
                            className="text-center p-6 bg-gray-50 rounded-xl"
                            data-oid="7h4r696"
                          >
                            <div
                              className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                              data-oid="v7h.8e:"
                            >
                              <IconComponent
                                className="w-6 h-6 text-red-600"
                                data-oid="1_vm7g7"
                              />
                            </div>
                            <h3
                              className="font-semibold text-gray-900 mb-2"
                              data-oid=":sj58b5"
                            >
                              {item.title}
                            </h3>
                            <p
                              className="text-gray-600 text-sm"
                              data-oid="3rs:1nm"
                            >
                              {item.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeSection === "contact" && (
                <div className="p-8" data-oid="k1w9ck:">
                  <div
                    className="flex items-center gap-3 mb-6"
                    data-oid="2-g:-q8"
                  >
                    <div
                      className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center"
                      data-oid="3l1q4ch"
                    >
                      <Mail
                        className="w-6 h-6 text-[#123b79]"
                        data-oid="3r8x15q"
                      />
                    </div>
                    <div data-oid="vzd4a8x">
                      <h2
                        className="text-2xl font-bold text-gray-900"
                        data-oid="xq_hk9-"
                      >
                        Contact Us
                      </h2>
                      <p className="text-gray-600" data-oid="xhjzcyh">
                        Get in touch about privacy matters
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6" data-oid="-26e_xe">
                    <p
                      className="text-gray-700 leading-relaxed"
                      data-oid="tovomk_"
                    >
                      If you have questions about our privacy practices or would
                      like to exercise your rights, please contact us:
                    </p>

                    <div
                      className="bg-gradient-to-r from-[#123b79] to-[#2563eb] rounded-2xl p-8 text-white"
                      data-oid="p2pxp8:"
                    >
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        data-oid="af-wwme"
                      >
                        <div data-oid="fbl7t7_">
                          <h3
                            className="font-semibold text-lg mb-4"
                            data-oid="3109kq0"
                          >
                            Assembly SG Pte Ltd
                          </h3>
                          <div className="space-y-3" data-oid="169ft50">
                            <div
                              className="flex items-start gap-3"
                              data-oid="u4tszo9"
                            >
                              <Mail
                                className="w-5 h-5 mt-0.5 text-blue-200"
                                data-oid="bdq5qtn"
                              />
                              <div data-oid="ex6ykxt">
                                <p className="font-medium" data-oid="a2ttn6v">
                                  Email
                                </p>
                                <a
                                  href="mailto:hello@assemblysg.com"
                                  className="text-blue-200 hover:text-white transition-colors"
                                  data-oid="36l0:bd"
                                >
                                  hello@assemblysg.com
                                </a>
                              </div>
                            </div>

                            <div
                              className="flex items-start gap-3"
                              data-oid="xwhfc9n"
                            >
                              <div
                                className="w-5 h-5 mt-0.5 text-blue-200"
                                data-oid="0mcsr8e"
                              >
                                📍
                              </div>
                              <div data-oid="dvj2a49">
                                <p className="font-medium" data-oid="f5jtq:t">
                                  Address
                                </p>
                                <p className="text-blue-200" data-oid="7:oglw5">
                                  62 Ubi Road 1, Oxley BizHub 2
                                  <br data-oid="7vyd2n-" />
                                  #11-15/18, Singapore 408734
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                          data-oid="3akgs5m"
                        >
                          <h4 className="font-semibold mb-3" data-oid="8iba7b4">
                            Response Time
                          </h4>
                          <p
                            className="text-blue-100 text-sm mb-4"
                            data-oid="o7.r-4m"
                          >
                            We'll respond to your privacy inquiries within 30
                            days of receipt.
                          </p>

                          <div
                            className="flex items-center gap-2 text-blue-200"
                            data-oid="y4w0t96"
                          >
                            <Clock className="w-4 h-4" data-oid="o_89z.h" />
                            <span className="text-sm" data-oid="p1fn_yo">
                              Usually within 5 business days
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
