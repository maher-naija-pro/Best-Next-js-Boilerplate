import { DemoFormContent } from "@/app/[locale]/(marketing)/company/contact/_form_content"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import Link from "next/link"

const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full bg-muted/10 sm:dark:bg-[url(/grid.svg)] bg-auto py-10 my-10  sm:my-24"
    >
      <div className="inset-0 sm:grid sm:grid-cols-2 items-center">
        <div className="  container sm:col-start-1 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold  ">
            Speeding
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Your Dreams{" "}
            </span>
            to the Real World
          </h2>
          <p className="text-muted-foreground text-xl mt-4   ">
            Fast-Track Your Ideas into Reality!
          </p>
        </div>

        <div className=" flex flex-col justify-center gap-4 container sm:col-start-2  ">
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" border sm:px-7 sm:py-5 font-semibold text-base hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700    ">
                Request Your Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Request your Demo</DialogTitle>
              </DialogHeader>
              <DemoFormContent />
            </DialogContent>
          </Dialog>

          <Link className="cursor-pointer" key="features" href="/resources/features">
            <Button
              className="  w-full border sm:px-7 sm:py-5 font-semibold text-base  bg-slate-50 text-slate-900
                         dark:text-slate-50  dark:bg-slate-900 hoover:bg-slate-50 hover:text-slate-50 dark:hover:bg-slate-50  dark:hover:text-slate-900 border-slate-700 "
            >
              View All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
