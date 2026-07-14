"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pulse animation for the CTA button after entrance
      gsap.to(buttonRef.current, {
        scale: 1.03,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
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
    <section ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-border-primary/50">
      <div className="max-w-4xl mx-auto">
        {/* Main gradient card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand via-[#0249e0] to-[#001a6e] rounded-3xl px-8 md:px-16 py-16 md:py-24 text-center shadow-2xl">
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
            <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-white/15 text-white/90 px-4 py-1.5 rounded-full uppercase mb-6">
              Ready to Launch Your Brand?
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance leading-[1.08] mb-6">
              Build Your Clothing Collection With EVOZA
            </h2>

            <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Speak directly with our production specialists. Get a customized quote for your next collection within 24 hours — no obligation, just expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                ref={buttonRef}
                href="https://wa.me/923374259849"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-lg transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-6 h-6" />
                Start Your Project on WhatsApp
              </a>

              <a
                href="https://wa.me/923374259849"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-base transition-colors duration-200"
              >
                Discuss Your Design
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust micro-copy */}
            <p className="mt-8 text-white/50 text-xs tracking-wide">
              No automated bots. Direct reply from our production team, usually within a few hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
