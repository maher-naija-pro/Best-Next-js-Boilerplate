import { Icons } from "@/components/icons"
import ListSocial from "@/texts-and-menues/socials-link"
import Link from "next/link"

const Social_links = () => {
  return (
    <div className="  flex gap-4 mt-4 ">
      {" "}
      {Object.keys(ListSocial).map(item => {
        // @ts-ignore
        const Icon = Icons[ListSocial[item].icon || "arrowRight"]
        // @ts-ignore
        const Href = ListSocial[item].href || "/"
        // @ts-ignore
        const name = ListSocial[item].name || "/"
        return (
          <div className="flex group">
            <Link href={Href} key={name} className="flex flex-col justify-center items-center  ">
              <Icon className=" group-hover:scale-125 size-7  group-hover:text-slate-400   " />
              <div className=" sm:flex md:text-xs   group-hover:text-slate-400  ">{name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Social_links
