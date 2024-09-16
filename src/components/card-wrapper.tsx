"use client"

import { Logo } from "@/components/Logo"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CardWrapperProps {
  children: React.ReactNode
}
export const CardWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="flex    justify-center   ">
      <Card className="  shadow-2xl  backdrop-blur-sm backdrop-hue-rotate-10  inset-0 dark:bg-[url(/grid.svg)]    ">
        <div className=" pl-4  mt-3 pr-20    ">
          <Logo />
        </div>
        <CardContent className=" pr-15  pl-15 ">{children}</CardContent>
      </Card>
    </div>
  )
}
