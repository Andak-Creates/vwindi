import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Design Services | Vwindi",
  description: "Expert AI-powered design services. We build stunning interfaces and brand identities with human creativity and AI efficiency.",
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
