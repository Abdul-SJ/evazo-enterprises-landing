"use client";

import Image from "next/image";



export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-primary/60 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-border-primary">
            <Image
              src="/evoza-logo.jpg"
              alt="EVOZA ENTERPRISES Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-display text-base font-bold tracking-wider text-text-primary uppercase">
            Evoza Enterprises
          </span>
        </a>

        {/* Copyright */}
        <p className="text-text-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} EVOZA ENTERPRISES. All rights reserved.
        </p>

        {/* Social */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="EVOZA ENTERPRISES on Facebook"
          className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors duration-200"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="text-sm font-medium">Facebook</span>
        </a>
      </div>
    </footer>
  );
}
