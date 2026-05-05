import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vwindi Resources | Tutoring & Insights",
  description: "Access our expert tutoring showreels, tech insights, and resources to help you master development and design.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
