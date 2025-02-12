"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/Button";
import { QuoteForm } from "../QuoteForm";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Services", href: "/services", icon: BriefcaseIcon },
  { name: "Portfolio", href: "/portfolio", icon: FolderIcon },
  { name: "About", href: "/about", icon: UserIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed inset-x-0 z-50">
      {/* Logo - Centered on mobile, left-aligned on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center md:justify-between justify-center">
          <Link
            href="/"
            className={cn(
              "flex-shrink-0 flex items-center transition-all duration-300",
              isMobile &&
                isScrolled &&
                "px-6 py-2 rounded-full bg-white/10 dark:bg-zinc-800/50 backdrop-blur-md"
            )}
          >
            <Image
              src={"/logo.png"}
              alt="logo"
              width={30}
              height={30}
              className="mr-2 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
              TOGB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-3 border border-gray-200 dark:border-gray-800 dark:bg-slate-950/80 bg-white backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {navigation.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                      "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
                      isActive &&
                        "bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white"
                    )}
                  >
                    <span className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navLamp"
                        className="absolute inset-0 w-full bg-gray-100 dark:bg-zinc-800 rounded-full -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 dark:bg-violet-600 rounded-t-full">
                          <div className="absolute w-12 h-6 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Get Quote Button - Now opens a dialog */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 transition-colors rounded-full">
                  Quotation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] dark:bg-zinc-900 dark:border-zinc-700">
                <QuoteForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Bottom Fixed */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4 backdrop-blur-md py-2 px-4 rounded-full bg-white/10 dark:bg-zinc-800/50 shadow-lg">
          {navigation.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className="relative flex flex-col items-center"
              >
                <div
                  className={cn(
                    "p-2 rounded-full transition-all duration-300 relative",
                    "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
                    isActive && "bg-white/10 dark:bg-zinc-700/50 text-gray-900 dark:text-white"
                  )}
                >
                  <item.icon className="h-6 w-6" />
                  {isActive && (
                    <motion.div
                      layoutId="mobileLamp"
                      className="absolute inset-0 w-full h-full bg-white/10 dark:bg-zinc-700/50 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-600 dark:bg-violet-600 rounded-t-full">
                        <div className="absolute w-8 h-4 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-md -top-2 -left-1" />
                        <div className="absolute w-6 h-4 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-blue-600/20 dark:bg-violet-600/20 rounded-full blur-sm top-0 left-1" />
                      </div>
                    </motion.div>
                  )}
                </div>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs font-medium mt-1.5 text-gray-900 dark:text-white"
                  >
                    {item.name}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
