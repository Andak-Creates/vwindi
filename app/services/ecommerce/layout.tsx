import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Solutions | Vwindi",
  description: "High-performance e-commerce platforms built for conversion and scale. Personalized shopping experiences powered by modern tech.",
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
