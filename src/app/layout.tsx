import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Filters from "@/components/ui/Filters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick & Morty App",
  description: "Rick & Morty Fan Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex w-full gap-4 p-4">
        <div className="flex-shrink-0 w-full max-w-[30%]">
          <Filters />
        </div>
          <div className="flex-1">
            {children}
          </div>

        </main>

        <Footer />
      </body>
    </html>
  );
}