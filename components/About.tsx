export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hi there I'm Lakshya,</h3>
            <p className="text-gray-600">
              Passionate about continuous learning and development, I thrive on creating innovative projects that
              challenge and expand my skills. Always eager to embrace new challenges, I am dedicated to evolving and
              making impactful contributions in the ever-changing landscape of development.
            </p>
          </div>
          <div>
            <TimelineItem
              year="2022 - PRESENT"
              title="B.TECH Student"
              description="Pursuing Information Technology & Engineering"
            />
            <TimelineItem year="2020 - 2021" title="Greater Noida World School" description="(10+2) (PCM) - 92%" />
          </div>
          <div>
            <TimelineItem year="2018 - 2019" title="Greater Noida World School" description="10th Class - 92%" />
            <TimelineItem
              year="2016 - 2017"
              title="Greater Noida World School"
              description="Preparing for the battle.."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{year}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

