"use client"; // Client-side kodda ishlash uchun

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/reduxProvider";
import Script from "next/script";
import { metadata } from "./metadata"; // metadata import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [bgColor, setBgColor] = useState<string>("#F0E8E8");
  const [textColor, setTextColor] = useState<string>("#000");

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp?.themeParams) {
      const { bg_color, text_color } = window.Telegram.WebApp.themeParams;
      setBgColor(bg_color || "#F0E8E8");
      setTextColor(text_color || "#000");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-montserrat`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <ReduxProvider>
          <div className="max-w-[1124px] mx-auto px-4">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
