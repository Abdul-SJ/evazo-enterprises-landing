"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, Scissors, Activity, ShieldCheck, Package, Ship, MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: ClipboardList,
    title: "1. Design & Tech Pack",
    desc: "We analyze your sketches, mockups, or tech packs and configure grading specs for custom sizes.",
  },
  {
    icon: Scissors,
    title: "2. Sample Prototyping",
    desc: "Physical samples are cut, dyed, printed/embroidered, and shipped to you for fit and fabric confirmation.",
  },
  {
    icon: Activity,
    title: "3. Bulk Production",
    desc: "Upon sample approval, we start bulk sewing, custom printing, embroidery, and dyeing your complete order.",
  },
  {
    icon: ShieldCheck,
    title: "4. Quality Control",
    desc: "Our quality team performs thorough piece-by-piece testing for sizing tolerances, prints, and threads.",
  },
  {
    icon: Package,
    title: "5. Private Branding",
    desc: "Garments receive custom woven tags, care labels, size indicators, and eco-friendly brand polybags.",
  },
  {
    icon: Ship,
    title: "6. Door-to-Door Delivery",
    desc: "Bulk parcels are shipped via DHL Express or ocean freight with duty-clearance options fully managed.",
  },
];

export default function ManufacturingProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress line animation (vertical on mobile, horizontal on desktop is complex, so let's animate the steps)
      gsap.fromTo(
        stepsContainerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Line progress indicator animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/923374259849?text=Hi%20Evoza%20Enterprises,%20I%20would%20like%20to%20know%20more%20about%20your%20manufacturing%20process%20and%20timelines.", "_blank");
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Production Cycle
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Our Manufacturing Process
          </h2>
          <p className="text-lg text-text-muted mt-4">
            From design inception to direct delivery, we manage every stage of production with premium efficiency.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-1 bg-border-primary -z-10" />
          {/* Animated Progress Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-1 bg-brand -z-10"
          />

          <div
            ref={stepsContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step icon circle */}
                  <div className="h-22 w-22 bg-bg-secondary border-2 border-border-primary group-hover:border-brand rounded-full flex items-center justify-center mb-6 text-text-muted group-hover:text-brand transition-all duration-300 shadow-sm group-hover:shadow-md relative">
                    <Icon className="w-8 h-8" />
                    {/* Step index badge */}
                    <div className="absolute -top-1 -right-1 bg-brand text-white font-display text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center shadow">
                      {idx + 1}
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-brand transition-colors duration-200">
                    {step.title.substring(3)}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <a
            href="https://wa.me/923374259849"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Start Your Project Timeline
          </a>
        </div>
      </div>
    </section>
  );
}
