import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Privacy Policy
            </h1>

            <div className="bg-white/80 dark:bg-blue-950/50 backdrop-blur-md rounded-xl p-8 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Way to Code ("we", "our", or "us"), operated by Toscanisoft, values your privacy and is committed to
                protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your
                information when you use our website.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">1. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">We collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Personal Information: Name, email address, phone number when you register</li>
                <li>Usage Data: Browser type, IP address, time spent on pages</li>
                <li>Payment Information: For premium subscriptions (processed securely by third-party providers)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">3. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information. However, no method of
                transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">4. Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may employ third-party companies and individuals to facilitate our service, provide service-related
                services, or assist us in analyzing how our service is used.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">5. Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use cookies and similar tracking technologies to track activity on our service. You can instruct your
                browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">6. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our service is not intended for use by children under the age of 18. We do not knowingly collect
                personal information from children under 18.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">7. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">8. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you have questions about this Privacy Policy, please contact us:
                <br />
                <br />
                Toscanisoft
                <br />
                Yaoundé, Cameroon
                <br />
                <br />
                Email: toscanisoft@gmail.com
                <br />
                Phone: +237 694 19 34 93 / +237 674 69 05 95
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">Last updated: March 24, 2025</p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
