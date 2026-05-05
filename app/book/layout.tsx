import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call | Vwindi",
  description: "Schedule a 30-minute introduction call with Vwindi to discuss your project and how we can help you scale.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
