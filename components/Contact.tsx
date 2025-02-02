export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me
          your message using the following email{" "}
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-600 transition duration-300">
            your.email@example.com
          </a>
        </p>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Contact details</h3>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> Lakshya Kumar
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                your.email@example.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                https://www.linkedin.com/in/yourprofile
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/predator-911/Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                https://github.com/predator-911/Projects
              </a>
            </p>
            <p>
              <strong>Phone:</strong> [9958677429]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

