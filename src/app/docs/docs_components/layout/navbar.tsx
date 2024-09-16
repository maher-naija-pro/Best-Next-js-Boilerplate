import Anchor from "@/app/docs/docs_components/anchor"
import Search from "@/app/docs/docs_components/search"
import { MobileSidebar } from "@/app/docs/docs_components/layout/mobile-side-bar"
import { Logo } from "@/components/Logo"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { NavDocsLinks } from "@/texts-and-menues/docs-nav-links"
import ListSocial from "@/texts-and-menues/socials-link"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Link href="/docs">
                <Logo />
              </Link>
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
              <Link
                target="_blank"
                href={ListSocial.Github.href}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.github className="size-7" />
              </Link>

              <MobileSidebar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NavDocsLinks.map(item => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
