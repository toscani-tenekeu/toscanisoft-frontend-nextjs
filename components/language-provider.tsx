"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Let's transform ideas into powerful software solutions",
    "hero.subtitle": "Code is the art of turning ideas into reality",
    "hero.cta": "Discover our solutions",
    "products.title": "Our Products",
    "products.wayToCode": "Way To Code",
    "products.wayToCode.desc": "Development environment for efficient coding",
    "products.toscaAI": "Tosca AI",
    "products.toscaAI.desc": "Artificial intelligence solutions for businesses",
    "products.englify": "Englify",
    "products.englify.desc": "Language learning platform focused on English",
    "products.intellilearn": "Intellilearn237",
    "products.intellilearn.desc": "Smart learning management system",
    "services.title": "Our Services",
    "services.appDev": "Application Development",
    "services.appDev.desc": "Custom applications for your business needs",
    "services.webDev": "Website Creation",
    "services.webDev.desc": "Modern and responsive websites",
    "services.hosting": "Secure Web Hosting",
    "services.hosting.desc": "Reliable and secure hosting solutions",
    "services.training": "Web, Mobile & Desktop Development Training",
    "services.training.desc": "Professional training for developers",
    "contact.title": "Contact Us",
    "contact.address": "Yaoundé, Cameroon",
    "contact.email": "contact@toscanisoft.cm",
    "contact.website": "toscanisoft.cm",
    "footer.rights": "All rights reserved",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.title": "Solutions Logicielles Innovantes",
    "hero.subtitle": "Construire l'avenir de la technologie",
    "hero.cta": "Découvrir nos solutions",
    "products.title": "Nos Produits",
    "products.wayToCode": "Way To Code",
    "products.wayToCode.desc": "Environnement de développement pour un codage efficace",
    "products.toscaAI": "Tosca AI",
    "products.toscaAI.desc": "Solutions d'intelligence artificielle pour les entreprises",
    "products.englify": "Englify",
    "products.englify.desc": "Plateforme d'apprentissage des langues axée sur l'anglais",
    "products.intellilearn": "Intellilearn237",
    "products.intellilearn.desc": "Système de gestion d'apprentissage intelligent",
    "services.title": "Nos Services",
    "services.appDev": "Développement d'applications",
    "services.appDev.desc": "Applications personnalisées pour vos besoins professionnels",
    "services.webDev": "Création de sites internet",
    "services.webDev.desc": "Sites web modernes et responsifs",
    "services.hosting": "Hébergement web sécurisé",
    "services.hosting.desc": "Solutions d'hébergement fiables et sécurisées",
    "services.training": "Formations en développement web, mobile et desktop",
    "services.training.desc": "Formation professionnelle pour développeurs",
    "contact.title": "Contactez-nous",
    "contact.address": "Yaoundé, Cameroun",
    "contact.email": "contact@toscanisoft.cm",
    "contact.website": "toscanisoft.cm",
    "footer.rights": "Tous droits réservés",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
