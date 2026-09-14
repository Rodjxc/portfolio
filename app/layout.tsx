import type { Metadata } from "next";
import "./lib/styles/globals.css";
import Navbar from "./lib/components/navbar/Navbar";
import { Cursor } from "./lib/components/common/Cursor";
import { Footer } from "./lib/components/common/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rod Jimeno | Front-end Developer",
    template: "%s | Rod Jimeno",
  },
  description:
    "Front-end developer based in Oslo. Previously a beer sommelier, now building web applications with React and Next.js.",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-background text-primary antialiased">
        <Cursor />
        <Navbar />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
