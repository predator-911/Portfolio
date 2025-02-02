import Link from "next/link"

export default function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Crafting Digital Experiences
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Building innovative solutions at the intersection of machine learning and web development.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="#projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="#contact" className="btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

