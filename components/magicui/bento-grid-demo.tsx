import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Users, Coins, Leaf, ArrowLeftRight, Blocks } from "lucide-react";
const features = [
  {
    Icon: ArrowLeftRight,
    name: "Interoperable tokens",
    description:
      "NFTs and $ECO are usable across all current and future games on the EcoLand platform, ensuring long-term value and utility for players",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Blocks,
    name: "Agile Development",
    description:
      "Ensures continuous delivery of fresh content, keeping the platform engaging and dynamic",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Users,
    name: "Experienced Team",
    description:
      "A robust foundation from a team with deep expertise in gaming and blockchain technologies",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Coins,
    name: "Dual-Token Economy",
    description:
      "$ECO and the blockchain's native tokens, used on the marketplace for trading the NFTs",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Leaf,
    name: "Environmental Contributions",
    description:
      "Direct linkage between gameplay achievements and real-world environmental benefits",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
