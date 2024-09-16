import DocsBreadcrumb from "@/app/docs/docs_components/docs-breadcrumb"
import Pagination from "@/app/docs/docs_components/pagination"
import Toc from "@/app/docs/docs_components/toc"
import { Separator } from "@/components/ui/separator"
import { getMarkdownForSlug } from "@/lib/markdown"
import { page_routes } from "@/texts-and-menues/docs-sidebar-links"
import { notFound } from "next/navigation"
import { PropsWithChildren, cache } from "react"

type PageProps = {
  params: { slug: string[] }
}

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug)

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/")
  const res = await cachedGetMarkdownForSlug(pathName)

  if (!res) notFound()
  return (
    <div className="flex container ">
      <div className="pt-10  w-9/12">
        <DocsBreadcrumb paths={slug} />

        <Markdown>
          <div className="flex flex-col antialiased font-sans   ">
            <h1 className="text-3xl">{res.frontmatter.title}</h1>
            <p className=" mb-4 text-lg  text-muted-foreground text-[16.5px]">
              {res.frontmatter.description}
            </p>{" "}
            <Separator className="mb-4" />
            <div className=" text-base w-11/12 h-screen">{res.content}</div>{" "}
            <Separator className="mb-4" />
            <Pagination pathname={pathName} />
          </div>
        </Markdown>
      </div>
      <div className=" absolute end-0  h-screen">
        <Toc path={pathName} />
      </div>
    </div>
  )
}

function Markdown({ children }: PropsWithChildren) {
  return (
    <div className="prose prose-zinc dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto prose-code:text-sm prose-code:leading-6 dark:prose-code:text-white prose-code:text-neutral-800 prose-code:p-1 prose-code:rounded-md prose-pre:border pt-2">
      {children}
    </div>
  )
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/")
  const res = await cachedGetMarkdownForSlug(pathName)
  if (!res) return null
  const { frontmatter } = res
  return {
    title: frontmatter.title,
    description: frontmatter.description
  }
}

export function generateStaticParams() {
  return page_routes.map(item => ({
    slug: item.href.split("/")
  }))
}
