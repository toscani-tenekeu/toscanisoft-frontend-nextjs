import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function TermsOfUsePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Terms of Use
            </h1>

            <div className="bg-white/80 dark:bg-blue-950/50 backdrop-blur-md rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                By accessing and using Way to Code ("the Website"), you agree to be bound by these Terms of Use, all
                applicable laws and regulations, and agree that you are responsible for compliance with any applicable
                local laws.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">2. Intellectual Property Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                All content on this Website, including but not limited to text, graphics, logos, images, audio clips,
                digital downloads, and software, is the property of Way to Code and ToscaniSoft and is protected by
                international copyright laws.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">3. User Account</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>You must be at least 13 years old to use this Website</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">4. Prohibited Uses</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Use the Website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any portion of the Website</li>
                <li>Copy, modify, or distribute our content without written permission</li>
                <li>Transmit any viruses or harmful code</li>
                <li>Interfere with the proper working of the Website</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">5. Premium Content</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Some features of the Website require a paid subscription. By purchasing a subscription, you agree to pay
                all fees in accordance with the billing terms in effect at the time.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">6. Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The materials on the Website are provided on an 'as is' basis. Way to Code makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">7. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                In no event shall Way to Code or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on the Website.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">8. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Way to Code reserves the right to modify these terms of use at any time. We do so by posting and drawing
                attention to the updated terms on the Website. Your decision to continue to visit and make use of the
                Website after such changes have been made constitutes your formal acceptance of the new Terms of Use.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">9. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Use, please contact us at: toscanisoft@gmail.com
                <br />
                <br />
                Phone: +237 694 19 34 93 / +237 674 69 05 95
                <br />
                <br />
                Address: Yaoundé, Cameroon
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
