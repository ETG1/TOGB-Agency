import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { generateMetadata } from "@/components/Seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateMetadata({
  title: "TOGB | Freelance Web Design & Printing SaaS",
  description:
    "Professional web design and printing services for businesses. Custom websites, logos, and print materials to boost your brand presence.",
  keywords: [
    "web design",
    "printing",
    "SaaS",
    "freelance",
    "logo design",
    "branding",
  ],
  ogImage: "/home-og-image.jpg", 
  ogType: "website",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-white dark:bg-zinc-900`}>
        <ThemeProvider>
          <div className="relative flex flex-col min-h-screen bg-white dark:bg-zinc-900">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ThemeSwitch />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
