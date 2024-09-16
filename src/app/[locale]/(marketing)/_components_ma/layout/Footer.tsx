import Social_links from "@/app/[locale]/(marketing)/_components_ma/layout/social_link"
import { Logo } from "@/components/Logo"
import templates from "@/texts-and-menues/footer"
import Link from "next/link"

const Footer = () => {
  return (
    <footer id="footer">
      <section className="container   flex   sm:flex-row flex-col  ">
        <div className=" justify-center items-center basis-2/12 flex gap-10 sm:gap-2 flex-col mt-10 ">
          <Logo />
          <Social_links />
        </div>{" "}
        <div className="container grid grid-cols-2 sm:ml-10 basis-10/12 lg:grid-cols-4 ">
          {Object.keys(templates).map(template_name => {
            return (
              <div className="flex flex-col gap-2">
                <h4 className="text-lg  mb-2 mt-10 ">{template_name}</h4>

                {
                  //@ts-ignore
                  templates[template_name].items.map(item => {
                    return (
                      <Link href={item.href}>
                        <div className="opacity-60 hover:scale-105 hover:opacity-100">
                          {item.name}
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            )
          })}
        </div>
      </section>

      <section className="container pb-14 text-center mt-10">
        <h3>
          Created by{" "}
          <Link href="/" className="mt-10 text-primary border-primary border-b-2 hover:border-0 ">
            Innoxen
          </Link>
        </h3>
      </section>
    </footer>
  )
}

export default Footer
