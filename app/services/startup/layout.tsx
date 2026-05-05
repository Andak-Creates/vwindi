import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Acceleration | Vwindi",
  description: "Helping startups ship fast and scale effectively. Rapid prototyping, MVP development, and strategic engineering partnerships.",
};

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
