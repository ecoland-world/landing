import { Package2 } from "lucide-react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import logo from "@/assets/eco-token.png";
import Image from "next/image";
import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const menuLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Games",
    href: "#games",
  },
  {
    label: "Whitepaper",
    href: "https://ecopaper.ecoland.world/",
  },
];
const socialLinks = [
  {
    href: "https://discord.com/invite/ckffrhrywk",
    name: "Discord",
    icon: <SiDiscord className="h-5 w-5" />,
  },
  {
    href: "https://twitter.com/EcoLandWorld",
    name: "Twitter",
    icon: <SiX className="h-5 w-5" />,
  },
  {
    href: "https://t.me/ecoland_news",
    name: "Telegram",
    icon: <SiTelegram className="h-5 w-5" />,
  },
];
function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 z-[49] mx-auto flex max-h-screen w-screen max-w-9xl -translate-x-1/2 flex-col items-center justify-center p-3 opacity-100 transition-opacity lg:p-6">
      <div className="relative z-[900] flex h-16 w-full items-center justify-between rounded-2xl border border-black/5 bg-black/75 px-6 backdrop-blur-lg md:px-4 lg:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} className="h-10 w-10" alt="Ecoland logo" />
          <span className="text-2xl font-bold text-background">Ecoland</span>
        </Link>
        <MainNav menuLinks={menuLinks} socialLinks={socialLinks} />
        <MobileNav menuLinks={menuLinks} socialLinks={socialLinks} />
      </div>
    </header>
  );
}

export default Navbar;
