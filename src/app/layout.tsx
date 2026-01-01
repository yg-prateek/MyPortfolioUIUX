import type { Metadata } from "next";
import { Inter, Syne, Patrick_Hand } from "next/font/google"; // Using Syne for display/storytelling
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { LoadingWrapper } from "@/components/layout/LoadingWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Portfolio",
  description: "A storytelling portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${patrickHand.variable} antialiased bg-background text-foreground font-sans`}
      >
        <LoadingWrapper>
          <Navbar />
          {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
