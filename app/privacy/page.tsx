"use client";

import React from "react";
import { Shield, FileText, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-[#123b79] text-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-blue-200 mt-2">
            Last updated: 1 January 2024
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-6">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website (the "Site").
              </p>
            </div>
          </section>

          {/* Personal Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">PERSONAL INFORMATION WE COLLECT</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
              </p>
              
              <p><strong>We collect Device Information using the following technologies:</strong></p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" className="text-[#123b79] hover:underline">http://www.allaboutcookies.org</a>.</li>
                <li>"Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                <li>"Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.</li>
              </ul>

              <p>
                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information."
              </p>

              <p>
                When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.
              </p>
            </div>
          </section>

          {/* How Do We Use Your Personal Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Communicate with you;</li>
                <li>Screen our orders for potential risk or fraud; and</li>
                <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
              </ul>

              <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
            </div>
          </section>

          {/* Sharing Your Personal Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">SHARING YOUR PERSONAL INFORMATION</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" className="text-[#123b79] hover:underline">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#123b79] hover:underline">https://tools.google.com/dlpage/gaoptout</a>.</p>

              <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
            </div>
          </section>

          {/* Behavioural Advertising */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">BEHAVIOURAL ADVERTISING</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" className="text-[#123b79] hover:underline">http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.</p>

              <p><strong>You can opt out of targeted advertising by:</strong></p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" className="text-[#123b79] hover:underline">https://www.facebook.com/settings/?tab=ads</a></li>
                <li>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" className="text-[#123b79] hover:underline">https://www.google.com/settings/ads/anonymous</a></li>
                <li>BING - <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-[#123b79] hover:underline">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a></li>
              </ul>

              <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at: <a href="http://optout.aboutads.info/" className="text-[#123b79] hover:underline">http://optout.aboutads.info/</a>.</p>
            </div>
          </section>

          {/* Do Not Track */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">DO NOT TRACK</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p>Please note that we do not alter our Site's data collection and use practices when we see a Do Not Track signal from your browser.</p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">YOUR RIGHTS</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

              <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">DATA RETENTION</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
            </div>
          </section>

          {/* Minors */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">MINORS</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p>The Site is not intended for individuals under the age of 18.</p>
            </div>
          </section>

          {/* Changes */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">CHANGES</h2>
            </div>
            <div className="text-gray-700 leading-relaxed">
              <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
            </div>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-[#123b79]" />
              <h2 className="text-2xl font-bold text-gray-900">CONTACT US</h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:hello@assemblysg.com" className="text-[#123b79] hover:underline font-semibold">hello@assemblysg.com</a> or by mail using the details provided below:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#123b79] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Assembly SG Pte Ltd</p>
                    <p>62 Ubi Road 1, Oxley BizHub 2, #11-15/18, Singapore, 408734</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#123b79]" />
                  <p>+65 6123 4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#123b79]" />
                  <p>hello@assemblysg.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of 1 January 2024 and applies to all users of Assembly SG services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}