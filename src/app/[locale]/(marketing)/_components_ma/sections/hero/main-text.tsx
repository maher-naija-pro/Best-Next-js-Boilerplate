import { useTranslations } from "next-intl"

export const MainText = () => {
  const text = useTranslations("Herotext")
  const t = useTranslations("Platform")
  return (
    <div className=" text-center inline  ">
      <div className="text-5xl  sm:mt-20  font-bold leading-snug">
        {" "}
        <h1 className="inline">
          <span className=" inline bg-gradient-to-r from-[#c20037] to-[#5eacff] text-transparent bg-clip-text">
            {t("title")}
          </span>{" "}
        </h1>{" "}
        {text("title")}{" "}
        <h2 className="inline">
          <span className="inline  bg-gradient-to-r from-[#4b91dd] via-[#1fc0f1] to-[#61DAFB] text-transparent bg-clip-text">
            {text("titlegradient")}
          </span>{" "}
        </h2>
        <div className=" text-xl font-light dark:text-slate-50 mt-4 ">{text("text")}</div>{" "}
      </div>
    </div>
  )
}
