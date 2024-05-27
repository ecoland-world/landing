import Image from "next/image";
import Hero from "@/assets/hero1.png";
import Splash from "@/assets/splash.jpg";
import { Button } from "../components/ui/button";
import { OrbitingCirclesDemo } from "../components/magicui/orbiting-circles-demo";
import { GameSwiper } from "../components/Swiper/game-swiper";
import { BentoDemo } from "../components/magicui/bento-grid-demo";
import { Supporters } from "../components/supporters";
import { Gamepad2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen max-h-[1024px] w-screen">
        <div className="container relative z-30 flex h-full flex-col justify-between pb-12 pt-32 sm:pb-20 sm:pt-48">
          <h1 className="max-w-[240px] text-5xl font-bold leading-[105%] text-white sm:max-w-lg sm:text-8xl">
            Gather your army and save Ecoland
          </h1>
          <div className="max-w-md space-y-6">
            <p className="text-xl leading-[120%] sm:text-[28px] text-white">
              Dive into a universe of games with a cutting-edge economy, where
              $ECO tokens and NFTs power a seamless, rewarding interconnected
              adventure.
            </p>
            <div className="flex gap-4">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Button className="cursor-not-allowed opacity-50">
                      Start Playing
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button asChild variant={"outline"}>
                <Link href="https://ecopaper.ecoland.world/">
                  Read Whitepaper
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={Hero}
          alt="Hero image"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <Supporters />
      <section className="w-full">
        <div className="container grid grid-cols-1 items-center py-12 sm:py-14 md:grid-cols-2 md:py-20 xl:items-center">
          <div className="items-between flex-h-full flex max-w-lg grow flex-col gap-4 sm:gap-6 md:gap-16 ">
            <h1 className="max-w-full text-3xl font-bold leading-[107%] sm:max-w-none sm:text-[60px]">
              Play Green, Earn Clean
            </h1>
            <div className="max-w-md space-y-7 md:space-y-12">
              <p className="leading-[150%] text-new-night-700">
                EcoLand is a gaming platform developed on the <b>Elysium </b>
                blockchain, offering a variety of fun and engaging blockchain
                games, all created by our team. Plus, every game supports
                real-world sustainability efforts, making your playtime
                impactful.
                <br />
                <br /> Powered by <b>$ECO</b>
              </p>
            </div>
          </div>
          <OrbitingCirclesDemo />
        </div>
      </section>
      <section className="w-full" id="games">
        <div className="container grid grid-cols-1 gap-6 items-center py-12 sm:py-14 md:grid-cols-2 md:py-20 xl:items-center">
          <GameSwiper />
          <div className="-order-1 md:order-last items-between flex-h-full flex max-w-lg grow flex-col gap-4 sm:gap-6 md:gap-16">
            <h1 className="max-w-full text-3xl font-bold leading-[107%] sm:max-w-none sm:text-[60px]">
              Explore Games
            </h1>
            <div className="max-w-md space-y-7 md:space-y-12">
              <p className="leading-[150%] text-new-night-700">
                Using the same $ECO token and NFTs across all our games, we
                ensure a seamless and interconnected experience, as well as
                long-term value and utility. Earn rewards, trade NFTs, and enjoy
                a cohesive gaming economy.
              </p>
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Button className="cursor-not-allowed opacity-50">
                      Play Games
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={50}>
                    <p>Coming Soon!</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-12 mb-12">
          <h1 className="max-w-full text-xl text-center font-bold leading-[107%] sm:max-w-none sm:text-[60px] mb-8">
            Features
          </h1>
          <BentoDemo />
        </div>
      </section>
    </>
  );
}
