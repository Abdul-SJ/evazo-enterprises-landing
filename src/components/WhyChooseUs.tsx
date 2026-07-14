"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shirt, Award, Globe2, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards scroll trigger
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats CountUp animations
      const statsData = [
        { id: "#stat-delivered", end: 500, suffix: "+" },
        { id: "#stat-global", end: 30, suffix: "+" },
        { id: "#stat-materials", end: 100, suffix: "%" },
        { id: "#stat-turnaround", end: 21, suffix: " Days" },
      ];

      statsData.forEach((stat) => {
        const el = document.querySelector(stat.id);
        if (!el) return;

        const countObj = { value: 0 };
        gsap.to(countObj, {
          value: stat.end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.floor(countObj.value) + stat.suffix;
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 bg-bg-secondary border-y border-border-primary/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-radial-gradient from-brand/5 to-transparent pointer-events-none" />

      {/* Social Proof Stats Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <p className="font-display text-xs md:text-sm font-bold tracking-widest text-brand text-center uppercase mb-12">
          Trusted by Emerging & Established Brands Globally
        </p>
        <div
          ref={statsContainerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border-primary/60"
        >
          <div className="text-center md:border-r border-border-primary/60 last:border-0">
            <div
              id="stat-delivered"
              className="font-display text-4xl sm:text-5xl font-extrabold text-brand tracking-tight mb-2"
            >
              0+
            </div>
            <div className="text-sm font-semibold text-text-primary">
              Collections Delivered
            </div>
            <div className="text-xs text-text-muted mt-1">Retail ready apparel</div>
          </div>
          <div className="text-center md:border-r border-border-primary/60 last:border-0">
            <div
              id="stat-global"
              className="font-display text-4xl sm:text-5xl font-extrabold text-brand tracking-tight mb-2"
            >
              0+
            </div>
            <div className="text-sm font-semibold text-text-primary">
              Global Shipments
            </div>
            <div className="text-xs text-text-muted mt-1">US, Europe, Australia & UAE</div>
          </div>
          <div className="text-center md:border-r border-border-primary/60 last:border-0">
            <div
              id="stat-materials"
              className="font-display text-4xl sm:text-5xl font-extrabold text-brand tracking-tight mb-2"
            >
              0%
            </div>
            <div className="text-sm font-semibold text-text-primary">
              Premium Sourced Fabric
            </div>
            <div className="text-xs text-text-muted mt-1">Heavyweight cotton & terry</div>
          </div>
          <div className="text-center last:border-0">
            <div
              id="stat-turnaround"
              className="font-display text-4xl sm:text-5xl font-extrabold text-brand tracking-tight mb-2"
            >
              0 Days
            </div>
            <div className="text-sm font-semibold text-text-primary">
              Production Turnaround
            </div>
            <div className="text-xs text-text-muted mt-1">Including custom sample stages</div>
          </div>
        </div>
      </div>

      {/* The Evoza Advantage (Why Choose Us) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary">
            Why Choose Evazo
          </h2>
          <p className="text-lg text-text-muted mt-4">
            We partner with clothing brands to offer full production capabilities, eliminating supply chain friction and delivering uncompromising quality.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1 */}
          <div className="bg-white border border-border-primary/60 rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-md group">
            <div className="h-12 w-12 bg-brand/5 group-hover:bg-brand/10 rounded-xl flex items-center justify-center mb-6 text-brand transition-colors">
              <Shirt className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
              Premium Heavyweight Fabrics
            </h3>
            <p className="text-text-muted leading-relaxed">
              Gain access to high-grade textile mills. We source custom heavyweight cottons, French Terry, loopbacks, and technical blends from 280 GSM to 500+ GSM to elevate your garments' handfeel and drape.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-primary">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> Custom knit fabric matching</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> Organic, eco-friendly yarn options</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-border-primary/60 rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-md group">
            <div className="h-12 w-12 bg-brand/5 group-hover:bg-brand/10 rounded-xl flex items-center justify-center mb-6 text-brand transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
              Private Label Specialization
            </h3>
            <p className="text-text-muted leading-relaxed">
              We provide full custom branding integration. Every garment is complete with bespoke woven neck labels, care booklets, hang tags, custom sizing chips, and luxurious custom-branded polybags.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-primary">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> Silicone & satin label tags</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> Recycled cardboard hangtags</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-border-primary/60 rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:shadow-md group">
            <div className="h-12 w-12 bg-brand/5 group-hover:bg-brand/10 rounded-xl flex items-center justify-center mb-6 text-brand transition-colors">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-3">
              Seamless Global Logistics
            </h3>
            <p className="text-text-muted leading-relaxed">
              Avoid complex customs delays. We handle all import documentation, customs clearance, and deliver door-to-door using premium air couriers (DHL Express, FedEx) and freight forwarders.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-text-primary">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> DDP (Delivered Duty Paid) shipping</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand" /> Real-time shipment tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
