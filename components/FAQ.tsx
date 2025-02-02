"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "How can I contact you to discuss a project or collaboration?",
    answer:
      "You can reach me through the contact form on my website or by messaging me on LinkedIn. I'm also available via email for detailed discussions.",
  },
  {
    question: "What is your experience with machine learning and data science?",
    answer:
      "I have experience in developing machine learning models for various applications, including digit recognition and disaster tweet classification. I have also worked on data analysis and visualization projects.",
  },
  {
    question: "Can you share some of your past projects?",
    answer:
      "Yes, you can view my projects on my GitHub profile. Some of my notable projects include a store sales prediction model, a Spaceship Titanic survival prediction, and a landmark detection project.",
  },
  {
    question: "Do you offer web development services?",
    answer:
      "Yes, I also have experience in web development. I can create and maintain websites using modern web technologies, and I have worked on several web development projects.",
  },
  {
    question: "What tools and technologies do you use for your projects?",
    answer:
      "I use a variety of tools and technologies depending on the project requirements. For machine learning and data science, I commonly use Python, TensorFlow, Keras, and scikit-learn. For web development, I use HTML, CSS, JavaScript, React, and Node.js.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequent questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="mt-2 py-2 px-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

