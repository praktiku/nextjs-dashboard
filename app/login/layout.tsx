import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
