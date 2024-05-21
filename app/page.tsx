import Image from "next/image";
import Hero from "@/assets/hero1.png";
import { Button } from "../components/ui/button";
import { OrbitingCirclesDemo } from "../components/magicui/orbiting-circles-demo";

import { GameSwiper } from "../components/Swiper/game-swiper";
import { SubscribeForm } from "../components/subscribe-form";
import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import { BentoDemo } from "../components/magicui/bento-grid-demo";
import { Supporters } from "../components/supporters";

export default function Home() {
  return (
    <>
      <div className="relative h-screen max-h-[1024px] w-screen">
        <div className="container relative z-30 flex h-full flex-col justify-between pb-12 pt-32 sm:pb-20 sm:pt-48">
          <h1 className="max-w-[240px] text-5xl font-bold leading-[105%] text-white sm:max-w-lg sm:text-8xl">
            Level Up and Restore the Planet.
          </h1>
          <div className="max-w-md space-y-6">
            <p className="text-xl leading-[120%] sm:text-[28px] text-white">
              Empowering players to make a real-world impact through their
              gaming activities on Ecoland.
            </p>
            <div className="flex gap-4">
              <Button>Start Playing</Button>
              <Button variant="outline">Read Litepaper</Button>
            </div>
          </div>
        </div>
        <Image
          src={Hero}
          alt="Next.js Logo"
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, rerum! Quod accusamus totam veniam maxime quam
                aperiam. Quidem, in dolorem porro dicta velit obcaecati facilis
                laudantium, voluptates atque expedita quibusdam!
                <br />
                <br /> Powered by $ECO
              </p>
            </div>
          </div>
          <OrbitingCirclesDemo />
        </div>
      </section>
      <section className="w-full">
        <div className="container grid grid-cols-1 gap-6 items-center py-12 sm:py-14 md:grid-cols-2 md:py-20 xl:items-center">
          <GameSwiper />
          <div className="-order-1 md:order-last items-between flex-h-full flex max-w-lg grow flex-col gap-4 sm:gap-6 md:gap-16">
            <h1 className="max-w-full text-3xl font-bold leading-[107%] sm:max-w-none sm:text-[60px]">
              Explore Games
            </h1>
            <div className="max-w-md space-y-7 md:space-y-12">
              <p className="leading-[150%] text-new-night-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, rerum! Quod accusamus totam veniam maxime quam
                aperiam. Quidem, in dolorem porro dicta velit obcaecati facilis
                laudantium, voluptates atque expedita quibusdam!
              </p>
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
