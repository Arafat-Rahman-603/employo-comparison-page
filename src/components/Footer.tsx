import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#231F20] text-white border-t border-white/10">
      {/* Main 5-Column Navigation Grid matching live Employo website */}
      <div className="py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Column 1: Brand Info & Support Email */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="inline-flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Employo"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
                <span className="bg-[#2674BC] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  Beta
                </span>
              </Link>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Simple HR software for growing teams. Your first 25 employees are free.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 hover:text-white pt-1">
                <Mail className="w-3.5 h-3.5 text-[#29ABE2] shrink-0" />
                <a
                  href="mailto:support@employoapp.com"
                  className="hover:text-[#29ABE2] transition-colors break-all"
                >
                  support@employoapp.com
                </a>
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-white/90">
                Company
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/60">
                <li>
                  <a
                    href="https://employoapp.com/about"
                    className="hover:text-white transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/contact-us"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link
                    href="/bamboohr-alternative"
                    className="hover:text-[#29ABE2] text-[#29ABE2] transition-colors font-medium"
                  >
                    BambooHR Alternative
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Product */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-white/90">
                Product
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/60">
                <li>
                  <a
                    href="https://employoapp.com/product"
                    className="hover:text-white transition-colors"
                  >
                    Employee Management
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/product"
                    className="hover:text-white transition-colors"
                  >
                    Attendance Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/product"
                    className="hover:text-white transition-colors"
                  >
                    Leave Management
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/product"
                    className="hover:text-white transition-colors"
                  >
                    Shift Management
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-white/90">
                Resources
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/60">
                <li>
                  <a
                    href="https://employoapp.com/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/resources"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://employoapp.com/terms-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Socials */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-white/90">
                Socials
              </h4>
              <div className="flex items-center gap-2.5 pt-1">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/employoapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#1877F2] hover:scale-105 transition-transform shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@employo_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#FF0000] hover:scale-105 transition-transform shadow-md"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/employoapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0A66C2] hover:scale-105 transition-transform shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/employo_app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E4405F] hover:scale-105 transition-transform shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="py-6 border-t border-white/10 bg-[#121111]">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© 2026 Employo Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a
              href="https://employoapp.com/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms of Services
            </a>
            <a
              href="https://employoapp.com/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
