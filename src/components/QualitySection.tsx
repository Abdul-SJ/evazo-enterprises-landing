"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const qualityChecks = [
  "Stitching tension & seam strength tested per garment",
  "Pantone-matched colour accuracy before bulk approval",
  "Pre-shipment print/embroidery durability wash tests",
  "Measurement tolerances verified against tech pack specs",
  "Fabric GSM & shrinkage laboratory testing available",
  "Full AQL inspection reports provided on request",
];

export default function QualitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // clip-path reveal for image container
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          opacity: 0,
          scale: 1.04,
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 1,
          scale: 1,
          duration: 1.25,
          ease: "power3.inOut",
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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );

      // Checklist items reveal (staggered)
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20know%20about%20your%20quality%20control%20process.",
      "_blank"
    );
  };

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-white border-t border-border-primary/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Premium Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="absolute inset-0 bg-brand/4 rounded-3xl transform translate-x-4 -translate-y-4 -z-10" />
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/3] max-w-xl rounded-2xl overflow-hidden shadow-xl border border-border-primary/60 group"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          >
            <Image
              src="/streetwear_quality_check.png"
              alt="EVOZA ENTERPRISES Quality Control Process"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />

            {/* Badge overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-border-primary/60 rounded-xl px-4 py-2.5 shadow-sm">
              <span className="font-display text-xs font-bold text-brand tracking-widest uppercase">
                AQL Inspected
              </span>
              <div className="text-[10px] text-text-muted mt-0.5">Per-piece & batch testing</div>
            </div>
          </div>
        </div>

        {/* Right: Quality Checklist */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div ref={contentRef} className="w-full flex flex-col items-start">
            <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
              Guaranteed Quality
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-5">
              Uncompromising Quality at Every Stage
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
              Every garment that leaves our production facility passes a multi-point quality control protocol. We enforce strict tolerances on materials, prints, stitching, and overall presentation.
            </p>
          </div>

          <ul ref={listRef} className="space-y-4 w-full mb-10">
            {qualityChecks.map((check, idx) => (
              <li key={idx} className="flex items-start gap-3.5 border-b border-border-primary/40 pb-3 last:border-0 last:pb-0">
                <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm md:text-base leading-relaxed">{check}</span>
              </li>
            ))}
          </ul>

          <div className="w-full sm:w-auto">
            <a
              href="https://wa.me/923374259849"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center text-center"
            >
              <MessageSquare className="w-5 h-5" />
              Request Wholesale Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
