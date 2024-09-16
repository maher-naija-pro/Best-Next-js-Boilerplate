import { NavItem } from "@/app/[locale]/(platforme)/_types"

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard"
  },

  {
    title: "Profile",
    href: "/profile",
    icon: "profile",
    label: "profile"
  },
  {
    title: "Settings",
    href: "/usersettings",
    icon: "settings",
    label: "sersettings"
  },
  {
    title: "home",
    href: "/",
    icon: "login",
    label: "login"
  }
]

export const navItemsadmin: NavItem[] = [
  {
    title: "Admin",
    href: "/admin",
    icon: "arrowRight",
    label: "Admin"
  }
]
