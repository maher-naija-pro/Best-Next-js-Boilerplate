import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col ">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>

        <div className="">
          <p className="text-xs sm:text-sm font-medium  ">Client-1</p>
          xlient-1@email.com
        </div>
      </div>
    </div>
  )
}
