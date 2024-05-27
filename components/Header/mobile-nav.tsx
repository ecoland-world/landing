import { Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import Token from "@/assets/eco-token.png";
import { Separator } from "../ui/separator";
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

type SocialLink = {
  href: string;
  name: string;
  icon: React.ReactNode;
};
function MobileNav({
  menuLinks,
  socialLinks,
}: {
  menuLinks: HeaderMenuLink[];
  socialLinks: SocialLink[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Token}
              className="h-8 w-8 text-primary"
              alt="Ecoland logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ecoland
            </span>
          </Link>
          {menuLinks.map(({ label, href }) => {
            return (
              <Link href={href} passHref key={href}>
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-black-500 hover:text-gray-600 fill-black-500 hover:fill-gray-900"
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
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
