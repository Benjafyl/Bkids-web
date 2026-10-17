import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { comingSoon } from "@/data/site";
import { buildMetadata } from "@/data/seo";
import "./globals.css";

const baloo = localFont({
  src: "./fonts/Baloo2-Variable.woff2",
  variable: "--font-baloo",
  weight: "600 800",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/Nunito-Variable.woff2",
  variable: "--font-nunito",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata("/"),
  metadataBase: new URL("https://bkids.cl"),
  applicationName: "BKids",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a72ce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${baloo.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <WebsiteJsonLd />
        <LocalBusinessJsonLd />
        {comingSoon.enabled ? (
          <ComingSoon />
        ) : (
          <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
          </>
        )}
      </body>
    </html>
  );
}
