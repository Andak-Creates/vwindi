import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Development | Vwindi",
  description: "Fullstack engineering for scalable web and mobile applications. Built for performance, security, and growth.",
};

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
