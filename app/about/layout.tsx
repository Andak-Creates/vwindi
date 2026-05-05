import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vwindi | Our DNA & Team",
  description: "Learn about Vwindi, a fullstack engineering agency and teaching institution dedicated to building the tools of tomorrow.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
