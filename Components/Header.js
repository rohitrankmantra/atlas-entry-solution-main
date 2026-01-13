"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  // Hide Topbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideTopBar(true); // Scroll down → hide
      } else {
        setHideTopBar(false); // Scroll up → show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* ---------- TOP BAR (Hidden on mobile) ---------- */}
      <div
        className={`hidden md:flex justify-between items-center px-6 py-2 bg-[#1C398E] text-white transition-all duration-300 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:+35679605019" className="flex items-center gap-1">
            <Phone size={16} />
           +35679605019
          </a>
          <a
            href="mailto:atlas.solutionslda@gmail.com"
            className="flex items-center gap-1"
          >
            <Mail size={16} /> atlas.solutionslda@gmail.com
          </a>
        </div>

     {/* RIGHT — SOCIAL ICONS (DESKTOP) */}
<div className="flex items-center gap-4">
  <a
    href="https://www.facebook.com/profile.php?id=61585349291551"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-gray-300 transition-colors"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://instagram.com/YOURPAGE"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-gray-300 transition-colors"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://linkedin.com/company/YOURPAGE"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-gray-300 transition-colors"
  >
    <Linkedin size={18} />
  </a>
</div>

      </div>

      {/* ---------- MAIN HEADER (LOGO + MENU) ---------- */}
      <div
        className={`w-full md:bg-white shadow-sm transition-all duration-300 ${
          hideTopBar ? "top-0" : "md:top-8"
        } fixed`}
      >
        <div className="max-w-7xl bg-white mx-auto px-6 flex justify-between items-center py-1">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Assets/atlas-header-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="md:h-20 md:w-36 h-14 w-20"
            />
          </Link>
          

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Process", href: "/process" },
              { name: "Testimonial", href: "/testimonial" },
              { name: "Contact", href: "/contact-us" },
               { name: "Reviews", href: "/reviews" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-medium text-gray-700 hover:text-[#1C398E]
                 after:absolute after:left-0 after:-bottom-2
                 after:h-[3px] after:w-0 after:bg-[#1C398E]
                 after:transition-all after:duration-300
                 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#1C398E]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <div className="md:hidden bg-[#1C398E] text-gray-100 shadow-lg px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/process" onClick={() => setOpen(false)}>
              Process
            </Link>
            <Link href="/testimonial" onClick={() => setOpen(false)}>
              Testimonial
            </Link>
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              Contact
            </Link>
       <div className="flex items-center gap-4 mt-2">
  <a href="https://www.facebook.com/profile.php?id=61585349291551" target="_blank" rel="noopener noreferrer">
    <Facebook size={18} />
  </a>
  <a href="https://instagram.com/YOURPAGE" target="_blank" rel="noopener noreferrer">
    <Instagram size={18} />
  </a>
  <a href="https://linkedin.com/company/YOURPAGE" target="_blank" rel="noopener noreferrer">
    <Linkedin size={18} />
  </a>
</div>

          </div>
        )}
      </div>
    </header>
  );
}
