import { StackProps } from "@/texts-and-menues/stack"
import { stack } from "@/texts-and-menues/stack"

const Stack = () => {
  return (
    <section id="sponsors" className="container sm:py-4 mt-20">
      <h2 className="mb-10 text-center text-3xl lg:text-4xl font-bold md:text-center">
        Your{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Modern{" "}
        </span>
        Stack
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {stack.map(({ icon, name }: StackProps) => (
          <div key={name} className="flex items-center gap-6  ">
            <span className=" sm:scale-150  text-muted-foreground">{icon}</span>
            <h3 className="text-xl hidden sm:flex sm:flex-row     font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
