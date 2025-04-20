"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "CV Builder",
      description: "Create professional CVs with ease",
      logo: "/images/cv-builder-logo.png",
      link: "https://cvbuilder-toscanisoft.vercel.app",
    },
    {
      id: 2,
      name: "Tosca AI",
      description: "Artificial intelligence solutions",
      logo: "/images/tosca-ai-logo.png",
      link: "https://tosca-ai.vercel.app",
    },
    {
      id: 3,
      name: "Shrub",
      description: "Online Code Editor",
      logo: "/images/shrub-logo.png",
      link: "https://shrub-toscanisoft.vercel.app",
    },
    {
      id: 4,
      name: "Way To Code",
      description: "Development environment for efficient coding",
      logo: "/images/cv-builder-logo.png", // Using CV Builder logo as placeholder
      link: "https://way-tocode.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out our latest projects and tools we've developed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card card-glass"
            >
              <div className="content">
                <div className="flex flex-col items-center">
                  <Image
                    src={project.logo || "/placeholder.svg"}
                    alt={project.name}
                    width={64}
                    height={64}
                    className="logo"
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white text-center">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{project.description}</p>
                </div>
              </div>
              <div className="overlay">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors"
                >
                  <span>Visit Project</span>
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
