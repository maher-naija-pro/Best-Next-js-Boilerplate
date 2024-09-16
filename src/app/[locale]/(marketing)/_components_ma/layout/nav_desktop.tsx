import { Icons } from "@/components/icons"
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import routeList from "@/texts-and-menues/menu"
import * as React from "react"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li className=" list-none ">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3  leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-semibold ">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
const Nav_desktop = () => {
  return (
    <NavigationMenu>
      <div className="hidden xl:flex   ">
        <ul className="flex ">
          {Object.keys(routeList).map(template_name => {
            //@ts-ignore
            if (routeList[template_name].menu == "false")
              return (
                <ListItem
                  key={template_name}
                  title={template_name}
                  //@ts-ignore
                  href={routeList[template_name].href}
                ></ListItem>
              )

            //@ts-ignore
            if (routeList[template_name].menu == "true")
              return (
                <NavigationMenuItem className=" list-none">
                  <NavigationMenuTrigger className=" text-sm font-semibold ">
                    {template_name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className=" container flex flex-row gap-8 justify-center items-center">
                    {
                      // @ts-ignore
                      routeList[template_name].items.map(item => {
                        // @ts-ignore
                        const Icon = Icons[item.icon || "arrowRight"]
                        return (
                          <div className="flex justify-center items-center flex-row w-32">
                            <Icon className="mr-2 h-8 w-8" />
                            <ListItem key={item.name} title={item.name} href={item.href}>
                              {item.desc}
                            </ListItem>
                          </div>
                        )
                      })
                    }
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
          })}
        </ul>
      </div>
    </NavigationMenu>
  )
}
export default Nav_desktop
