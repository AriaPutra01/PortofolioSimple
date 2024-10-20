import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import Navbar from "../components/Navbar";
import StairsTransition from "@/components/StairsTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Contoh Portofolio",
  description: "This is my portofolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-auto overflow-x-hidden`}>
        <Navbar />
        <StairsTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
