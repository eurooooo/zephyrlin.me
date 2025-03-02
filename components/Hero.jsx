import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <p className="mb-6 font-semibold">
        <span className="text-transparent sm:bg-linear-to-r to-foreground bg-linear-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          Hi, I&apos;m Zephyr
        </span>
      </p>
      <div className="h-10 mb-8 sm:mb-10">
        <HeroAnimation text1={"<Developer />"} text2="<Student />" />
      </div>
      <p className="mb-8 text-xl text-transparent sm:mb-10 sm:text-[26px] bg-linear-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        #Zephyr #Zhihao #智昊
      </p>

      <p className="mb-4 text-sm text-transparent sm:mb-6 sm:text-base bg-linear-to-b to-muted-foreground from-foreground bg-clip-text">
        I&apos;m an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. Passionate about developing applications
        that merge purpose with aesthetics.
      </p>

      <Socials />
    </div>
  );
}
