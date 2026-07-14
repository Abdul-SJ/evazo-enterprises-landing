"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProduct() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide & scale
      gsap.fromTo(
        imageContainerRef.current,
        { opacity: 0, x: -30, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Text elements reveal
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20discuss%20custom%20hoodies%20and%20fits%20for%20my%20brand.", "_blank");
  };

  return (
    <section
      id="featured-product"
      ref={containerRef}
      className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-12 scroll-reveal"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Premium Image Container */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="absolute inset-0 bg-brand/5 rounded-3xl transform -translate-x-4 translate-y-4 -z-10" />
          <div
            ref={imageContainerRef}
            className="relative w-full aspect-[3/4] max-w-md rounded-2xl overflow-hidden shadow-xl border border-border-primary/60 group"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida/AP1WRLuOrzMXyraeK-9JndFfarUk-E6oZWj7bs8mPmz0FlL0I5o_G24ucHMxZZ_Rk0d7iqiFVyFSZWamxmM9wNNyoIc7XHUfXa7Thqpdo9K0IPgovpiqGJA4JxqBvA_igS69TxawqrPfap-nXseK1Ocf3MbC1RZHNVjSNrzm25-AxgBKyClKbJRZ3aSG13BHLKw7O3xXWL31Rvr9nvfb4XTglSjCCH7HCWRvw8cNZsaq8VwLb-AHOJUPQscxmFQK"
              alt="EVOZA ENTERPRISES Custom Oversized Hoodie Manufacture"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Subtle light overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Specifications and Description */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col items-start">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Signature Fit Patterns
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-6">
            Mastering the Oversized Fit
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">
            Our signature custom oversized hoodie blocks are precision-engineered to achieve the perfect streetwear silhouette. Featuring dropped shoulders, double-lined hoods, and a boxy, slightly cropped body drape that retail markets demand.
          </p>

          <ul className="space-y-4.5 mb-10 w-full">
            <li className="flex items-start gap-3.5 border-b border-border-primary/50 pb-3">
              <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-primary block font-bold">100% Premium Cotton Knits</strong>
                <span className="text-text-muted text-sm">Available in Loopback French Terry, Heavy fleece, and organic cotton blends.</span>
              </div>
            </li>
            <li className="flex items-start gap-3.5 border-b border-border-primary/50 pb-3">
              <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-primary block font-bold">Ultra-Heavyweight Gsm Tiers</strong>
                <span className="text-text-muted text-sm">Select from standard 320 GSM, premium 400 GSM, up to extreme 500+ GSM weights.</span>
              </div>
            </li>
            <li className="flex items-start gap-3.5 border-b border-border-primary/50 pb-3">
              <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-primary block font-bold">Advanced Custom Embellishments</strong>
                <span className="text-text-muted text-sm">Puff printing, high-density screen printing, custom dye sublimation, and detailed embroidery.</span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-primary block font-bold">Bespoke Dyeing & Wash Effects</strong>
                <span className="text-text-muted text-sm">Pantone matching dyes, acid wash, mineral wash, enzyme softening, and vintage stone washing.</span>
              </div>
            </li>
          </ul>

          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center justify-center"
          >
            <MessageSquare className="w-5 h-5" />
            Discuss Your Design
          </a>
        </div>
      </div>
    </section>
  );
}
