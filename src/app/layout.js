"use client";
import localFont from "next/font/local";
import { useState,useEffect } from "react";
import "./globals.css";
import { usePathname } from 'next/navigation';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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

export default function RootLayout({
  children,
}) {
  const [isAdminPanel, setIsAdminPanel] = useState(true);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsAdminPanel(pathname.includes('/admin'));
  }, [pathname]); 
  return (
    <html lang="en">
      <head>
      <title>Maplocally</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {!isAdminPanel && <Navbar />}
        {children}
        {!isAdminPanel && <Footer />}
      </body>
    </html>
  );
}
