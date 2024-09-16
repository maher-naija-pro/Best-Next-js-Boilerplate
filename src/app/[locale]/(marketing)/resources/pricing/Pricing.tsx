import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { PopularPlanType } from "@/texts-and-menues/pricing"
import { PricingProps } from "@/texts-and-menues/pricing"
import { pricingList } from "@/texts-and-menues/pricing"
import { Check } from "lucide-react"

const Pricing = () => {
  return (
    <section id="pricing" className="container  py-10 ">
      <div className="container  ">
        <h2 className="text-4xl lg:text-6xl  font-bold text-center">
          Get
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            Unlimited{" "}
          </span>
          Access
        </h2>
        <h3 className="text-xl text-center text-muted-foreground mt-8 pt-4 pb-8 ">
          Choose the perfect plan to elevate your business with our flexible and affordable pricing
          options
        </h3>
      </div>

      <div className="grid  md:grid-cols-3 gap-10 mt-8 ">
        {pricingList.map((pricing: PricingProps) => (
          <div className="transition duration-200 hover:scale-105  ">
            <Card
              key={pricing.title}
              className={
                pricing.popular === PopularPlanType.YES
                  ? "drop-shadow-2xl shadow-black/10 sm:-mt-10 h-200 scale-105 dark:shadow-white"
                  : "drop-shadow-xl  shadow-black/10  dark:shadow-white"
              }
            >
              <CardHeader>
                <CardTitle className="flex item-center justify-between">
                  <div className=" mb-4">{pricing.title}</div>
                  {pricing.popular === PopularPlanType.YES ? (
                    <Badge
                      variant="secondary"
                      className="text-sm text-primary bg-cyan-300 dark:bg-cyan-400"
                    >
                      Most popular
                    </Badge>
                  ) : null}
                </CardTitle>
                <div className=" ">
                  <span className="text-3xl font-bold ">${pricing.price}</span>
                  <span className="text-muted-foreground"> </span>
                </div>

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className={
                    pricing.popular === PopularPlanType.YES
                      ? " w-full   bg-red-700 border hover:border-slate-400 hover:bg-slate-800  rounded-full ml-4 py-4 px-10 dark:text-white"
                      : "w-full border hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base"
                  }
                >
                  <a target={pricing.target} href={pricing.href}>
                    {" "}
                    {pricing.buttonText}{" "}
                  </a>
                </Button>
              </CardContent>

              <hr className="w-4/5 m-auto mb-4" />

              <CardFooter className="flex">
                <div className="space-y-4">
                  {pricing.benefitList.map((benefit: string) => (
                    <span key={benefit} className="flex">
                      <Check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
