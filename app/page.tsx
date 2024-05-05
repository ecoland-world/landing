import Image from "next/image";
import Hero from "@/assets/hero1.png";
import Hero2 from "@/assets/hero2.png";
import { Button } from "../components/ui/button";

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
      <div className="w-full">
        <div className="container flex flex-col justify-between gap-10 py-12 sm:py-14 md:flex-row md:gap-16 md:py-20 xl:items-center">
          <div className="items-between flex-h-full flex max-w-lg grow flex-col gap-4 sm:gap-6 md:gap-16 ">
            <h1 className="max-w-full  text-3xl font-bold leading-[107%] text-ruby-900 sm:max-w-none  sm:text-[60px]">
              Play Green, Earn Clean
            </h1>
            <p className="font-semibold uppercase leading-[150%] text-ruby-900">
              Powered by $ECO
            </p>
          </div>
          <div className="max-w-md space-y-7 md:space-y-12">
            <p className="leading-[150%] text-new-night-700">
              We are shaping a future where developers, creators, and players
              can build new experiences together. Where you can truly own your
              assets. And share in the collective growth of our ecosystem.
              <br />
              <br /> All made possible by the blockchain.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
