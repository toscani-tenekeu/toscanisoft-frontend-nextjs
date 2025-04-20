import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
  const faqs = [
    {
      question: "What is Way to Code?",
      answer:
        "Way to Code is an educational platform developed by Toscanisoft, offering programming tutorials, projects, and resources for developers. Based in Yaoundé, Cameroon, we focus on making coding education accessible to African developers and beyond.",
    },
    {
      question: "What types of content do you offer?",
      answer:
        "We offer both free and premium content including: Programming tutorials, Downloadable project source code, Premium project templates, CV builder tools",
    },
    {
      question: "How much do premium projects cost?",
      answer:
        "Premium project prices vary based on complexity and features, typically ranging from 15,000 FCFA to 150,000 FCFA. We also offer many free projects for learning purposes.",
    },
    {
      question: "Can I use the projects for commercial purposes?",
      answer:
        "Yes, both free and premium projects can be used for commercial purposes. Premium projects include additional features and support to help you build professional applications.",
    },
    {
      question: "How do I get support?",
      answer:
        "You can reach our support team at toscanisoft@gmail.com or call us at: +237 694 19 34 93 or +237 674 69 05 95",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 7-day money-back guarantee on all premium projects if you're not satisfied with your purchase.",
    },
    {
      question: "What technologies do you cover?",
      answer:
        "We cover modern web development technologies including: React and Next.js, TypeScript, Node.js and Express, MongoDB and other databases, Docker and DevOps tools, TailwindCSS and modern styling",
    },
    {
      question: "Is Way to Code suitable for beginners?",
      answer:
        "Yes! We offer content for all skill levels, from beginner to advanced. Our tutorials are clearly marked with difficulty levels to help you find appropriate content for your experience level.",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Frequently Asked Questions
            </h1>

            <div className="bg-white/80 dark:bg-blue-950/50 backdrop-blur-md rounded-xl p-8 shadow-sm">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <AccordionTrigger className="text-lg font-medium text-gray-800 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
