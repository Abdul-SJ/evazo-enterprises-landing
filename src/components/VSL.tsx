"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function VSL() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content fade up
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Player scale up + fade in
      gsap.fromTo(
        playerRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: playerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handlePlayClick = () => {
    // Open WhatsApp as video play replacement for high-converting ads landing page, or show a notification
    alert("Video playback starting soon. Chat with us on WhatsApp to see direct production videos and behind-the-scenes clips!");
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20see%20videos%20of%20your%20manufacturing%20process.",
      "_blank"
    );
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20discuss%20a%20clothing%20production%20project.",
      "_blank"
    );
  };

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-32 bg-white border-t border-border-primary/50"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Title & Subtitle */}
        <div ref={contentRef} className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Factory Tour
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Watch Our Manufacturing Process
          </h2>
          <p className="text-lg text-text-muted mt-4">
            See how Evazo manufactures premium oversized streetwear from fabric selection to final packaging.
          </p>
        </div>

        {/* 16:9 Video Player Placeholder */}
        <div
          ref={playerRef}
          onClick={handlePlayClick}
          className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border-primary/60 cursor-pointer group bg-black mb-12"
        >
          <Image
            src="/vsl-thumbnail.png"
            alt="EVOZA ENTERPRISES Factory VSL Thumbnail"
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover opacity-80 group-hover:scale-101 transition-transform duration-700 ease-out"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />

          {/* Large centered play button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-20 md:w-20 bg-brand text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 fill-white ml-1" />
          </button>

          {/* Bottom length indicator */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-xs font-semibold px-2.5 py-1 rounded">
            Preview Video • 1:45
          </div>
        </div>

        {/* Centered WhatsApp CTA */}
        <div className="w-full text-center">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
          >
            <MessageSquare className="w-5.5 h-5.5" />
            Get Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
