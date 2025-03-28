"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Toscanis<span className="lowercase">o</span>ft
              </span>
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Toscanisoft. {t("footer.rights")}.
          </div>
        </div>
      </div>
    </footer>
  )
}

