'use client'

import Link from 'next/link'

export default function PrivacyPage() {
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
              Privacy Policy
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
            
            {/* 1. Introduction */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">1. Introduction</h2>
              <p className="text-slate-300 mb-4">
                Welcome to Acidni LLC (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our websites, use our services, or interact with our products 
                including but not limited to ACCM (Acidni Copilot Chat Manager), Terprint, and our consulting services.
              </p>
              <p className="text-slate-300">
                By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with the terms of this 
                Privacy Policy, please do not access or use our Services.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">2. Information We Collect</h2>
              <p className="text-slate-300 mb-4">We may collect the following types of information:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Account Information</h3>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
                <li>Email address</li>
                <li>Name</li>
                <li>Company name and role</li>
                <li>Contact information</li>
                <li>Account credentials</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-slate-300 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device identifiers</li>
                <li>Usage data and analytics</li>
                <li>Referral URLs</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-white">Information from Third Parties</h3>
              <p className="text-slate-300">
                We may receive information about you from third parties, including business partners, 
                authentication providers (such as Microsoft), and marketing partners.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">3. How We Use Your Information</h2>
              <p className="text-slate-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve the Services</li>
                <li>Fulfill consulting and development engagements</li>
              </ul>
            </div>

            {/* 4. Information Sharing */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">4. Information Sharing and Disclosure</h2>
              <p className="text-slate-300 mb-4">We may share information about you as follows:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li><strong>Service Providers:</strong> With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities</li>
                <li><strong>Protection:</strong> To protect the rights, property, and safety of Acidni LLC, our users, or the public</li>
                <li><strong>Consent:</strong> With your consent or at your direction</li>
              </ul>
            </div>

            {/* 5. Cookies */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">5. Cookies and Tracking Technologies</h2>
              <p className="text-slate-300 mb-4">
                We use cookies and similar tracking technologies to track activity on our Services and hold certain information. 
                Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-slate-300">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our Services.
              </p>
            </div>

            {/* 6. Data Security */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">6. Data Security</h2>
              <p className="text-slate-300 mb-4">
                The security of your data is important to us. We implement appropriate technical and organizational measures to 
                protect the security of your personal information. However, please note that no method of transmission over the 
                Internet or method of electronic storage is 100% secure.
              </p>
              <p className="text-slate-400 text-sm">
                While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee 
                its absolute security. You acknowledge that you provide your personal information at your own risk.
              </p>
            </div>

            {/* 7. Data Retention */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">7. Data Retention</h2>
              <p className="text-slate-300">
                We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, 
                including to satisfy any legal, accounting, or reporting requirements. To determine the appropriate retention 
                period, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm 
                from unauthorized use or disclosure, and applicable legal requirements.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">8. Your Rights</h2>
              <p className="text-slate-300 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your personal information in a portable format</li>
                <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              </ul>
              <p className="text-slate-300 mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@acidni.net" className="text-acidni-400 hover:text-acidni-300">privacy@acidni.net</a>.
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">9. Children&apos;s Privacy</h2>
              <p className="text-slate-300">
                Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children under 18. If you are a parent or guardian and you are aware that your child has 
                provided us with personal information, please contact us.
              </p>
            </div>

            {/* 10. Third-Party Links */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">10. Third-Party Links</h2>
              <p className="text-slate-300">
                Our Services may contain links to other websites that are not operated by us. If you click on a third-party 
                link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy 
                of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, 
                or practices of any third-party sites or services.
              </p>
            </div>

            {/* 11. California Privacy Rights */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">11. California Privacy Rights (CCPA)</h2>
              <p className="text-slate-300 mb-4">
                If you are a California resident, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-1">
                <li>Know what personal information is being collected about you</li>
                <li>Know whether your personal information is sold or disclosed and to whom</li>
                <li>Say no to the sale of personal information</li>
                <li>Access your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Not be discriminated against for exercising your privacy rights</li>
              </ul>
            </div>

            {/* 12. Limitation of Liability */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">12. Limitation of Liability</h2>
              <p className="text-slate-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ACIDNI LLC, ITS AFFILIATES, DIRECTORS, 
                EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY 
                DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS PRIVACY POLICY OR YOUR USE OF OUR SERVICES.
              </p>
              <p className="text-slate-300">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT 
                PAID BY YOU, IF ANY, FOR ACCESSING OUR SERVICES DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE 
                HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
              </p>
            </div>

            {/* 13. Governing Law */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">13. Governing Law</h2>
              <p className="text-slate-300">
                This Privacy Policy and any dispute arising out of or related to it shall be governed by and construed in 
                accordance with the laws of the State of Florida, United States, without regard to its conflict of law provisions. 
                Any legal action or proceeding arising under this Privacy Policy shall be brought exclusively in the federal or 
                state courts located in Florida.
              </p>
            </div>

            {/* 14. Changes to This Policy */}
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">14. Changes to This Privacy Policy</h2>
              <p className="text-slate-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the &quot;Last Updated&quot; date at the top of this Privacy Policy. You are advised to 
                review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they 
                are posted on this page.
              </p>
            </div>

            {/* 15. Contact Us */}
            <div className="card p-8 mb-8 bg-gradient-to-br from-acidni-500/10 to-accent-500/10 border-acidni-500/30">
              <h2 className="text-2xl font-bold mb-4 text-acidni-400">15. Contact Us</h2>
              <p className="text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:privacy@acidni.net" className="text-acidni-400 hover:text-acidni-300">privacy@acidni.net</a></li>
                <li><strong>General Contact:</strong> <a href="mailto:contact@acidni.net" className="text-acidni-400 hover:text-acidni-300">contact@acidni.net</a></li>
              </ul>
            </div>

          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/terms" className="btn-secondary text-center">
              View Terms of Service
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
