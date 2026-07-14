"use client";

import Image from "next/image";
import { MessageSquare } from "lucide-react";

export default function Navbar() {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20discuss%20a%20clothing%20production%20project.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glassmorphism border-b border-border-primary/50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-7xl mx-auto">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-border-primary">
            <Image
              src="/evoza-logo.jpg"
              alt="EVOZA ENTERPRISES Logo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="font-display text-lg md:text-xl font-bold tracking-wider text-text-primary uppercase">
            Evoza Enterprises
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-brand transition-colors duration-200"
          >
            WhatsApp Live Support
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <MessageSquare className="w-4.5 h-4.5" />
            Get Instant Quote
          </button>
        </div>
      </div>
    </header>
  );
}
