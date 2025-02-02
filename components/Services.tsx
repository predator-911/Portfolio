import type React from "react"
import { Code, Gem, Tv } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Offered services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          As a fresher, I provide expertise in machine learning, crafting intelligent algorithms, coupled with front-end
          development skills to create visually appealing and interactive user interfaces for seamless user experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Gem className="w-12 h-12 text-blue-500" />}
            title="Machine Learning"
            description="I bring a solid foundation in algorithmic understanding, data analysis, and model development, aiming to contribute innovative solutions to real-world challenges with a passion for continuous learning and growth."
          />
          <ServiceCard
            icon={<Code className="w-12 h-12 text-green-500" />}
            title="Development"
            description="I offer proficiency in modern web technologies, UI/UX design principles, and a keen eye for creating visually engaging and responsive user interfaces, driven by a commitment to delivering seamless and user-centric experiences."
          />
          <ServiceCard
            icon={<Tv className="w-12 h-12 text-purple-500" />}
            title="Data Science"
            description="I bring a strong analytical mindset, proficiency in statistical techniques, and data manipulation skills to extract meaningful insights. Eager to apply my knowledge in solving real-world problems and contributing to decision-making processes."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

