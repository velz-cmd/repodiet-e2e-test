import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "@/side-effects/register";

export const metadata: Metadata = {
  title: "RepoDiet E2E Fixture",
  description: "Controlled repository for testing real RepoDiet repairs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
