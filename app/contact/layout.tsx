import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Vwindi | Start a Project",
  description: "Get in touch with Vwindi for AI design, web development, or private tutoring inquiries. Let's build something together.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
