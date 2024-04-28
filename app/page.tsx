import { ConnectButton } from "@/lib/thirdweb";
import { client } from "../lib/tw-client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectButton
        client={client}
        appMetadata={{
          name: "Ecoland",
          url: "https://ecoland.world",
        }}
      />
    </main>
  );
}
