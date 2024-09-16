import { Footer } from "@/app/docs/docs_components/layout/footer"
import { Leftbar } from "@/app/docs/docs_components/layout/leftsidebar"
import { Navbar } from "@/app/docs/docs_components/layout/navbar"
import { ModeToggle } from "@/app/docs/docs_components/layout/theme-toggle"
import ScrollToTop from "@/components/ScrollToTop"

export default function DocsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="sm:flex  ">
        <div className=" bg-slate-50 dark:bg-slate-900 min-w-40">
          <Leftbar />
        </div>

        {children}
      </div>
      <div className="   bottom-4 fixed z-20     left-4">
        <ModeToggle />
      </div>{" "}
      <ScrollToTop />{" "}
      <div className=" bg-slate-50 dark:bg-slate-900   ">
        <Footer />
      </div>
    </div>
  )
}
