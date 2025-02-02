import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const projectsData = {
  "digit-recognizer": {
    title: "Digit Recognizer",
    image: "/images/nick-hillier-yD5rv8_WzxA-unsplash.jpg",
    description:
      "This project involves creating a machine learning model capable of recognizing hand-drawn digits. The model is trained on a dataset of grayscale images and uses various machine learning techniques to accurately classify the digits.",
    technologies: "Python, NumPy, Pandas, Scikit-Learn, TensorFlow, Jupyter Notebook",
    features: [
      "Data preprocessing and augmentation",
      "Model training and evaluation",
      "Accuracy improvement using different algorithms",
      "Visualization of results",
    ],
    challenges:
      "One of the main challenges was optimizing the model to improve its accuracy while keeping the training time reasonable. Techniques such as data augmentation and hyperparameter tuning were employed to address this.",
    results: [
      { image: "/images/digit output.png", caption: "Result Image" },
      { image: "/images/digit result.png", caption: "Recognition Results" },
    ],
    github: "https://github.com/predator-911/Projects/blob/main/Digit%20Recogniser/main.ipynb",
  },
  // Add other projects here...
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={1000}
        height={500}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <div className="prose max-w-none">
        <h2>Overview</h2>
        <p>{project.description}</p>
        <h2>Technologies Used</h2>
        <p>{project.technologies}</p>
        <h2>Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h2>Challenges</h2>
        <p>{project.challenges}</p>
        <h2>Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {project.results.map((result, index) => (
            <div key={index}>
              <Image
                src={result.image || "/placeholder.svg"}
                alt={result.caption}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-center mt-2">{result.caption}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View on GitHub
          </a>
          <Link
            href="/#projects"
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

