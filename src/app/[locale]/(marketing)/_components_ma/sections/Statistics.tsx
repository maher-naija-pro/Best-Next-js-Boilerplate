import { stats } from "@/texts-and-menues/stats"
import { statsProps } from "@/texts-and-menues/stats"

const Statistics = () => {
  return (
    <section className="py-10 mt-10" id="statistics">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Statistics
