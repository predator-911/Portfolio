import Image from "next/image"

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <Image
          src="/profile-image.jpg"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl mb-8">Web Developer & Designer</p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero

