"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Palette, Tag, Box, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const brandingServices = [
  {
    icon: Scissors,
    title: "High-Stitch Embroidery",
    desc: "Intricate embroidery techniques including heavyweight 3D puff, chenille patch applique, and woven badges. Perfectly detailed to stand out on hoodies, sweats, and caps.",
    highlights: ["3D Puff Embroidery", "Chenille Patches", "Tackle Twill Appliques"],
  },
  {
    icon: Palette,
    title: "Premium Specialty Printing",
    desc: "Advanced apparel printing capabilities. From premium soft-feel plastisol, puff print textures, vintage discharge printing, to silicone-gel prints and reflective inks.",
    highlights: ["Textured Puff Print", "Reflective/Glow Ink", "High-Density Gel"],
  },
  {
    icon: Tag,
    title: "Custom Labeling Systems",
    desc: "Make your garments truly private label. We produce premium satin or woven neck labels, tear-away care tags, custom size chips, and woven logo tabs on cuffs or hems.",
    highlights: ["Damask Woven Labels", "Printed Satin Tags", "Custom Hem Tabs"],
  },
  {
    icon: Box,
    title: "Bespoke Brand Packaging",
    desc: "Complete the luxury customer unboxing experience. We supply custom frosted biodegradable ziplock polybags, custom brand tissue paper, stickers, and premium heavyweight hangtags.",
    highlights: ["Biodegradable Ziplock Bags", "Thick Cardboard Hangtags", "Custom Brand Stickers"],
  },
];

export default function CustomBranding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20want%20to%20know%20about%20your%20custom%20branding,%20embroidery,%20and%20packaging%20services.", "_blank");
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-bg-secondary border-t border-border-primary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Private Label Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Custom Branding & Embellishment
          </h2>
          <p className="text-lg text-text-muted mt-4">
            We provide full custom styling details that turn simple garments into premium brand-name collections.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brandingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-border-primary/60 hover:border-brand/40 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon Container */}
                  <div className="h-14 w-14 bg-brand/5 group-hover:bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="bg-bg-secondary text-text-primary text-[10px] md:text-xs font-semibold px-3 py-1.5 rounded-lg border border-border-primary"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Request Branding Samples
          </a>
        </div>
      </div>
    </section>
  );
}
