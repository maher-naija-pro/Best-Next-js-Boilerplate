import { Icons } from "@/components/icons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ListbadgProps } from "@/texts-and-menues/advanced-features"
import { FeatureProps } from "@/texts-and-menues/advanced-features"
import { ListProps } from "@/texts-and-menues/advanced-features"
import { features_advanced } from "@/texts-and-menues/advanced-features"
import { features } from "@/texts-and-menues/advanced-features"
import { featureList } from "@/texts-and-menues/advanced-features"
import { featureListAdvanced } from "@/texts-and-menues/advanced-features"
import Link from "next/link"

const Features = () => {
  return (
    <section id="features" className="container py-10 sm:py-32 space-y-8">
      <div className="container items-center justify-center">
        <h2 className="text-4xl lg:text-6xl  font-bold text-center">
          Many{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Great
          </span>{" "}
          Features
        </h2>
      </div>

      <div className="flex  flex-wrap justify-center gap-4 pb-10 ">
        {featureList.map((feature: ListbadgProps) => (
          <div key={feature.title}>
            <Link href={feature.href}>
              <Badge
                variant="secondary"
                className="hover:cursor-pointer sm:text-base text-sm border hover:scale-110 bg-slate-900 text-slate-50  hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-50  dark:hover:text-slate-900 border-slate-900 font-semibold   "
              >
                {feature.title}
              </Badge>
            </Link>
          </div>
        ))}
      </div>

      <div className=" grid md:grid-cols-1 lg:grid-cols-1 gap-2 mt-28 mb-20">
        {features.map(({ title, description, image, link, list }: FeatureProps) => (
          <a className="py-20 -my-20" id={link}>
            <Card
              key={title}
              className="transition duration-1000 hover:scale-105  inset-0 sm:dark:bg-[url(/grid.svg)] bg-auto "
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>
                {description}
                <Accordion type="single" collapsible>
                  {list.map(({ title, desc }: ListProps) => (
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div className=" flex flex-row text-left gap-2">
                          <Icons.star />
                          {title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>{desc}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </a>
        ))}

        <Collapsible className=" text-center mt-10 ">
          <CollapsibleTrigger className="text-xl">
            <div className="flex">
              Show More features Here
              <Icons.doublearrow className="size-6 ml-2" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex mt-10 flex-wrap justify-center gap-4  ">
              {featureListAdvanced.map((feature: ListbadgProps) => (
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
            <div className=" grid md:grid-cols-1 lg:grid-cols-1 gap-8 mt-20 mb-20">
              {features_advanced.map(({ title, description, image, link, list }: FeatureProps) => (
                <a className="py-20 -my-20" id={link}>
                  <Card
                    key={title}
                    className=" text-left transition duration-1000 hover:scale-105  inset-0 sm:dark:bg-[url(/grid.svg)] bg-auto "
                  >
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      {description}{" "}
                      <Accordion type="single" collapsible>
                        {list.map(({ title, desc }: ListProps) => (
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <div className=" flex flex-row text-left gap-2">
                                <Icons.star />
                                {title}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>{desc}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>

                    <CardFooter></CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}

export default Features
