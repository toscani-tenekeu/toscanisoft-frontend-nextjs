import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Cookie Policy
            </h1>

            <div className="bg-white/80 dark:bg-blue-950/50 backdrop-blur-md rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">What Are Cookies?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Cookies are small text files that are stored on your computer or mobile device when you visit our
                website. They are widely used to make websites work more efficiently and provide a better user
                experience.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">How We Use Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Way to Code uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Essential Cookies: Required for the website to function properly, including navigation and access to
                  secure areas.
                </li>
                <li>
                  Performance Cookies: Help us understand how visitors interact with our website by collecting anonymous
                  information.
                </li>
                <li>Functionality Cookies: Remember your preferences and settings to enhance your experience.</li>
                <li>Analytics Cookies: Track website usage and performance to improve our services.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Types of Cookies We Use</h2>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Session Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Temporary cookies that expire when you close your browser. These help us track your movements from page
                to page.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Persistent Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Remain on your device until they expire or you delete them. These help us remember your preferences.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Third-Party Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Set by third-party services we use, such as Google Analytics, to help us understand how visitors use our
                website.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Managing Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Browser settings can be modified to block or delete cookies</li>
                <li>Most browsers allow you to refuse third-party cookies</li>
                <li>You can delete cookies already stored on your computer</li>
                <li>Visit www.aboutcookies.org for more information</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Please note that blocking cookies may impact your experience on our website and limit access to certain
                features.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                If you have any questions about our Cookie Policy, please contact us at: toscanisoft@gmail.com
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
