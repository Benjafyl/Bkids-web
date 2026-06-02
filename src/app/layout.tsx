import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { ComingSoon } from "@/components/ComingSoon";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { comingSoon } from "@/data/site";
import { buildMetadata } from "@/data/seo";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
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
