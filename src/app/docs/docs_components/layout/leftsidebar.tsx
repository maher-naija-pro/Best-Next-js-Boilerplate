import { Menu } from "@/app/docs/docs_components/layout/menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Leftbar() {
  return (
    <aside className="md:flex  hidden flex-[0.9] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
      <ScrollArea className="py-4">
        <Menu />
      </ScrollArea>
    </aside>
  )
}
