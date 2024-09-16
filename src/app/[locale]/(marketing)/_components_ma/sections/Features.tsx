import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { features } from "@/texts-and-menues/features"
import { featureList } from "@/texts-and-menues/features"
import { ListbadgProps } from "@/texts-and-menues/features"
import { FeatureProps } from "@/texts-and-menues/features"
import Link from "next/link"

const Features = () => {
  return (
    <section id="features" className="container py-10 sm:py-32 space-y-8">
      <div className="container items-center justify-center mb-20">
        <h2 className="text-4xl lg:text-6xl  font-bold text-center">
          Many{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Great
          </span>{" "}
          Features
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4  ">
        {featureList.map((feature: ListbadgProps) => (
          <div key={feature.title}>
            <Link href={feature.href}>
              <Badge
                variant="secondary"
                className="text-sm sm:text-base border hover:scale-110 bg-slate-900 text-slate-50  hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-50  dark:hover:text-slate-900 border-slate-900 font-semibold   "
              >
                {feature.title}
              </Badge>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex underline flex-row justify-center text-center text-lg">
        <Link href="/resources/features">All Features List Here</Link>
        <Icons.doublearrowright className="ml-2 size-6" />
      </div>
      <div className="grid  lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card
            key={title}
            className="transition duration-1000 hover:scale-110  inset-0 sm:dark:bg-[url(/grid.svg)] bg-auto "
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-4">
              <div className="float-left col-span-1 ">{icon}</div>
              <div className=" text-justify col-span-3"> {description}</div>
            </CardContent>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
