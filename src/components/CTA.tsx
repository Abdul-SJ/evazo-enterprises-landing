"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pulse animation for the CTA button
      gsap.to(buttonRef.current, {
        scale: 1.03,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20am%20ready%20to%20start%20my%20clothing%20production%20project.%20Please%20provide%20a%20quote.",
      "_blank"
    );
  };

  return (
    <section ref={containerRef} className="py-12 md:py-20 px-6 md:px-12 bg-white border-t border-border-primary/50">
      <div className="max-w-4xl mx-auto">
        {/* Compact main gradient card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand via-[#0249e0] to-[#001a6e] rounded-3xl px-6 md:px-12 py-12 md:py-16 text-center shadow-xl">
          {/* Background dot pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div ref={contentRef} className="relative z-10 flex flex-col items-center">
            <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-white/15 text-white/90 px-4 py-1.5 rounded-full uppercase mb-4">
              Get Started
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance leading-tight mb-4">
              Ready To Build Your Clothing Brand?
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Let's discuss your requirements on WhatsApp.
            </p>

            <div className="w-full sm:w-auto flex justify-center">
              <a
                ref={buttonRef}
                href="https://wa.me/923374259849"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5.5 h-5.5" />
                Start Your Project on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
