import Image from "next/image";
import Hero from "@/assets/hero1.png";
import Hero2 from "@/assets/hero2.png";

export default function Home() {
  return (
    <main className="relative h-screen max-h-[1024px] w-screen">
      <div className="container relative z-30 flex h-full flex-col justify-between pb-12 pt-32 sm:pb-20 sm:pt-48">
        <h1 className="max-w-[240px] text-5xl font-bold leading-[105%] text-new-night-100 sm:max-w-lg sm:text-8xl">
          The magic of play.
        </h1>
        <div className="max-w-md space-y-6">
          <p className="text-xl leading-[120%] sm:text-[28px]">
            Treasure is building a gaming and entertainment powerhouse, built
            and owned by all.
          </p>
          <div className="flex gap-4">
            <a
              color="ruby"
              href="https://app.treasure.lol"
              rel="noopender noreferrer"
              target="_blank"
              className="flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed bg-new-ruby-900 border border-new-ruby-800 text-new-honey-100 hover:bg-new-ruby-800 hover:border-new-ruby-700 hover:text-new-honey-100"
            >
              Start Playing
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4"
              >
                <path
                  d="M5.83337 3.49992H3.50004C2.85571 3.49992 2.33337 4.02225 2.33337 4.66659V10.4999C2.33337 11.1443 2.85571 11.6666 3.50004 11.6666H9.33337C9.97771 11.6666 10.5 11.1443 10.5 10.4999V8.16659M8.16671 2.33325H11.6667M11.6667 2.33325V5.83325M11.6667 2.33325L5.83337 8.16659"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
            <a
              color="honey"
              href="https://go.treasure.lol/litepaper"
              rel="noopender noreferrer"
              target="_blank"
              className="flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed bg-new-honey-800 text-new-night-1200"
            >
              Read Litepaper
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4"
              >
                <path
                  d="M5.83337 3.49992H3.50004C2.85571 3.49992 2.33337 4.02225 2.33337 4.66659V10.4999C2.33337 11.1443 2.85571 11.6666 3.50004 11.6666H9.33337C9.97771 11.6666 10.5 11.1443 10.5 10.4999V8.16659M8.16671 2.33325H11.6667M11.6667 2.33325V5.83325M11.6667 2.33325L5.83337 8.16659"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Image
        src={Hero2}
        alt="Next.js Logo"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </main>
  );
}
