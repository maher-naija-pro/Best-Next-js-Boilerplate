import { Custommers_list } from "@/texts-and-menues/customers"
import { CustommersProps } from "@/texts-and-menues/customers"

const Custommers = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <div className="container items-center justify-center">
        <h2 className="text-4xl lg:text-6xl  font-bold md:text-center">
          Our-
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Custommers
          </span>
        </h2>
      </div>
      <div className="carousel flex flex-wrap justify-center items-center mt-20 gap-4 md:gap-8">
        {Custommers_list.map(({ icon, name }: CustommersProps) => (
          <div key={name} className="flex items-center gap-1 text-muted-foreground/60">
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Custommers
