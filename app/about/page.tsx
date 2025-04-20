import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"
import { MapPin, Phone, Mail, User } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              About Us
            </h1>

            <div className="bg-white/80 dark:bg-blue-950/50 backdrop-blur-md rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who We Are</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Way to Code is a premium educational platform developed by Toscanisoft, a technology firm based in
                Yaoundé, Cameroon. Founded by TENEKEU MODJOU TOSCANI, our mission is to provide high-quality programming
                tutorials and resources to help developers across Africa and beyond grow their skills and advance their
                careers.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We are dedicated to making programming education accessible and practical, with a focus on real-world
                applications and industry best practices. Our platform offers comprehensive tutorials, project-based
                learning, and premium resources for developers at all skill levels.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Information</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Yaoundé, Cameroon</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+237 694 19 34 93</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+237 674 69 05 95</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">toscanisoft@gmail.com</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Leadership</h2>
              <div className="flex items-center mb-6">
                <User className="w-12 h-12 text-blue-500 dark:text-blue-400 mr-4 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">TENEKEU MODJOU TOSCANI</h3>
                  <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Under the leadership of our founder, Way to Code has grown to become a trusted resource for developers
                seeking to enhance their programming skills and build successful careers in technology.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
