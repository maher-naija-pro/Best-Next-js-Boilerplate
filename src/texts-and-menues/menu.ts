import { NavDocsLinks } from "./docs-nav-links"

const routeList = {
  Home: {
    menu: "false",
    href: "/",
    items: []
  },
  Company: {
    href: "/company/about",
    menu: "true",
    items: [
      { name: "About", href: "/company/about", desc: "About our philosophy", icon: "building" },
      { name: "Customers", href: "/company/custommers", desc: "They trust us", icon: "people" },
      { name: "Contact", href: "/company/contact", desc: "Keep in touch", icon: "contact" },
      { name: "Support", href: "/company/support", desc: "We are here any time", icon: "support" }
    ]
  },

  Features: {
    menu: "false",
    href: "/resources/features",
    items: []
  },

  Docs: {
    menu: "true",
    href: "/docs/getting-started",
    items: [
      {
        name: "Get-Start",
        href: "/docs/getting-started/getting-started",
        desc: "Go speed",
        icon: "start"
      },
      { name: "Tutorials", href: "/docs/tutorials/tutorials", desc: "Tutorials", icon: "school" }
    ]
  },

  Pricing: {
    menu: "false",
    href: "/resources/pricing",
    items: []
  }
}

export default routeList
