import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import Token from "@/assets/eco-token.png";
import Element1 from "@/assets/elements/element1.png";
import Element2 from "@/assets/elements/element2.png";
import Element3 from "@/assets/elements/element3.png";
import Element4 from "@/assets/elements/element4.png";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-green-500 to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        $ECO
      </span> */}
      <Image
        src={Token}
        alt="token"
        className="h-[80px] w-[80px]"
        priority={true}
      />

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Image src={Element1} alt="Clio" className="h-full w-full" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src={Element2} alt="box" className="h-full w-full" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Image src={Element3} alt="hat" className="h-full w-full" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Image src={Element4} alt="shirt" className="h-full w-full" />
      </OrbitingCircles>
    </div>
  );
}
