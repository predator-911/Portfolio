import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "landmark-detection",
    title: "Landmark Detection AI",
    description: "Advanced computer vision system for identifying and classifying landmarks worldwide.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["TensorFlow", "Python", "Computer Vision"],
    link: "/projects/landmark-detection",
  },
  {
    id: "digit-recognizer",
    title: "Digit Recognizer",
    description: "A machine learning model capable of recognizing hand-drawn digits.",
    image: "/images/nick-hillier-yD5rv8_WzxA-unsplash.jpg",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    link: "/projects/digit-recognizer",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description: "Predicting future home values with advanced machine learning algorithms.",
    image: "/images/pexels-blitzboy-950058.jpg",
    tech: ["Python", "TensorFlow", "Machine Learning"],
    link: "/projects/house-price-prediction",
  },
  {
    id: "nlp-disaster-tweets",
    title: "NLP Disaster Tweets",
    description: "Analyzing real-time disaster tweets using advanced NLP models.",
    image: "/images/pexels-denniz-futalan-339724-942560.jpg",
    tech: ["Python", "NLTK", "NLP"],
    link: "/projects/nlp-disaster-tweets",
  },
  {
    id: "spaceship-titanic",
    title: "Spaceship Titanic",
    description: "Predicting passenger transport in an interstellar adventure.",
    image: "/images/istockphoto-1139597839-1024x1024.jpg",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    link: "/projects/spaceship-titanic",
  },
  {
    id: "store-sales-prediction",
    title: "Store Sales Prediction",
    description: "Predicting store sales trends using sophisticated analytical models.",
    image: "/images/manny-becerra-0sihmMSmnoE-unsplash.jpg",
    tech: ["Python", "Pandas", "Machine Learning"],
    link: "/projects/store-sales-prediction",
  },
  {
    id: "titanic",
    title: "Titanic Survival Prediction",
    description: "Classic machine learning project predicting Titanic passenger survival.",
    image: "/images/istockphoto-1519520425-1024x1024.jpg",
    tech: ["Python", "Scikit-learn", "Machine Learning"],
    link: "/projects/titanic",
  },
  {
    id: "vision-transformer",
    title: "Vision Transformer",
    description: "Transforming visual recognition with advanced attention mechanisms.",
    image: "/images/vit.png",
    tech: ["Python", "PyTorch", "Computer Vision"],
    link: "/projects/vision-transformer",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Exploring the boundaries of technology through innovative solutions and cutting-edge implementations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  id,
  title,
  description,
  image,
  tech,
  link,
}: {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}) {
  return (
    <Link href={link}>
      <div className="glass-card rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative h-64">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span key={t} className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-300">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center text-purple-400 hover:text-purple-300">
            <span>View Project</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}

