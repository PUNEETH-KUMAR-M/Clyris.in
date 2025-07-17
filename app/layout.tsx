import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clyris Technologies",
  description: "Empowering Innovation: 3D Printing, Drones,Custom Projects IoT, Web, and More. Clyris Technologies offers 3D printing, CAD design, custom projects, drone building, web development, IoT kits, and import/export services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Clyris Technologies</span>
            <ul className="flex gap-6 text-base font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
