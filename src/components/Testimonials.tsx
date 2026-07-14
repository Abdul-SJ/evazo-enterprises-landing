"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Marcus Reid",
    title: "Founder, ArchiveDrop",
    location: "London, UK",
    stars: 5,
    text: "Working with Evoza has been transformative for our brand. The 450 GSM French Terry hoodies are exactly what we envisioned — incredibly heavy, perfect drop-shoulder, and the Pantone color matching was flawless. Our customers noticed the difference immediately.",
    initials: "MR",
    color: "from-blue-500 to-brand",
  },
  {
    name: "Aisha Kamara",
    title: "Creative Director, Haze Supply Co.",
    location: "Toronto, Canada",
    stars: 5,
    text: "I sent over rough sketches and within two weeks I had samples in my hands. The embroidery quality and woven neck label execution was way beyond what I expected at this MOQ level. Will be placing bulk orders next season without hesitation.",
    initials: "AK",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "Damien Torres",
    title: "CEO, Wraith Collective",
    location: "Sydney, Australia",
    stars: 5,
    text: "The puff print detailing on our limited drop was exceptional. Evoza matched our aggressive DDA timeline and delivered 300 units to our Sydney warehouse via DHL with full customs handling. End-to-end support was professional throughout.",
    initials: "DT",
    color: "from-slate-600 to-slate-800",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
    window.open(
      "https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20saw%20your%20testimonials%20and%20would%20like%20to%20start%20a%20project.",
      "_blank"
    );
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white border-t border-border-primary/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Trusted by Brand Founders Globally
          </h2>
          <p className="text-lg text-text-muted mt-4">
            Hear from independent clothing brands who built their collections with EVOZA ENTERPRISES.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-border-primary/60 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-brand/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-text-primary leading-relaxed flex-1 text-sm md:text-base italic mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-4 pt-5 border-t border-border-primary/50">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-display text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">{t.title}</div>
                  <div className="text-[10px] text-text-muted">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
