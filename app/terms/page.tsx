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
        data-oid="3fhmdcy"
      >
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="relative bg-primary overflow-hidden py-16 lg:py-20 w-full"
          data-oid="qn4zpmt"
        >
          <div className="w-full px-4 lg:px-8 relative z-10" data-oid="g_94px-">
            <div className="max-w-7xl mx-auto text-center" data-oid=":81j15r">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-oid="-vq79qy"
              >
                Terms of Service
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 mb-2 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-oid="7pn8spb"
              >
                Please read these terms and conditions carefully before using
                our services.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 w-full" data-oid="ka40fxg">
          <div className="w-full px-4 lg:px-8" data-oid="qa1vuct">
            <div className="max-w-7xl mx-auto" data-oid="2w6h-p6">
              <div
                className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
                data-oid="7h.uwa2"
              >
                <div className="prose prose-lg max-w-none" data-oid="mdz8y9a">
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
                    data-oid="7-c-_7q"
                  >
                    <div
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center"
                      data-oid="45gqerz"
                    >
                      <FileText
                        className="w-4 h-4 text-primary"
                        data-oid="rwqjfph"
                      />
                    </div>
                    Terms of Use
                  </h2>

                  <div
                    className="space-y-8 text-gray-700 leading-relaxed"
                    data-oid="p27lat6"
                  >
                    <p className="mb-4" data-oid="phq3:t3">
                      Welcome to Assembly! These Terms of Use (“Terms”) that
                      governs the access to and use of our services, including
                      our website, courses, content, and any related services
                      (collectively, the “Services”). By accessing or using our
                      Services, you agree to be bound by these Terms.
                    </p>
                    <div data-oid="2c7xuer">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="a54wgyx"
                      >
                        1. Acceptance of Terms
                      </h3>
                      <p className="mb-4" data-oid="s7k6zbp">
                        By accessing or using the Services, you confirm that you
                        have read, understood, and agree to be bound by these
                        Terms and our Privacy Policy. If you are using the
                        Services on behalf of an organization, you represent and
                        warrant that you have the authority to bind that
                        organization to these Terms.
                      </p>
                    </div>

                    <div data-oid="mdgt3:8">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="p-pzdmc"
                      >
                        2. Eligibility
                      </h3>
                      <p className="mb-4" data-oid="64j1y.h">
                        Our Services are intended for users who are at least 18
                        years old. By using our Services, you represent and
                        warrant that you are at least 18 years old and have the
                        legal capacity to enter into these Terms.
                      </p>
                    </div>

                    <div data-oid="rdxa_bi">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="gg.9:x."
                      >
                        3. Account Registration
                      </h3>
                      <p className="mb-4" data-oid="mxd2oue">
                        To access certain features of our Services, you may need
                        to register for an account. When you register for an
                        account, you agree to provide accurate, current, and
                        complete information about yourself as prompted by our
                        registration form. You are responsible for maintaining
                        the confidentiality of your account password and for all
                        activities that occur under your account.
                      </p>
                    </div>

                    <div data-oid="5aw8-ab">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="svlnr6a"
                      >
                        4. User Conduct
                      </h3>
                      <p data-oid="u0cm-a5">
                        You agree to use our Services only for lawful purposes
                        and in a way that does not infringe the rights of,
                        restrict, or inhibit anyone else's use and enjoyment of
                        the Services. Prohibited behavior includes but is not
                        limited to:
                      </p>
                      <ul
                        className="list-disc pl-6 mb-4 space-y-2"
                        data-oid="zmcw158"
                      >
                        <li data-oid="_e1r272">
                          Violating any applicable laws or regulations.
                        </li>
                        <li data-oid="4bs7q-5">
                          Infringing on the intellectual property rights of
                          others.
                        </li>
                        <li data-oid="2fvbhzd">
                          Uploading or distributing any harmful or malicious
                          content.
                        </li>
                        <li data-oid="okpx2pa">
                          Engaging in any activity that could harm or disrupt
                          our Services.
                        </li>
                      </ul>
                    </div>

                    <div data-oid="cmtbp45">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="7hh5naz"
                      >
                        5. Content and Intellectual Property
                      </h3>
                      <p data-oid="ev2-2pz">
                        All content provided through our Services, including
                        text, graphics, logos, videos, and course materials, is
                        the property of Assembly or its licensors and is
                        protected by intellectual property laws. You may not
                        reproduce, distribute, or create derivative works from
                        any content without our express written permission.
                      </p>
                    </div>

                    <div data-oid=".9w943c">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="6j-6p1e"
                      >
                        6. User-Generated Content
                      </h3>
                      <p data-oid="14jxmkz">
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

                    <div data-oid="gsu50_p">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="jn122kd"
                      >
                        7. Payments and Refunds
                      </h3>
                      <p data-oid="6w2:du5">
                        Certain parts of our Services may require payment. All
                        fees are non-refundable except as required by law or as
                        stated in our refund policy. We reserve the right to
                        change our fees at any time, and any such changes will
                        be communicated to you before they take effect.
                      </p>
                    </div>

                    <div data-oid="2ku.kr0">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="y.wwgb3"
                      >
                        8. Third-Party Links
                      </h3>
                      <p data-oid="dg4pb5c">
                        Our Services may contain links to third-party websites
                        or services that are not owned or controlled by
                        Assembly. We are not responsible for the content,
                        privacy policies, or practices of any third-party
                        websites or services. You access third-party websites at
                        your own risk.
                      </p>
                    </div>

                    <div data-oid="o_7_3db">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="fti68sm"
                      >
                        9. Termination
                      </h3>
                      <p className="mb-4" data-oid="xw:b-qj">
                        We may terminate or suspend your access to our Services
                        at any time, without prior notice or liability, for any
                        reason, including if you breach these Terms. Upon
                        termination, your right to use the Services will
                        immediately cease.
                      </p>
                      <p data-oid="bqv52uu">
                        You agree not to disclose your password to any third
                        party. You must notify us immediately upon becoming
                        aware of any breach of security or unauthorized use of
                        your account.
                      </p>
                    </div>

                    <div data-oid="3rr8wmi">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="d0-x_:c"
                      >
                        10. Disclaimers
                      </h3>
                      <p className="mb-4" data-oid="aef.m.z">
                        Our Services are provided on an “as-is” and
                        “as-available” basis. We make no warranties, express or
                        implied, regarding the availability, accuracy, or
                        reliability of our Services. We disclaim all warranties
                        to the fullest extent permitted by law.
                      </p>
                    </div>

                    <div data-oid="5f0ftia">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="k6z1pjw"
                      >
                        11. Limitation of Liability
                      </h3>
                      <p className="mb-4" data-oid="krbs_38">
                        To the fullest extent permitted by law, Assembly shall
                        not be liable for any indirect, incidental, special,
                        consequential, or punitive damages, or any loss of
                        profits or revenues, whether incurred directly or
                        indirectly, or any loss of data, use, goodwill, or other
                        intangible losses, resulting from
                      </p>
                      <ol
                        className="list-alpha-brackets pl-6 mb-2"
                        data-oid="nt51v6p"
                      >
                        <li data-oid="_k_aol8">
                          your use or inability to use the Services;
                        </li>
                        <li data-oid="jc570ic">
                          any unauthorized access to or use of our servers
                          and/or any personal information stored therein.
                        </li>
                      </ol>
                    </div>

                    <div data-oid="_vr9.54">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="n9ayypr"
                      >
                        12. Governing Law
                      </h3>
                      <p className="mb-4" data-oid="ebh2.dj">
                        These Terms shall be governed by and construed in
                        accordance with the laws of Singapore, without regard to
                        its conflict of law principles. Any disputes arising out
                        of or in connection with these Terms shall be resolved
                        exclusively in the courts of Singapore.
                      </p>
                    </div>

                    <div data-oid="r49lmfo">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="jy--346"
                      >
                        13. Changes to Terms
                      </h3>
                      <p data-oid="hwjn1x5">
                        We may modify these Terms at any time. Any changes will
                        be effective immediately upon posting the revised Terms
                        on our website. Your continued use of the Services
                        following the posting of changes constitutes your
                        acceptance of such changes.
                      </p>
                    </div>

                    <div data-oid="94c1:0h">
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-4"
                        data-oid="9qagv6m"
                      >
                        14. Contact Information
                      </h3>
                      <p data-oid="g3nqbpg">
                        If you have any questions about these Terms of Service,
                        please contact us at:{" "}
                        <a
                          href="mailto:hello@assembly.sg"
                          className="text-primary"
                          data-oid="8167ics"
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
        <section className="py-10 bg-gray-100 w-full" data-oid="2bizqg9">
          <div className="w-full px-4 lg:px-8" data-oid="5iw31_6">
            <div className="max-w-4xl mx-auto text-center" data-oid="kov6lrn">
              <div
                className="bg-transparent rounded-2xl p-8 text-white"
                data-oid="hee4hdc"
              >
                <div
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  data-oid="tg:o2s8"
                >
                  <Shield className="w-6 h-6 text-primary" data-oid="r3hl007" />
                </div>
                <h3
                  className="text-2xl font-bold mb-4 text-primary"
                  data-oid=":bdu7jd"
                >
                  Questions About Our Terms?
                </h3>
                <p className="text-primary mb-6" data-oid="uxzui5c">
                  We are here to help clarify any questions you may have.
                </p>
                <a
                  href="mailto:hello@assembly.sg"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#faa718] hover:bg-primary-dark text-white font-medium rounded-xl transition-colors duration-200"
                  data-oid="1o:sbyl"
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
