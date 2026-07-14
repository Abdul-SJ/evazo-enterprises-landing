"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    src: "/gallery-hoodie.png",
    alt: "Premium heavyweight black oversized hoodie flat lay",
    label: "Heavyweight Hoodies",
    span: "row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida/AP1WRLuOrzMXyraeK-9JndFfarUk-E6oZWj7bs8mPmz0FlL0I5o_G24ucHMxZZ_Rk0d7iqiFVyFSZWamxmM9wNNyoIc7XHUfXa7Thqpdo9K0IPgovpiqGJA4JxqBvA_igS69TxawqrPfap-nXseK1Ocf3MbC1RZHNVjSNrzm25-AxgBKyClKbJRZ3aSG13BHLKw7O3xXWL31Rvr9nvfb4XTglSjCCH7HCWRvw8cNZsaq8VwLb-AHOJUPQscxmFQK",
    alt: "Custom oversized streetwear hoodie showcase",
    label: "Oversized Silhouettes",
    span: "",
  },
  {
    src: "/gallery-fabric.png",
    alt: "Premium cotton fabric swatches for apparel manufacturing",
    label: "Premium Fabric Swatches",
    span: "",
  },
  {
    src: "/gallery-streetwear.png",
    alt: "Model wearing EVOZA custom embroidered hoodie",
    label: "Editorial Lookbooks",
    span: "row-span-2",
  },
  {
    src: "/gallery-labels.png",
    alt: "Custom woven labels and private label branding elements",
    label: "Private Label Details",
    span: "",
  },
  {
    src: "/streetwear_quality_check.png",
    alt: "Quality control inspection of garment stitching",
    label: "QC & Inspection",
    span: "",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item") || [];
      gsap.fromTo(
        Array.from(items),
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: {
            each: 0.12,
            from: "start",
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-bg-secondary border-t border-border-primary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Production Showcase Gallery
          </h2>
          <p className="text-lg text-text-muted mt-4">
            A curated look at our manufacturing capabilities, finished collections, and quality standards.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]"
        >
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`gallery-item relative rounded-2xl overflow-hidden border border-border-primary/50 shadow-sm group ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <span className="font-display text-white text-sm font-bold tracking-wide">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
