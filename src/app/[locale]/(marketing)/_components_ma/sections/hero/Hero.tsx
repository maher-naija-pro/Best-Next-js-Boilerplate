import { HeroButton } from "@/app/[locale]/(marketing)/_components_ma/sections/hero/HeroButton"
import { HeroCards } from "@/app/[locale]/(marketing)/_components_ma/sections/hero/HeroCards"
import { MainText } from "@/app/[locale]/(marketing)/_components_ma/sections/hero/main-text"

const Hero = () => {
  return (
    <section className="container  grid lg:grid-cols-2 mt-8 sm:mt-24">
      <div>
        <MainText />
        <HeroButton />
      </div>
      {/* Hero cards sections */}
      <div className=" translateFromRight   invisible md:visible  text-center lg:text-start">
        <HeroCards />
      </div>
    </section>
  )
}

export default Hero
