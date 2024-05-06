import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "../ui/button";

function Footer() {
  return (
    <div className="space-y-12 bg-secondary-foreground/10 py-12 md:space-y-14 md:py-20">
      <div className="container relative flex w-full flex-col justify-between gap-14 xl:flex-row">
        <div className="space-y-auto">
          <div>Logo</div>
          <h1 className="bottom-0 mt-auto hidden w-max text-5xl font-bold leading-[120%] md:absolute md:block">
            Players, Unite to Sustain
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-auto space-y-5">
              <p className="font-semibold ">Build</p>
              <div className="space-y-3">
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="/build"
                  target="_self"
                >
                  Build with Treasure
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://docs.treasure.lol/for-game-developers/game-builders-program"
                  target="_blank"
                >
                  Game Builders Program
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://github.com/TreasureProject"
                  target="_blank"
                >
                  Open Source
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeeom1s9R48ZGRXzx5B-MeYahfVa2DoKVBqS8hu63wwLxykpQ/viewform"
                  target="_blank"
                >
                  Apply to Partner
                </a>
              </div>
            </div>
            <div className="flex-auto space-y-5">
              <p className="font-semibold ">Play</p>
              <div className="space-y-3">
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://app.treasure.lol/games"
                  target="_blank"
                >
                  Games
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://app.treasure.lol"
                  target="_blank"
                >
                  Platform
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="/create"
                  target="_self"
                >
                  Creator Program
                </a>
              </div>
            </div>
            <div className="flex-auto space-y-5">
              <p className="font-semibold ">About</p>
              <div className="space-y-3">
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="/about"
                  target="_self"
                >
                  About
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="/team"
                  target="_self"
                >
                  Team
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="/brand-assets"
                  target="_self"
                >
                  Brand Assets
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://docs.treasure.lol/about-treasure/what-is-magic"
                  target="_blank"
                >
                  What is MAGIC
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://treasuredao.substack.com"
                  target="_blank"
                >
                  Newsletter
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://docs.treasure.lol/about-treasure/readme"
                  target="_blank"
                >
                  Documentation
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://forum.treasure.lol"
                  target="_blank"
                >
                  Governance Forum
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://jobs.treasure.lol"
                  target="_blank"
                >
                  Careers
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5  transition-colors "
                  href="https://vote.treasure.lol"
                  target="_blank"
                >
                  Snapshot
                </a>
              </div>
            </div>
          </div>
          <div className="relative bottom-0 right-0 flex flex-col gap-6 md:items-end md:pl-24">
            <div className="w-max space-y-4">
              <Button>Start Playing</Button>
            </div>
            <div className="bottom-0 right-0 flex gap-1.5 xl:absolute">
              <SiDiscord />
              <SiX size={22} />
              <SiTelegram />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col  gap-4 border-t border-blue-500 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <a className="cursor-pointer  " href="/terms-of-service">
              Terms of Service
            </a>
            <a className="cursor-pointer  " href="/privacy-policy">
              Privacy Policy
            </a>
          </div>
          <p className="">© 2024 Ecoland World</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
