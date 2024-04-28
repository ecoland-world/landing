import { Package2 } from "lucide-react";

import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 lg:h-20">
        <Package2 size={24} />
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default Navbar;
