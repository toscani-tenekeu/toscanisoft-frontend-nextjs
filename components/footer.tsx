"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import FloatingBubbles from "./floating-bubbles"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 bg-gray-100 dark:bg-blue-950 backdrop-blur-lg overflow-hidden">
      <FloatingBubbles count={3} section="footer" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Toscanis<span className="lowercase">o</span>ft
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Transforming ideas into powerful software solutions. Based in Yaoundé, Cameroon.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://cvbuilder-toscanisoft.vercel.app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  CV Builder
                </Link>
              </li>
              <li>
                <Link
                  href="https://tosca-ai.vercel.app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tosca AI
                </Link>
              </li>
              <li>
                <Link
                  href="https://shrub-toscanisoft.vercel.app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Shrub
                </Link>
              </li>
              <li>
                <Link
                  href="https://way-tocode.vercel.app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Way To Code
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Toscanisoft. {t("footer.rights")}.
            </div>
            <div className="flex space-x-4">
              <Link
                href="mailto:toscanisoft@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                toscanisoft@gmail.com
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                href="tel:+237694193493"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +237 694 19 34 93
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
