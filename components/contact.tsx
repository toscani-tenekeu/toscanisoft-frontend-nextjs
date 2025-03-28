"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 backdrop-blur-sm opacity-80"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">{t("contact.title")}</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">{t("contact.address")}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">6 50 50 00 18</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">+237 6 94 19 34 93</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">{t("contact.email")}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-300">{t("contact.website")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 backdrop-blur-sm opacity-80"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-700/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-700/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="bg-gray-700/50 border-gray-600 focus:border-blue-400"
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

