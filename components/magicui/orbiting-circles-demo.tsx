import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";
import Clio from "@/assets/clio.png";
import Box from "@/assets/box.png";
import Hat from "@/assets/hat.png";
import Shirt from "@/assets/shirt.png";
import Token from "@/assets/eco-token.png";

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
        <Image src={Clio} alt="Clio" className="h-full w-full" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Image src={Box} alt="box" className="h-full w-full" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Image src={Hat} alt="hat" className="h-full w-full" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Image src={Shirt} alt="shirt" className="h-full w-full" />
      </OrbitingCircles>
    </div>
  );
}
