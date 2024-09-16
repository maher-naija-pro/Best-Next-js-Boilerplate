import Statistics from "@/app/[locale]/(marketing)/_components_ma/sections/Statistics"
import { Abouttext } from "@/texts-and-menues/about-company"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="container py-10 sm:py-32">
      <div className="container  items-center justify-center">
        <h2 className="text-4xl lg:text-6xl  font-bold text-center">
          {Abouttext.title}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {Abouttext.titlegradient}
          </span>
        </h2>
      </div>
      <div className="bg-muted/50 border rounded-lg mt-10">
        <div className="px-6 flex flex-col md:flex-row gap-8 justify-center items-center md:gap-12">
          <div className="mt-4 md:w-300 w-300 md:w-1/3 flex-col items-center justify-center">
            <Image
              width={300}
              height={300}
              src="/company.webp"
              alt="About services"
              className="object-contain"
            />
          </div>

          <div className="flex md:w-2/3 flex-col ">
            <div className="pb-6 mt-10">
              <h2 className="text-2xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {Abouttext.cardtitle} {""}
                </span>
                {Abouttext.cardtitlegradient}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">{Abouttext.text}</p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
