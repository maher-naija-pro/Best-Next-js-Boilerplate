import Copy from "@/app/docs/docs_components/copy"
import { ComponentProps } from "react"

export default function Pre({ children, raw, ...rest }: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5 relative  rounded-sm p-4 border hover:bg-slate-50 dark:text-slate-950 bg-slate-200 border-gray-400">
      <div className="absolute  top-3 right-2.5 z-10 sm:block hidden">
        <Copy content={raw!} />
      </div>
      <div className="relative">
        <pre {...rest}>{children}</pre>
      </div>
    </div>
  )
}
