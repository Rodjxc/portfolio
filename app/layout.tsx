import type { Metadata } from "next";
import "./lib/styles/globals.css";
import Navbar from "./lib/components/navbar/Navbar";
import { Cursor } from "./lib/components/common/Cursor";
import { Footer } from "./lib/components/common/Footer";
import { MotionProvider } from "./lib/components/common/MotionProvider";

export const metadata: Metadata = {
  title: {
    default: "Rod Jimeno | Senior Front-end Developer",
    template: "%s | Rod Jimeno",
  },
  description:
    "Senior front-end developer in Oslo building data-heavy products with React, Next.js and TypeScript. Former beer sommelier.",
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
        <MotionProvider>
          <Cursor />
          <Navbar />
          <main id="top" className="min-h-screen overflow-x-clip pt-24">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
