import { Icons } from "@/components/icons"

export interface ServiceProps {
  title: string
  description: string
  icon: JSX.Element
}

export const serviceList: ServiceProps[] = [
  {
    title: "Product specifications",
    description: "Help you to define you product and get fast efficient implementation",
    icon: <Icons.code className="h-6 w-6 dark:text-orange-500 text-blue-500" />
  },
  {
    title: "Customize the stack for your need",
    description: "Implemented for your needs",
    icon: <Icons.dashboard className="h-6 w-6 dark:text-orange-500 text-blue-500" />
  },
  {
    title: "Task Automation",
    description: "Automated hosting and Operations",
    icon: <Icons.project className="h-6 w-6 dark:text-orange-500 text-blue-500" />
  }
]
