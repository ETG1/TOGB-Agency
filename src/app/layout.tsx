import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOGB WebInk Studio - Web Development & Printing Services",
  description: "Professional web development and printing services for your business. We create stunning websites and high-quality print materials to help your brand stand out.",
  keywords: "web development, printing services, digital agency, web design, business cards, flyers, brochures, SEO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-white dark:bg-zinc-900`}>
        <ThemeProvider>
          <div className="relative flex flex-col min-h-screen bg-white dark:bg-zinc-900">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <ThemeSwitch />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
