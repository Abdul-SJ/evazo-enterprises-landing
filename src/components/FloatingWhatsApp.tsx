"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    // Soft attention pulse every 8 seconds: Scale 1 -> 1.08 -> 1 once
    const interval = setInterval(() => {
      gsap.timeline()
        .to(el, { scale: 1.08, duration: 0.35, ease: "power2.out" })
        .to(el, { scale: 1, duration: 0.35, ease: "power2.in" });
    }, 8000);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf(el);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20clothing%20brand.",
      "_blank"
    );
  };

  return (
    <a
      ref={btnRef}
      href="https://wa.me/923374259849"
      onClick={handleClick}
      aria-label="Chat with EVOZA ENTERPRISES on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold rounded-full shadow-2xl transition-colors duration-200"
      style={{ transform: "scale(1)" }}
      title="Chat on WhatsApp"
    >
      <div className="flex items-center gap-2.5 px-5 py-3.5 md:pl-4 md:pr-6 md:py-4">
        <MessageSquare className="w-6 h-6 shrink-0" />
        <span className="text-sm font-bold hidden sm:inline whitespace-nowrap">
          Get Instant Quote
        </span>
      </div>
    </a>
  );
}
