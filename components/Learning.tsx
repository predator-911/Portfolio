import Image from "next/image"

const learningJourney = [
  {
    id: 1,
    title: "Advanced JavaScript",
    description:
      "Completed an advanced course on JavaScript, focusing on ES6 features and modern development practices.",
    icon: "/images/details-icon-javascript.png",
  },
  {
    id: 2,
    title: "Data Science Specialization",
    description:
      "Earned a specialization in data science, covering machine learning, data visualization, and statistical analysis.",
    icon: "/images/data-science.png",
  },
  {
    id: 3,
    title: "Database Management & SQL",
    description:
      "Studied advanced database management techniques and SQL querying. Gained hands-on experience with database design, normalization, and complex SQL queries.",
    icon: "/images/sql.png",
  },
]

export default function Learning() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Learning Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {learningJourney.map((item) => (
            <LearningCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LearningCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Image src={icon || "/placeholder.svg"} alt={title} width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

