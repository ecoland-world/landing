import { Menu, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { SiDiscord, SiX } from "@icons-pack/react-simple-icons";

type HeaderMenuLink = {
  label: string;
  href: string;
};
function MobileNav({ menuLinks }: { menuLinks: HeaderMenuLink[] }) {
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
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
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
            <SiDiscord size={20} />
            <SiX size={18} />
          </div>
          <Button>Lets Play</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { MobileNav };
