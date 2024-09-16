import { ModeToggle } from "@/components/ModeToggle"
import { HomeButton } from "@/components/buttons/home-button"

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="   ">
        {" "}
        <HomeButton />
        <main className="mt-4 mb-4 ">
          {children}
          <ModeToggle />
        </main>
      </div>
    </>
  )
}
