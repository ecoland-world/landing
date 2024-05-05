function Footer() {
  return (
    <div className="space-y-12 bg-new-night-1200 py-12 md:space-y-14 md:py-20">
      <div className="container relative flex w-full flex-col justify-between gap-14 xl:flex-row">
        <div className="space-y-auto">
          <div>Logo</div>
          <h1 className="bottom-0 mt-auto hidden w-max text-5xl font-bold leading-[120%] md:absolute md:block">
            The magic <br /> of play.
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-auto space-y-5">
              <p className="font-semibold text-new-night-100">Build</p>
              <div className="space-y-3">
                <a
                  className="flex cursor-pointer items-center gap-1.5 text-new-night-400 transition-colors hover:text-new-night-100"
                  href="/build"
                  target="_self"
                >
                  Build with Treasure
                </a>
                <a
                  className="flex cursor-pointer items-center gap-1.5 text-new-night-400 transition-colors hover:text-new-night-100"
                  href="https://docs.treasure.lol/for-game-developers/game-builders-program"
                  target="_blank"
                >
                  Game Builders Program
                </a>
                <a
                  className="flex cursor-pointer items-center gap-1.5 text-new-night-400 transition-colors hover:text-new-night-100"
                  href="https://github.com/TreasureProject"
                  target="_blank"
                >
                  Open Source
                </a>
                <a
                  className=" flex cursor-pointer items-center gap-1.5 text-new-night-400 transition-colors hover:text-new-night-100"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeeom1s9R48ZGRXzx5B-MeYahfVa2DoKVBqS8hu63wwLxykpQ/viewform"
                  target="_blank"
                >
                  Apply to Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col  gap-4 border-t border-new-night-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <a className="cursor-pointer" href="/terms-of-service">
              Terms of Service
            </a>
            <a className="cursor-pointer" href="/privacy-policy">
              Privacy Policy
            </a>
          </div>
          <p className="text-new-night-500">© 2024 Ecoland World</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
