"use client"

import ClipLoader from "react-spinners/ClipLoader"

interface LoadingButtonProps {
  loading?: boolean
}

export const Loader = ({ loading }: LoadingButtonProps) => {
  return (
    <ClipLoader loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
  )
}
