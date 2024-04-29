import { Package2 } from "lucide-react";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 z-[49] mx-auto flex max-h-screen w-screen max-w-9xl -translate-x-1/2 flex-col items-center justify-center p-3 opacity-100 transition-opacity lg:p-6">
      <div className="relative z-[900] flex h-16 w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-6 backdrop-blur-lg md:px-4 lg:h-20">
        <Package2 size={24} color="white" />
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Navbar;
