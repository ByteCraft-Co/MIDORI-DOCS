import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MIDORI Language",
  description: "MIDORI official documentation and distribution site.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://midori-docs.vercel.app"),
  icons: {
    icon: "/assets/midori-logo.ico",
    shortcut: "/assets/midori-logo.ico",
    apple: "/assets/midori-logo.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-body">
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
