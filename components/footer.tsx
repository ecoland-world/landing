import { SiDiscord, SiTelegram, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Token from "@/assets/eco-token.png";
import { SubscribeForm } from "./subscribe-form";

const footerNavs = [
  {
    label: "About",
    items: [
      {
        href: "/whitepaper",
        name: "Whitepaper",
      },
      {
        href: "/games",
        name: "Games",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        href: "https://discord.com/invite/ckffrhrywk",
        name: "Discord",
      },
      {
        href: "https://twitter.com/EcoLandWorld",
        name: "Twitter",
      },
      {
        href: "https://t.me/ecoland_news",
        name: "Telegram",
      },
      {
        href: "mailto:hello@ecoland.world",
        name: "Email",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },

      {
        href: "/privacy",
        name: "Privacy",
      },
    ],
  },
];

const footerSocials = [
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
function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2 bg-secondary">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
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
            <p className="max-w-xs">Level Up and Go Green</p>
            <SubscribeForm />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-muted hover:text-gray-600 duration-200 font-[450] text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
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
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              Ecoland
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
