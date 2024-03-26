import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, bsc } from "wagmi/chains";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Perpy",
  description: "Perpy",
  url: process.env.NEXTAUTH_URL,
  icons: ["/public/images/logo/perpy.svg"],
};

const chains = [arbitrum, bsc] as const;
export const config = getDefaultConfig({
  chains,
  projectId,
  appName: metadata.name,
  appDescription: metadata.description,
  appIcon: metadata.icons[0],
  appUrl: metadata.url,
  ssr: false,
});
