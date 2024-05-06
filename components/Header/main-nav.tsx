import Link from "next/link";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";

type HeaderMenuLink = {
  label: string;
  href: string;
};
function MainNav({ menuLinks }: { menuLinks: HeaderMenuLink[] }) {
  return (
    <div className="hidden md:flex w-full justify-between ml-10 text-white">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {menuLinks.map(({ label, href }) => {
          return (
            <Link href={href} passHref key={href}>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-4">
          <SiDiscord size={20} />
          <SiX size={18} />
          <SiTelegram size={20} />
        </div>
        <Button>Lets Play</Button>
      </div>
    </div>
  );
}

export { MainNav };
