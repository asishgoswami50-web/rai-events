"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu, X, Lock, Phone, Gamepad2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Define your menu links here
 const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Activities", href: "/activities" }, // Updated Name and Link
    { name: "Glimpses", href: "/gallery" },
    { name: "Contact Us", href: "/contact-info" },
  ];


  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full z-[100] bg-black border-b border-[#FFD700]/30 py-3 px-6 shadow-2xl">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            
            {/* LOGO AREA */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Rai Events Logo" className="h-14 w-auto object-contain" />
              <span className="hidden lg:block text-[#FFD700] text-xl font-black italic tracking-tighter">
                RAI EVENTS
              </span>
            </Link>
            
            {/* DESKTOP MENU (Hidden on small screens) */}
            <div className="hidden lg:flex gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-white hover:text-[#FFD700] font-bold uppercase text-[13px] tracking-wide transition"
                >
                  {link.name}
                </Link>
              ))}

              {/* ADMIN LOGIN BUTTON (Small Lock Icon) */}
              <Link href="/login" className="text-gray-400 hover:text-white transition" title="Admin Login">
                <Lock size={18} />
              </Link>

              {/* BOOK NOW BUTTON (Highlighted) */}
              <Link href="/contact" className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-black uppercase text-xs tracking-wider hover:bg-white transition hover:scale-105">
                Book Now
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button className="lg:hidden text-[#FFD700]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-[#FFD700] p-6 flex flex-col gap-6 animate-in slide-in-from-top">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-black uppercase border-b border-gray-800 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 text-lg font-bold uppercase flex items-center gap-2"
              >
                <Lock size={20}/> Admin Login
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-[#FFD700] text-black text-center py-4 rounded-xl font-black uppercase"
              >
                Book Now
              </Link>
            </div>
          )}
        </nav>

        {/* PAGE CONTENT */}
        <main className="pt-24 bg-black min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}