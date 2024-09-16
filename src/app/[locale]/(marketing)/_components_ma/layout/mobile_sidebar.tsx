import { Logo } from "@/components/Logo"
import { LoginButton } from "@/components/buttons/login-button"
import { RegisterButton } from "@/components/buttons/register-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import routeList from "@/texts-and-menues/menu"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface RouteProps {
  href: string
  label: string
}

const Mobile_sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={() => setIsOpen(true)} variant="ghost" className="xl:hidden p-7 ">
        <span className="sr-only">Open Menu</span>
        <Menu className="flex size-8 " />
      </Button>

      <SheetContent className="w-full" side={"right"}>
        <SheetHeader>
          <SheetTitle className="font-bold text-xl text-start">
            <div className="grid grid-cols-2 ">
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>{" "}
        <div className="scrollbar h-full overflow-y-scroll ">
          <div className="flex w-full flex-col justify-center ">
            <RegisterButton>
              <Button className="bg-red-800  hover:bg-slate-800  dark:text-white py-6 mt-5 w-full   ">
                Start NOW
              </Button>
            </RegisterButton>
            <LoginButton>
              <Button className="border text-slate-900 bg-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-900  dark:hover:text-slate-50 border-slate-700  text-base font-semibold mt-5 py-6 w-full ">
                Sign-in
              </Button>
            </LoginButton>
          </div>{" "}
          <div className="flex flex-col  last:justify-center items-start space-y-3 mt-6"></div>
          <ul className="flex flex-col space-y-6 mt-2 mb-10">
            {Object.keys(routeList).map(template_name => {
              //@ts-ignore

              return (
                <div className="flex flex-col  xl:hidden">
                  {" "}
                  {
                    //@ts-ignore
                    routeList[template_name].menu == "true" ? (
                      <div>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="item-1">
                            <AccordionTrigger>
                              <div className="cursor-pointer  hover:font-bold text-lg">
                                {template_name}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              {" "}
                              {
                                // @ts-ignore
                                routeList[template_name].items.map(item => {
                                  // @ts-ignore

                                  return (
                                    <div className="flex mt-4 ml-4 flex-row ">
                                      <Link
                                        className="cursor-pointer  hover:font-bold text-lg"
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    </div>
                                  )
                                })
                              }
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    ) : (
                      <div>
                        <Link
                          className="cursor-pointer  hover:font-bold text-lg"
                          key={template_name}
                          //@ts-ignore
                          href={routeList[template_name].href}
                          onClick={() => setIsOpen(false)}
                        >
                          {template_name}
                        </Link>{" "}
                        <Separator className="mt-4" />
                      </div>
                    )
                  }
                </div>
              )
            })}
          </ul>{" "}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Mobile_sidebar
