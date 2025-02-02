import Image from "next/image"
import Link from "next/link"
import ProjectLayout from "../../../components/ProjectLayout"

export default function DigitRecognizer() {
  return (
    <ProjectLayout title="Project Details - Digit Recogniser">
      <div className="ex-basic-1 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Image
                src="/images/nick-hillier-yD5rv8_WzxA-unsplash.jpg"
                alt="Digit Recognizer Project"
                width={1000}
                height={600}
                className="img-fluid mt-5 mb-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ex-basic-1 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <h2 className="mb-3">Digit Recognizer using Machine Learning</h2>
              <p>
                <strong>Overview:</strong> This project involves creating a machine learning model capable of
                recognizing hand-drawn digits. The model is trained on a dataset of grayscale images and uses various
                machine learning techniques to accurately classify the digits.
              </p>
              {/* Add more project details here */}
              <div className="project-images mt-5">
                <Image
                  src="/images/digit output.png"
                  alt="Sample Digit Recognition"
                  width={800}
                  height={400}
                  className="img-fluid mb-3"
                />
                <p>Result Image</p>
                <Image
                  src="/images/digit result.png"
                  alt="Recognition Results"
                  width={800}
                  height={400}
                  className="img-fluid mb-3"
                />
                <Link
                  href="https://github.com/predator-911/Projects/blob/main/Digit%20Recogniser/main.ipynb"
                  target="_blank"
                  className="btn-solid-reg"
                >
                  View on GitHub
                </Link>
                <Link href="/" className="btn-solid-reg mb-5">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  )
}

