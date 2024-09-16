// for page navigation & to sort on leftbar
export const SidebardocLinks = [
  {
    title: "Getting-started",
    href: "getting-started",
    items: [
      { title: "Install", href: "/install" },
      { title: "Configure", href: "/configure" },
      { title: "Deploy", href: "/rundeploy" }
    ]
  },
  {
    title: "Tutorials",
    href: "tutorials",

    items: [
      { title: "Change Your Logo", href: "/change-logo" },
      { title: "Change Pages Text", href: "/change-pages-text" }
    ]
  }
]

export const page_routes = SidebardocLinks.map(({ href, items }) => {
  return items.map(link => {
    return {
      title: link.title,
      href: href + link.href
    }
  })
}).flat()
