import Link from "next/link";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { SiDiscord, SiX } from "@icons-pack/react-simple-icons";

function MainNav() {
  return (
    <div className="hidden md:flex w-full justify-between ml-4">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Components
        </Link>
        <Link
          href="/themes"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Examples
        </Link>
        <Link
          href="/blocks"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Blocks
        </Link>
        <Link
          href="#"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-4">
          <SiDiscord size={20} />
          <SiX size={18} />
        </div>
        <Button>Lets Play</Button>
      </div>
    </div>
  );
}

export { MainNav };
