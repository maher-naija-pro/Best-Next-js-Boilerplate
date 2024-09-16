import { sponsors } from "@/texts-and-menues/sponsors"
import { SponsorProps } from "@/texts-and-menues/sponsors"

const Sponsors = () => {
  return (
    <section id="sponsors" className=" sm:py-4">
      <div className=" container">
        <h2 className="mb-10 text-center text-3xl lg:text-4xl font-bold md:text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Investors{" "}
          </span>{" "}
          And{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Founders
          </span>
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center   gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div key={name} className="flex  items-center gap-1 ">
            <span>{icon}</span>
            <h3 className=" w-32 text-base sm:text-lg font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
