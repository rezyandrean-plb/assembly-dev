"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, FileText, Scale, Clock } from "lucide-react";

export default function TermsOfServicePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <>
      <div
        className="min-h-screen bg-neutral-50 w-full pt-20"
        data-oid="anqtz:g"
      >
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative bg-primary overflow-hidden py-16 lg:py-20 w-full"
          data-oid="fp2:vpq"
        >
          <div className="w-full px-4 lg:px-8 relative z-10" data-oid="uc.q9iw">
            <div className="max-w-7xl mx-auto text-center" data-oid="mq9gre5">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="-jbjip3"
              >
                Terms of Service
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 mb-2 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="irkpr1j"
              >
                Please read these terms and conditions carefully before using
                our services.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 w-full" data-oid="h7cx3rz">
          <div className="w-full px-4 lg:px-8" data-oid="z_p:a:8">
            <div className="max-w-7xl mx-auto" data-oid="d2_x_c2">
              <div
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
                data-oid="ocrd0kd"
              >
                <div className="prose prose-lg max-w-none" data-oid="g8mgn2l">
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                    data-oid="kojlzyh"
                  >
                    <div
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                      data-oid="yr1q7hw"
                    >
                      <FileText
                        className="w-4 h-4 text-primary"
                        data-oid="2-50zz."
                      />
                    </div>
                    Terms of Use
                  </h2>

                  <div
                    className="space-y-8 text-gray-700 leading-relaxed"
                    data-oid="h0xk42m"
                  >
                    <p className="mb-4" data-oid="yek41ie">
                      Welcome to Assembly! These Terms of Use (“Terms”) that
                      governs the access to and use of our services, including
                      our website, courses, content, and any related services
                      (collectively, the “Services”). By accessing or using our
                      Services, you agree to be bound by these Terms.
                    </p>
                    <div data-oid="ezf1y_4">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid=".lg5dsr"
                      >
                        1. Acceptance of Terms
                      </h3>
                      <p className="mb-4" data-oid="4n2yrat">
                        By accessing or using the Services, you confirm that you
                        have read, understood, and agree to be bound by these
                        Terms and our Privacy Policy. If you are using the
                        Services on behalf of an organization, you represent and
                        warrant that you have the authority to bind that
                        organization to these Terms.
                      </p>
                    </div>

                    <div data-oid="eif6ixy">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="1zuow:3"
                      >
                        2. Eligibility
                      </h3>
                      <p className="mb-4" data-oid="064knin">
                        Our Services are intended for users who are at least 18
                        years old. By using our Services, you represent and
                        warrant that you are at least 18 years old and have the
                        legal capacity to enter into these Terms.
                      </p>
                    </div>

                    <div data-oid="wv8n9oc">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="isk4w84"
                      >
                        3. Account Registration
                      </h3>
                      <p className="mb-4" data-oid="b8u9dv1">
                        To access certain features of our Services, you may need
                        to register for an account. When you register for an
                        account, you agree to provide accurate, current, and
                        complete information about yourself as prompted by our
                        registration form. You are responsible for maintaining
                        the confidentiality of your account password and for all
                        activities that occur under your account.
                      </p>
                    </div>

                    <div data-oid="60fjemk">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="s.tczhk"
                      >
                        4. User Conduct
                      </h3>
                      <p data-oid="c885xl9">
                        You agree to use our Services only for lawful purposes
                        and in a way that does not infringe the rights of,
                        restrict, or inhibit anyone else's use and enjoyment of
                        the Services. Prohibited behavior includes but is not
                        limited to:
                      </p>
                      <ul
                        className="list-disc pl-6 mb-4 space-y-2"
                        data-oid="r7ovf7k"
                      >
                        <li data-oid="hqjw_b:">
                          Violating any applicable laws or regulations.
                        </li>
                        <li data-oid="e8yca7h">
                          Infringing on the intellectual property rights of
                          others.
                        </li>
                        <li data-oid="0rjlcy2">
                          Uploading or distributing any harmful or malicious
                          content.
                        </li>
                        <li data-oid="9wk3.d2">
                          Engaging in any activity that could harm or disrupt
                          our Services.
                        </li>
                      </ul>
                    </div>

                    <div data-oid="hai4tlv">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid=":lkjd6m"
                      >
                        5. Content and Intellectual Property
                      </h3>
                      <p data-oid="j4j964f">
                        All content provided through our Services, including
                        text, graphics, logos, videos, and course materials, is
                        the property of Assembly or its licensors and is
                        protected by intellectual property laws. You may not
                        reproduce, distribute, or create derivative works from
                        any content without our express written permission.
                      </p>
                    </div>

                    <div data-oid="y6uymwo">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="5n_xq9h"
                      >
                        6. User-Generated Content
                      </h3>
                      <p data-oid="jzkv-8s">
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

                    <div data-oid="ve8uwl3">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="e9t:nlx"
                      >
                        7. Payments and Refunds
                      </h3>
                      <p data-oid="wzng8x1">
                        Certain parts of our Services may require payment. All
                        fees are non-refundable except as required by law or as
                        stated in our refund policy. We reserve the right to
                        change our fees at any time, and any such changes will
                        be communicated to you before they take effect.
                      </p>
                    </div>

                    <div data-oid="3oi:577">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="kul27by"
                      >
                        8. Third-Party Links
                      </h3>
                      <p data-oid="c3oi5gm">
                        Our Services may contain links to third-party websites
                        or services that are not owned or controlled by
                        Assembly. We are not responsible for the content,
                        privacy policies, or practices of any third-party
                        websites or services. You access third-party websites at
                        your own risk.
                      </p>
                    </div>

                    <div data-oid="7xjj4sf">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="u3_3e3g"
                      >
                        9. Termination
                      </h3>
                      <p className="mb-4" data-oid="suh3vdl">
                        We may terminate or suspend your access to our Services
                        at any time, without prior notice or liability, for any
                        reason, including if you breach these Terms. Upon
                        termination, your right to use the Services will
                        immediately cease.
                      </p>
                      <p data-oid="kel7vjz">
                        You agree not to disclose your password to any third
                        party. You must notify us immediately upon becoming
                        aware of any breach of security or unauthorized use of
                        your account.
                      </p>
                    </div>

                    <div data-oid="374ykwf">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="_ogcer8"
                      >
                        10. Disclaimers
                      </h3>
                      <p className="mb-4" data-oid="ja2qq-4">
                        Our Services are provided on an “as-is” and
                        “as-available” basis. We make no warranties, express or
                        implied, regarding the availability, accuracy, or
                        reliability of our Services. We disclaim all warranties
                        to the fullest extent permitted by law.
                      </p>
                    </div>

                    <div data-oid="r3wzgbg">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="n_46hrv"
                      >
                        11. Limitation of Liability
                      </h3>
                      <p className="mb-4" data-oid="pk5ovgv">
                        To the fullest extent permitted by law, Assembly shall
                        not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, or any loss of
                        profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses, resulting from
                      </p>
                      <ol
                        className="list-alpha-brackets pl-6 mb-2"
                        data-oid="bd6153d"
                      >
                        <li data-oid="8kp_4uw">
                          your use or inability to use the Services;
                        </li>
                        <li data-oid="gx7.i3z">
                          any unauthorized access to or use of our servers
                          and/or any personal information stored therein.
                        </li>
                      </ol>
                    </div>

                    <div data-oid="zsh67g-">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="32d8p.i"
                      >
                        12. Governing Law
                      </h3>
                      <p className="mb-4" data-oid="-x6s_70">
                        These Terms shall be governed by and construed in
                        accordance with the laws of Singapore, without regard to
                        its conflict of law principles. Any disputes arising out
                        of or in connection with these Terms shall be resolved
                        exclusively in the courts of Singapore.
                      </p>
                    </div>

                    <div data-oid="h76eqh:">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="9:lu5qy"
                      >
                        13. Changes to Terms
                      </h3>
                      <p data-oid="u2w4-of">
                        We may modify these Terms at any time. Any changes will
                        be effective immediately upon posting the revised Terms
                        on our website. Your continued use of the Services
                        following the posting of changes constitutes your
                        acceptance of such changes.
                      </p>
                    </div>

                    <div data-oid="kx9e-t0">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="iefvhmx"
                      >
                        14. Contact Information
                      </h3>
                      <p data-oid="nyab.pk">
                        If you have any questions about these Terms of Service,
                        please contact us at:{" "}
                        <a
                          href="mailto:hello@assembly.sg"
                          className="text-primary"
                          data-oid="t_ssijh"
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
        <section className="py-10 bg-gray-100 w-full" data-oid="5qfjzf6">
          <div className="w-full px-4 lg:px-8" data-oid="q7vs.4j">
            <div className="max-w-4xl mx-auto text-center" data-oid="40aap5e">
              <div
                className="bg-transparent rounded-2xl p-8 text-white"
                data-oid="2svskhe"
              >
                <div
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="3e-1q3d"
                >
                  <Shield className="w-6 h-6 text-primary" data-oid="h85_w0:" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-primary"
                  data-oid="3cx8d-y"
                >
                  Questions About Our Terms?
                </h3>
                <p className="text-primary mb-6" data-oid=".rkux8j">
                  We are here to help clarify any questions you may have.
                </p>
                <a
                  href="mailto:hello@assembly.sg"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#faa718] hover:bg-primary-dark text-white font-medium rounded-xl transition-colors duration-200"
                  data-oid=".ggt::n"
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
