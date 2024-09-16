import ListSocial from "./socials-link"

export enum PopularPlanType {
  NO = 0,
  YES = 1
}
export interface PricingProps {
  title: string
  href: string
  popular: PopularPlanType
  price: number
  target: string
  description: string
  buttonText: string
  benefitList: string[]
}

export const pricingList: PricingProps[] = [
  {
    title: "Comunity",
    href: ListSocial.Github.href,
    popular: 0,
    price: 0,
    target: "_blank",
    description: "Our Free Community Plan.",
    buttonText: "Github",
    benefitList: ["Community Support", "Full Community Features"]
  },
  {
    title: "Pro",
    href: "/stripe-one-shot",
    popular: 1,
    price: 292,
    target: "_self",
    description: "One shot",
    buttonText: "Start Pro",
    benefitList: ["Priority Support", "All Advanced Features"]
  },
  {
    title: "Entreprise",
    href: "/company/contact",
    popular: 0,
    price: 4992,
    target: "_self",
    description: "Enterprise Plan.",
    buttonText: "Contact Us",
    benefitList: ["Priority Support", "Custom Features"]
  }
]
