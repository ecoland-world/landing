import Link from "next/link";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type HeaderMenuLink = {
  label: string;
  href: string;
};

interface SocialLink {
  href: string;
  name: string;
  icon: React.ReactNode;
}
function MainNav({
  menuLinks,
  socialLinks,
}: {
  menuLinks: HeaderMenuLink[];
  socialLinks: SocialLink[];
}) {
  return (
    <div className="hidden md:flex w-full justify-between ml-10 text-background">
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
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="hover:text-gray-200 fill-secondary hover:fill-gray-900"
            >
              {social.icon}
              <span className="sr-only">{social.name}</span>
            </Link>
          ))}
        </div>
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <Button className="cursor-not-allowed opacity-50">
                Let&apos;s Play
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming Soon!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export { MainNav };
