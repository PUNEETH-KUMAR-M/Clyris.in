"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">Clyris Technologies</span>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="block w-6 h-0.5 bg-blue-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-600 mb-1"></span>
          <span className="block w-6 h-0.5 bg-blue-600"></span>
        </button>
        {/* Nav links */}
        <ul className="hidden sm:flex gap-6 text-base font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 px-6 pb-4 bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-gray-800 shadow-md animate-fade-in">
          <li><a href="#home" className="block py-2 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" className="block py-2 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#about" className="block py-2 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#contact" className="block py-2 hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
} 