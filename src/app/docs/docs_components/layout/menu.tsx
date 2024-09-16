import { SheetClose } from "@/components/ui/sheet"
import { SidebardocLinks } from "@/texts-and-menues/docs-sidebar-links"
import Link from "next/link"

export function Menu({ isSheet = false }) {
  return (
    <>
      {SidebardocLinks.map(({ href, items, title }) => {
        return (
          <div className="flex  flex-col gap-3 mt-5 container" key={href}>
            <Link href={href}>
              <h4 className="hover:font-extrabold font-bold text-base">{title}</h4>
            </Link>
            <div className="flex flex-col gap-3 sm:text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
              {items.map(subItem => {
                const key = `/docs/${href}${subItem.href}`
                const Comp = (
                  <Link className="hover:font-bold font-medium text-primary" href={key} key={key}>
                    {subItem.title}
                  </Link>
                )
                return isSheet ? (
                  <SheetClose key={key} asChild>
                    {Comp}
                  </SheetClose>
                ) : (
                  Comp
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
