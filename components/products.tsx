"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Code, BookOpen } from "lucide-react"

export default function Products() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      name: t("products.wayToCode"),
      description: t("products.wayToCode.desc"),
      icon: <Code className="w-16 h-16 text-blue-500 dark:text-blue-400" />,
      useIcon: true,
      link: "https://way-tocode.vercel.app",
    },
    {
      id: 2,
      name: t("products.toscaAI"),
      description: t("products.toscaAI.desc"),
      logo: "/images/tosca-ai-logo.png",
      useIcon: false,
      link: "https://tosca-ai.vercel.app",
    },
    {
      id: 3,
      name: t("products.englify"),
      description: t("products.englify.desc"),
      icon: <BookOpen className="w-16 h-16 text-blue-500 dark:text-blue-400" />,
      useIcon: true,
      link: "#",
    },
    {
      id: 4,
      name: t("products.intellilearn"),
      description: t("products.intellilearn.desc"),
      logo: "/images/intellilearn-logo.png",
      useIcon: false,
      link: "#",
    },
    {
      id: 5,
      name: "Shrub",
      description: "Online Code Editor for efficient development",
      logo: "/images/shrub-logo.png",
      useIcon: false,
      link: "https://shrub-toscanisoft.vercel.app",
    },
    {
      id: 6,
      name: "CV Builder",
      description: "Create professional CVs with ease",
      logo: "/images/cv-builder-logo.png",
      useIcon: false,
      link: "https://cvbuilder-toscanisoft.vercel.app",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-100/80 dark:bg-blue-950/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            {t("products.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card card-glass"
            >
              <div className="content">
                <div className="flex flex-col items-center">
                  {product.useIcon ? (
                    <div className="mb-4">{product.icon}</div>
                  ) : (
                    <Image
                      src={product.logo || "/placeholder.svg"}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="logo"
                    />
                  )}
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white text-center">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{product.description}</p>
                </div>
              </div>
              <div className="overlay">
                <Link
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
                >
                  <span>Visit Product</span>
                  <ExternalLink size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
