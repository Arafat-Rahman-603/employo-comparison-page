"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 transition-all duration-300">
      <div className="max-w-[1240px] mx-auto">
        <div className="backdrop-blur-md bg-black/80 border border-white/30 rounded-full h-[76px] sm:h-[84px] px-6 sm:px-8 flex items-center justify-between shadow-2xl shadow-black/50">
          {/* Brand Logo */}
          <div className="flex items-center gap-6 sm:pr-8 sm:border-r sm:border-white/20">
            <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 pl-8">
            <Link
              href="https://employoapp.com/product"
              className="text-white/80 hover:text-[#2674BC] transition-colors font-medium text-[16px]"
            >
              Product
            </Link>
            <Link
              href="https://employoapp.com/blog"
              className="text-white/80 hover:text-[#2674BC] transition-colors font-medium text-[16px]"
            >
              Blog
            </Link>
            <Link
              href="https://employoapp.com/resources"
              className="text-white/80 hover:text-[#2674BC] transition-colors font-medium text-[16px]"
            >
              Resources
            </Link>
            <Link
              href="https://employoapp.com/pricing"
              className="text-white/80 hover:text-[#2674BC] transition-colors font-medium text-[16px]"
            >
              Pricing
            </Link>
            <Link
              href="/bamboohr-alternative"
              className="text-[#29ABE2] hover:text-white transition-colors font-semibold text-[16px]"
            >
              BambooHR Alternative
            </Link>
          </nav>

          {/* Right Action Box */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://app.employoapp.com/"
              className="text-white hover:text-[#2674BC] transition-colors font-medium text-[16px]"
            >
              Log In
            </a>
            <a
              href="https://app.employoapp.com/signup"
              className="inline-flex items-center justify-center bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] font-bold text-[15px] uppercase tracking-wide px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              <span>Start Free</span>
              {/* Employo Signature 3-Dot Icon */}
              <div className="flex items-center gap-1 ml-2.5">
                <span className="w-1 h-1 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform"></span>
                <span className="w-2 h-2 rounded-full bg-[#231F20] group-hover:scale-125 transition-transform"></span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white p-2 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-6 bg-[#231F20]/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <Link
              href="https://employoapp.com/product"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#2674BC] py-2 text-lg font-medium"
            >
              Product
            </Link>
            <Link
              href="https://employoapp.com/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#2674BC] py-2 text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="https://employoapp.com/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#2674BC] py-2 text-lg font-medium"
            >
              Resources
            </Link>
            <Link
              href="https://employoapp.com/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#2674BC] py-2 text-lg font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/bamboohr-alternative"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#29ABE2] py-2 text-lg font-semibold"
            >
              BambooHR Alternative
            </Link>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="https://app.employoapp.com/"
                className="text-white text-center py-2.5 font-medium hover:text-[#2674BC]"
              >
                Log In
              </a>
              <a
                href="https://app.employoapp.com/signup"
                className="flex items-center justify-center bg-[#2674BC] hover:bg-[#29ABE2] text-[#231F20] font-bold text-base uppercase py-3.5 rounded-full transition-all shadow-md"
              >
                <span>Start Free</span>
                <div className="flex items-center gap-1 ml-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#231F20]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#231F20]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#231F20]"></span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
