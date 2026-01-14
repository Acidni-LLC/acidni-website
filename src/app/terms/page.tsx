'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 gradient-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-acidni-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-acidni-500/20 text-acidni-300 text-sm font-medium mb-6">
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300">
              Last Updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* 1. Acceptance of Terms */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">1. Acceptance of Terms</h2>
              <p className="text-slate-300 mb-4">
                Welcome to Acidni LLC. By accessing or using our websites, services, and products (collectively, the &quot;Services&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not 
                access or use the Services.
              </p>
              <p className="text-slate-300">
                These Terms apply to all visitors, users, and others who access or use our Services, including but not limited 
                to our websites (acidni.net, terprint.com), software products (ACCM, Terprint), and consulting services.
              </p>
            </div>

            {/* 2. Description of Services */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">2. Description of Services</h2>
              <p className="text-slate-300 mb-4">Acidni LLC provides:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li><strong>AI Consulting Services:</strong> Strategic consulting for AI adoption, implementation, and integration</li>
                <li><strong>Application Modernization:</strong> Legacy system assessment, cloud migration, and architecture modernization</li>
                <li><strong>Custom Software Development:</strong> Full-stack application development, VS Code extensions, and integrations</li>
                <li><strong>Software Products:</strong> Including ACCM (VS Code extension) and Terprint (data analytics platform)</li>
              </ul>
              <p className="text-slate-300 mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.
              </p>
            </div>

            {/* 3. User Eligibility */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">3. User Eligibility</h2>
              <p className="text-slate-300">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you 
                are at least 18 years of age and have the legal capacity to enter into these Terms. If you are using our Services 
                on behalf of an organization, you represent and warrant that you have the authority to bind that organization to 
                these Terms.
              </p>
            </div>

            {/* 4. Disclaimer of Warranties */}
            <div className="card p-8 mb-8 border-yellow-500/30">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">4. Disclaimer of Warranties</h2>
              <p className="text-slate-300 mb-4 uppercase font-semibold">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p className="text-slate-300">
                Acidni LLC does not warrant that: (a) the Services will function uninterrupted, secure, or available at any 
                particular time or location; (b) any errors or defects will be corrected; (c) the Services are free of viruses 
                or other harmful components; or (d) the results of using the Services will meet your requirements.
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="card p-8 mb-8 border-yellow-500/30">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">5. Limitation of Liability</h2>
              <p className="text-slate-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ACIDNI LLC, ITS AFFILIATES, DIRECTORS, 
                EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                <li>Damages resulting from unauthorized access to or alteration of your transmissions or data</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
              </ul>
              <p className="text-slate-300">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO ACIDNI LLC 
                DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </div>

            {/* 6. Professional Services Disclaimer */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">6. Professional Services Disclaimer</h2>
              <p className="text-slate-300 mb-4">
                Our consulting services, recommendations, and deliverables are provided for informational purposes and should 
                not be construed as legal, financial, or professional advice. While we strive to provide accurate and useful 
                guidance:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>You are responsible for all decisions made based on our recommendations</li>
                <li>We do not guarantee specific business outcomes or results</li>
                <li>Implementation and results may vary based on your specific circumstances</li>
                <li>You should consult with appropriate professionals for legal, financial, or regulatory matters</li>
              </ul>
            </div>

            {/* 7. Intellectual Property */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">7. Intellectual Property</h2>
              <p className="text-slate-300 mb-4">
                The Services and their original content (excluding user-generated content), features, and functionality are and 
                will remain the exclusive property of Acidni LLC and its licensors. The Services are protected by copyright, 
                trademark, and other laws.
              </p>
              <p className="text-slate-300">
                Our trademarks and trade dress may not be used in connection with any product or service without the prior 
                written consent of Acidni LLC. &quot;Acidni,&quot; &quot;ACCM,&quot; &quot;Terprint,&quot; and associated logos are trademarks of Acidni LLC.
              </p>
            </div>

            {/* 8. User Conduct */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">8. User Conduct</h2>
              <p className="text-slate-300 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Use any robot, spider, or other automated device to access the Services</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Remove any copyright, trademark, or other proprietary notices</li>
                <li>Upload viruses or other malicious code</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </div>

            {/* 9. Indemnification */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">9. Indemnification</h2>
              <p className="text-slate-300">
                You agree to defend, indemnify, and hold harmless Acidni LLC and its officers, directors, employees, agents, 
                licensors, and suppliers from and against any claims, actions, or demands, liabilities, and settlements 
                including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, 
                your violation of these Terms or your use of the Services.
              </p>
            </div>

            {/* 10. Third-Party Services */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">10. Third-Party Services</h2>
              <p className="text-slate-300">
                Our Services may contain links to third-party websites or services that are not owned or controlled by Acidni LLC. 
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
                third-party websites or services. You acknowledge and agree that Acidni LLC shall not be responsible or liable 
                for any damage or loss caused by your use of any such third-party services.
              </p>
            </div>

            {/* 11. Termination */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">11. Termination</h2>
              <p className="text-slate-300">
                We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any 
                reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
                the Services will immediately cease. All provisions of the Terms which by their nature should survive termination 
                shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* 12. Governing Law */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">12. Governing Law</h2>
              <p className="text-slate-300">
                These Terms shall be governed and construed in accordance with the laws of the State of Florida, United States, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                will not be considered a waiver of those rights.
              </p>
            </div>

            {/* 13. Dispute Resolution */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">13. Dispute Resolution and Arbitration</h2>
              <p className="text-slate-300 mb-4">
                <strong>Binding Arbitration:</strong> Any dispute arising out of or relating to these Terms or the Services shall 
                be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The 
                arbitration shall be conducted in Florida, and judgment on the arbitration award may be entered in any court 
                having jurisdiction.
              </p>
              <p className="text-slate-300 mb-4">
                <strong>Class Action Waiver:</strong> YOU AND ACIDNI LLC AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY 
                IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR 
                REPRESENTATIVE PROCEEDING.
              </p>
              <p className="text-slate-300">
                <strong>Exceptions:</strong> Notwithstanding the above, either party may seek injunctive or other equitable relief 
                in any court of competent jurisdiction to protect its intellectual property rights.
              </p>
            </div>

            {/* 14. Severability */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">14. Severability</h2>
              <p className="text-slate-300">
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of 
                these Terms will remain in effect. The invalid or unenforceable provision will be modified to the minimum extent 
                necessary to make it valid and enforceable while preserving the original intent.
              </p>
            </div>

            {/* 15. Entire Agreement */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">15. Entire Agreement</h2>
              <p className="text-slate-300">
                These Terms constitute the entire agreement between you and Acidni LLC regarding our Services and supersede and 
                replace any prior agreements we might have had regarding the Services. Any separate written agreement for 
                consulting services or software licenses shall supplement but not replace these Terms unless explicitly stated.
              </p>
            </div>

            {/* 16. Changes to Terms */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">16. Changes to Terms</h2>
              <p className="text-slate-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes 
                a material change will be determined at our sole discretion. By continuing to access or use our Services after 
                those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            {/* 17. Contact Us */}
            <div className="card p-8 mb-8 bg-gradient-to-br from-acidni-500/10 to-accent-500/10 border-acidni-500/30">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">17. Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:legal@acidni.net" className="text-acidni-400 hover:text-acidni-300">legal@acidni.net</a></li>
                <li><strong>General Contact:</strong> <a href="mailto:contact@acidni.net" className="text-acidni-400 hover:text-acidni-300">contact@acidni.net</a></li>
              </ul>
            </div>

          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/privacy" className="btn-secondary text-center">
              View Privacy Policy
            </Link>
            <Link href="/contact" className="btn-primary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
