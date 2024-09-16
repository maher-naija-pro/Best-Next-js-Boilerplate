import { Icons } from "@/components/icons"

export interface StackProps {
  icon: JSX.Element
  name: string
}

export const stack: StackProps[] = [
  {
    icon: <Icons.postgres size={34} />,
    name: "Postgres"
  },
  {
    icon: <Icons.prisma size={34} />,
    name: "Prisma"
  },
  {
    icon: <Icons.nextjs size={34} />,
    name: "Next.js"
  },
  {
    icon: <Icons.tailwindcss size={34} />,
    name: "Tailwind CSS"
  },
  {
    icon: <Icons.stripe size={34} />,
    name: "Stripe"
  },
  {
    icon: <Icons.typescript size={34} />,
    name: "TypeScript"
  }
]
