"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Smartphone, Globe, Server, Laptop } from "lucide-react"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      id: 1,
      name: t("services.appDev"),
      description: t("services.appDev.desc"),
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 2,
      name: t("services.webDev"),
      description: t("services.webDev.desc"),
      icon: <Globe className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 3,
      name: t("services.hosting"),
      description: t("services.hosting.desc"),
      icon: <Server className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 4,
      name: t("services.training"),
      description: t("services.training.desc"),
      icon: <Laptop className="w-10 h-10 text-blue-400" />,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gray-800/30 border border-gray-700/50 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 backdrop-blur-sm opacity-80"></div>
              <div className="relative z-10 flex items-start">
                <div className="mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

