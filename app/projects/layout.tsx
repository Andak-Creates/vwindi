import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vwindi Projects | Our Work",
  description: "Explore our portfolio of scalable web apps, mobile platforms, and AI-driven design projects built by Vwindi.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
