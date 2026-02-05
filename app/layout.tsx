﻿"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import AnimatedBackground from "@/components/AnimatedBackground";
import { LanguageProvider } from "@/components/language";
import LanguageFloatingButton from "@/components/LanguageFloatingButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<"pending" | "loading" | "ready">(
    "pending"
  );

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("loaderShown") === "done";

    if (hasSeenLoader) {
      const readyTimer = setTimeout(() => {
        setStatus("ready");
      }, 0);

      return () => clearTimeout(readyTimer);
    }

    const startTimer = setTimeout(() => {
      setStatus("loading");
    }, 0);

    const timer = setTimeout(() => {
      sessionStorage.setItem("loaderShown", "done");
      setStatus("ready");
    }, 2200);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, []);

  if (status === "pending") {
    return (
      <html lang="pt-BR">
        <body className="bg-[#0B0B0E] text-white overflow-x-hidden" />
      </html>
    );
  }

  return (
    <html lang="pt-BR">
      <body className="bg-[#0B0B0E] text-white overflow-x-hidden">
        <LanguageProvider>
          <AnimatePresence mode="wait">
            {status === "loading" && <Loader key="loader" />}
          </AnimatePresence>

          {status === "ready" && (
            <>
            <AnimatedBackground />
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
            <LanguageFloatingButton />
            </>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
