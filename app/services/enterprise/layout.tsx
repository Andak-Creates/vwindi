import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Vwindi",
  description: "Scalable digital transformation for large-scale organizations. Robust, secure, and future-proof software engineering.",
};

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
