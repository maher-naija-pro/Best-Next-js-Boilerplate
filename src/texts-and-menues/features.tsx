import { Icons } from "@/components/icons"

export interface FeatureProps {
  title: string
  description: string
  icon: JSX.Element
}
export interface ListbadgProps {
  title: string
  href: string
}
export const features: FeatureProps[] = [
  {
    title: "All saas feature needed",
    description:
      "A robust SaaS application requires features such as secure user authentication, subscription management, Integrated billing systems, and documentation",
    icon: <Icons.Tools size={70} />
  },

  {
    title: "Responsive and Intuitive Design",
    description:
      "Mobile-centric responsive design prioritizing and optimizing web content for mobile devices first, adapting the layout to larger screens. Designed to be user-friendly and straightforward, allowing users to interact with the system efficiently",
    icon: <Icons.Layers size={70} />
  },
  {
    title: "Performance and SEO friendly",
    description:
      " Elevate your SaaS platform with our performance optimization and SEO-friendly solutions for faster load times and higher search rankings, often feeling natural and obvious in its use.",
    icon: <Icons.Rocket size={70} />
  }
]

export const featureList: ListbadgProps[] = [
  { title: "Marketing Land Page", href: "/resources/features/#Marketing" },
  { title: "User Dashboard", href: "/resources/features/#Dashboard" },
  { title: "User Account Management", href: "/resources/features/#Account" },
  { title: "Pricing Table", href: "/resources/features/#Pricing" },
  { title: "Stripe Payment", href: "/resources/features/#Stripe" },
  { title: "Responsive Design", href: "/resources/features/#Responsive" },
  { title: "Seo Friendly", href: "/resources/features/#SEO" },
  { title: "Performance", href: "/resources/features/#Performance" },
  { title: "Dark / Light Theme", href: "/resources/features/#theme" },
  { title: "Documentation Markdown Section", href: "/resources/features/#Docu" },
  { title: "Contact Form", href: "/resources/features/#Contact" },
  { title: "Newsletter", href: "/resources/features/#Newsletter" }
]
