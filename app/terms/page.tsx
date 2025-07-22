"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, FileText, Scale, Clock } from "lucide-react";

export default function TermsOfServicePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <div className="min-h-screen bg-neutral-50 w-full pt-20">
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative bg-primary overflow-hidden py-16 lg:py-20 w-full"
        >
          <div className="w-full px-4 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Terms of Service
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 mb-2 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Please read these terms and conditions carefully before using
                our services.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 w-full">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    Terms of Use
                  </h2>

                  <div className="space-y-8 text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Welcome to Assembly! These Terms of Use (“Terms”) that
                      governs the access to and use of our services, including
                      our website, courses, content, and any related services
                      (collectively, the “Services”). By accessing or using our
                      Services, you agree to be bound by these Terms.
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        1. Acceptance of Terms
                      </h3>
                      <p className="mb-4">
                        By accessing or using the Services, you confirm that you
                        have read, understood, and agree to be bound by these
                        Terms and our Privacy Policy. If you are using the
                        Services on behalf of an organization, you represent and
                        warrant that you have the authority to bind that
                        organization to these Terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        2. Eligibility
                      </h3>
                      <p className="mb-4">
                        Our Services are intended for users who are at least 18
                        years old. By using our Services, you represent and
                        warrant that you are at least 18 years old and have the
                        legal capacity to enter into these Terms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        3. Account Registration
                      </h3>
                      <p className="mb-4">
                        To access certain features of our Services, you may need
                        to register for an account. When you register for an
                        account, you agree to provide accurate, current, and
                        complete information about yourself as prompted by our
                        registration form. You are responsible for maintaining
                        the confidentiality of your account password and for all
                        activities that occur under your account.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        4. User Conduct
                      </h3>
                      <p>
                        You agree to use our Services only for lawful purposes
                        and in a way that does not infringe the rights of,
                        restrict, or inhibit anyone else's use and enjoyment of
                        the Services. Prohibited behavior includes but is not
                        limited to:
                      </p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Violating any applicable laws or regulations.</li>
                        <li>
                          Infringing on the intellectual property rights of
                          others.
                        </li>
                        <li>
                          Uploading or distributing any harmful or malicious
                          content.
                        </li>
                        <li>
                          Engaging in any activity that could harm or disrupt
                          our Services.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        5. Content and Intellectual Property
                      </h3>
                      <p>
                        All content provided through our Services, including
                        text, graphics, logos, videos, and course materials, is
                        the property of Assembly or its licensors and is
                        protected by intellectual property laws. You may not
                        reproduce, distribute, or create derivative works from
                        any content without our express written permission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        6. User-Generated Content
                      </h3>
                      <p>
                        You may have the opportunity to contribute content, such
                        as discussion posts or project submissions, to our
                        Services. By submitting content, you grant Assembly a
                        non-exclusive, worldwide, royalty-free license to use,
                        reproduce, modify, and distribute your content in
                        connection with our Services. You represent and warrant
                        that you have the right to grant this license and that
                        your content does not violate any laws or infringe the
                        rights of any third party.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        7. Payments and Refunds
                      </h3>
                      <p>
                        Certain parts of our Services may require payment. All
                        fees are non-refundable except as required by law or as
                        stated in our refund policy. We reserve the right to
                        change our fees at any time, and any such changes will
                        be communicated to you before they take effect.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        8. Third-Party Links
                      </h3>
                      <p>
                        Our Services may contain links to third-party websites
                        or services that are not owned or controlled by
                        Assembly. We are not responsible for the content,
                        privacy policies, or practices of any third-party
                        websites or services. You access third-party websites at
                        your own risk.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        9. Termination
                      </h3>
                      <p className="mb-4">
                        We may terminate or suspend your access to our Services
                        at any time, without prior notice or liability, for any
                        reason, including if you breach these Terms. Upon
                        termination, your right to use the Services will
                        immediately cease.
                      </p>
                      <p>
                        You agree not to disclose your password to any third
                        party. You must notify us immediately upon becoming
                        aware of any breach of security or unauthorized use of
                        your account.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        10. Disclaimers
                      </h3>
                      <p className="mb-4">
                        Our Services are provided on an “as-is” and
                        “as-available” basis. We make no warranties, express or
                        implied, regarding the availability, accuracy, or
                        reliability of our Services. We disclaim all warranties
                        to the fullest extent permitted by law.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        11. Limitation of Liability
                      </h3>
                      <p className="mb-4">
                        To the fullest extent permitted by law, Assembly shall
                        not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, or any loss of
                        profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses, resulting from
                      </p>
                      <ol className="list-alpha-brackets pl-6 mb-2">
                        <li>your use or inability to use the Services;</li>
                        <li>
                          any unauthorized access to or use of our servers
                          and/or any personal information stored therein.
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        12. Governing Law
                      </h3>
                      <p className="mb-4">
                        These Terms shall be governed by and construed in
                        accordance with the laws of Singapore, without regard to
                        its conflict of law principles. Any disputes arising out
                        of or in connection with these Terms shall be resolved
                        exclusively in the courts of Singapore.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        13. Changes to Terms
                      </h3>
                      <p>
                        We may modify these Terms at any time. Any changes will
                        be effective immediately upon posting the revised Terms
                        on our website. Your continued use of the Services
                        following the posting of changes constitutes your
                        acceptance of such changes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        14. Contact Information
                      </h3>
                      <p>
                        If you have any questions about these Terms of Service,
                        please contact us at:{" "}
                        <a
                          href="mailto:hello@assembly.sg"
                          className="text-primary"
                        >
                          hello@assembly.sg
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-10 bg-gray-100 w-full">
          <div className="w-full px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-transparent rounded-2xl p-8 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Questions About Our Terms?
                </h3>
                <p className="text-primary mb-6">
                  We are here to help clarify any questions you may have.
                </p>
                <a
                  href="mailto:hello@assembly.sg"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#faa718] hover:bg-primary-dark text-white font-medium rounded-xl transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
