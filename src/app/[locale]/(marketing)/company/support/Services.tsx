import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { serviceList } from "@/texts-and-menues/services"
import { ServiceProps } from "@/texts-and-menues/services"
import Image from "next/image"

const Services = () => {
  return (
    <section className="container py-10 sm:py-16">
      <div className="container items-center justify-center">
        <h2 className="text-4xl lg:text-6xl  font-bold md:text-center">
          Our-
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Services
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center mt-20">
        <Image
          width={300}
          height={300}
          src="/service.webp"
          alt="About services"
          className="object-contain"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Designed Around You — Services That Speak Your Language!
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="hover:scale-110 transition duration-1000">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-3 rounded-2xl">{icon}</div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">{description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
