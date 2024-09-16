import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div className=" hover:opacity-80 hover:scale-95  items-center   flex  gap-4">
      <img src="/rocket-red-50.svg" alt="Logo" width="50" height="50" />
      <p className="text-lg mt-2 font-extrabold break-normal">Your SaaS </p>{" "}
    </div>
  )
}
