import Polygon from "@/assets/partners/polygon.png";
import Arbitrum from "@/assets/partners/arbitrum.png";
import Thirdweb from "@/assets/partners/thirdweb.png";
import Elysium from "@/assets/partners/elysium.png";
import Vulcan from "@/assets/partners/vulcan.png";

import Image from "next/image";
const companies = [
  {
    id: 1,
    src: Polygon,
  },
  {
    id: 2,
    src: Arbitrum,
  },
  {
    id: 3,
    src: Thirdweb,
  },
  {
    id: 4,
    src: Elysium,
  },
  {
    id: 5,
    src: Vulcan,
  },
];

export function Supporters() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TOP PROJECTS
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              {companies.map((company) => (
                <li key={company.id}>
                  <Image
                    src={company.src}
                    className="h-8 w-auto px-2 dark:brightness-0 dark:invert"
                    alt="partners"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
