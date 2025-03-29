"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Code, Cpu, BookOpen, Brain } from "lucide-react"

export default function Products() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      name: t("products.wayToCode"),
      description: t("products.wayToCode.desc"),
      icon: <Code className="w-10 h-10 text-green-400" />,
      color: "from-green-400/20 to-green-600/20",
    },
    {
      id: 2,
      name: t("products.toscaAI"),
      description: t("products.toscaAI.desc"),
      icon: <Cpu className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-400/20 to-yellow-600/20",
    },
    {
      id: 3,
      name: t("products.englify"),
      description: t("products.englify.desc"),
      icon: <BookOpen className="w-10 h-10 text-blue-400" />,
      color: "from-blue-400/20 to-blue-600/20",
    },
    {
      id: 4,
      name: t("products.intellilearn"),
      description: t("products.intellilearn.desc"),
      icon: <Brain className="w-10 h-10 text-green-400" />,
      color: "from-green-400/20 to-green-600/20",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {t("products.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-gradient-to-br ${product.color} border border-gray-700/50 p-6 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm opacity-80"></div>
              <div className="relative z-10">
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-300">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

