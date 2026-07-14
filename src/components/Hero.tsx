"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MessageSquare } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo fade in (Navbar logo)
      gsap.fromTo(
        "header",
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Headline fade up (y: 40px, duration 0.6s, delay 0.2s)
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.2
      );

      // Hero image reveal (Scale 0.96 to 1, Opacity 0 -> 1, duration 0.9s, ease: power3.out)
      // Since it triggers when page loads, let's start it early or in timeline
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" },
        0.2
      );

      // Paragraph fade up (duration 0.6s, delay 0.35s)
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.35
      );

      // Trust badges stagger animation (delay between each: 0.08s)
      if (badgesRef.current) {
        tl.fromTo(
          badgesRef.current.children,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.2"
        );
      }

      // WhatsApp button fade up (delay: 0.6s)
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.6
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
      className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-34 md:pb-24"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Grid container with custom mobile order for image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column (Text & badging) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Order 1: Headline */}
          <h1
            ref={titleRef}
            className="order-1 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.1] text-balance mb-6 lg:mb-8"
          >
            Launch Your Streetwear Brand Starting From Just 50 Pieces
          </h1>

          {/* Mobile Order 2: Hero Image (visible only on mobile here, hidden on desktop here) */}
          <div className="order-2 block lg:hidden w-full mb-8">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border-primary/60">
              <Image
                src="/hero-image.jpg"
                alt="EVOZA ENTERPRISES Custom Streetwear Prototyping"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Order 3: Subheading */}
          <p
            ref={textRef}
            className="order-3 text-lg md:text-xl text-text-muted leading-relaxed mb-6 lg:mb-8 max-w-xl"
          >
            Premium oversized hoodies manufactured in Sialkot, Pakistan with custom labels, embroidery, puff printing and worldwide shipping.
          </p>

          {/* Order 4: Trust Badges */}
          <div
            ref={badgesRef}
            className="order-4 grid grid-cols-2 gap-x-6 gap-y-3 mb-8 lg:mb-10 w-full max-w-md border-t border-border-primary/50 pt-5"
          >
            <div className="flex items-center gap-2 text-text-primary text-sm font-semibold">
              <span className="text-brand font-bold text-base">✓</span> MOQ Starting From 50 Pieces
            </div>
            <div className="flex items-center gap-2 text-text-primary text-sm font-semibold">
              <span className="text-brand font-bold text-base">✓</span> Private Label Manufacturing
            </div>
            <div className="flex items-center gap-2 text-text-primary text-sm font-semibold">
              <span className="text-brand font-bold text-base">✓</span> Worldwide Shipping
            </div>
            <div className="flex items-center gap-2 text-text-primary text-sm font-semibold">
              <span className="text-brand font-bold text-base">✓</span> Sample Available
            </div>
          </div>

          {/* Order 5: Call to Action (Only WhatsApp) */}
          <div className="order-5 w-full sm:w-auto">
            <a
              ref={buttonRef}
              href="https://wa.me/923374259849"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              <MessageSquare className="w-5.5 h-5.5" />
              Get Quote on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image (Desktop only) */}
        <div className="hidden lg:block lg:col-span-5 relative w-full">
          <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-primary/60"
          >
            <Image
              src="/hero-image.jpg"
              alt="EVOZA ENTERPRISES Custom Streetwear Prototyping"
              fill
              priority
              sizes="(min-width: 1024px) 450px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
