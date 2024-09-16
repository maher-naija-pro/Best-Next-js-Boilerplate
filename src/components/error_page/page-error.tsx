import { CardWrapper } from "@/components/card-wrapper"

interface PageErrorProps {
  message?: string
}

export const PageError = ({ message }: PageErrorProps) => {
  if (!message) return null
  return (
    <CardWrapper>
      <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <p>{message}</p>
      </div>
    </CardWrapper>
  )
}
