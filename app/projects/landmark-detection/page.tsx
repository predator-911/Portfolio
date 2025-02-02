import Image from "next/image"
import Link from "next/link"

export default function LandmarkDetection() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Landmark Detection Project</h1>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            This project involves creating a machine learning model capable of detecting landmarks from images. The
            model is trained on a comprehensive dataset containing information about various landmarks worldwide.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Data Distribution</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BLSmZBj2JaR1Jm9TxUM3Lj522IZcWV.png"
                alt="Data Distribution"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500">Distribution of images across different landmarks</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Model Performance</h3>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Cy91H9Clg1gZz0j1CHbDYDjRCsUhHB.png"
                alt="Model Performance"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500">Analysis of landmark recognition accuracy</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Advanced image recognition algorithms</li>
                <li>Support for multiple landmark categories</li>
                <li>High accuracy prediction model</li>
                <li>Efficient data preprocessing pipeline</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Built with TensorFlow and Keras</li>
                <li>Utilizes transfer learning techniques</li>
                <li>Implements data augmentation</li>
                <li>Optimized for performance</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <Link
              href="https://github.com/yourusername/landmark-detection"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View on GitHub
            </Link>
            <Link
              href="/#projects"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

