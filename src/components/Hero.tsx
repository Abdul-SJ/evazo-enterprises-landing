"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Globe, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Stagger elements fade-in and slide-up
      tl.fromTo(
        badgesRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
      );

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );

      tl.fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.6"
      );

      tl.fromTo(
        trustRef.current?.children || [],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );

      // Image fade-in and scaling
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20discuss%20a%20clothing%20production%20project.", "_blank");
  };

  const handleScrollToProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("featured-product");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 md:py-44 flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-16"
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Left Column: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start space-y-8">
        <div ref={badgesRef} className="flex flex-wrap gap-2">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase">
            OEM / ODM Partner
          </span>
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase">
            Worldwide Shipping
          </span>
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase">
            Low MOQ Options
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary text-balance leading-[1.05]"
        >
          Manufacture Premium Streetwear <span className="text-brand">With Confidence.</span>
        </h1>

        <p
          ref={textRef}
          className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
        >
          Launch and scale your clothing brand with high-end apparel manufactured to your exact technical specifications. From design development to bulk delivery, EVOZA ENTERPRISES ensures retail-ready quality.
        </p>

        {/* Call to Actions */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            <MessageSquare className="w-5.5 h-5.5" />
            Get Instant Quote on WhatsApp
          </a>
          <a
            href="#featured-product"
            onClick={handleScrollToProduct}
            className="inline-flex items-center justify-center gap-2 border border-border-primary hover:border-brand bg-white hover:bg-bg-secondary text-text-primary font-semibold px-8 py-4.5 rounded-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Explore Showcases
            <ArrowRight className="w-4 h-4 text-text-muted" />
          </a>
        </div>

        {/* Minimal trust checkmark badges */}
        <div
          ref={trustRef}
          className="grid grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-border-primary/60 w-full max-w-md"
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-brand" />
            <span className="text-sm font-medium text-text-primary">100% Quality Inspected</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-brand" />
            <span className="text-sm font-medium text-text-primary">Express Door-to-Door Delivery</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-brand" />
            <span className="text-sm font-medium text-text-primary">Custom Tags & Packaging</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-brand" />
            <span className="text-sm font-medium text-text-primary">Heavyweight Premium Fabrics</span>
          </div>
        </div>
      </div>

      {/* Right Column: Hero Image with decorative gradient box */}
      <div className="w-full lg:w-1/2 relative flex justify-center">
        <div className="absolute inset-0 bg-brand/5 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
        <div
          ref={imageRef}
          className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-border-primary/60"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida/AP1WRLud7Ys1PE8mFqI0K0BvBe_d89T8Pf028E7L3io7NKTJi8ymJKCMpYZpJTES0Z78so2S8hNldcYABZfzunX_9XNTR3yKwBc0Gr5XNlDTnuB-7lnZjaKBoXOQkXl3TcWscq7IW68q6ZwcyRqJke86OKyb7UVFE-i6QMPrx8PhdBHYqHJq6zsaEsrjMaiIkdO09vW9lGztTuagx4VqB8X8EcvQQ6hvdWwsnNgIH6bI6Tou4pjOIdPq81fxA4IM"
            alt="EVOZA ENTERPRISES Custom Streetwear Manufacturing Process"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
