"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "Our standard MOQ is 50 pieces per style per color for blank garments. For custom printed or embroidered pieces it is 100 units per design/colorway. We can discuss smaller sample runs for brand-new clients.",
  },
  {
    q: "How long does the production process take?",
    a: "Sample development typically takes 14–21 business days after design approval. Bulk production takes 30–45 business days depending on order size, complexity of embellishments, and dyeing requirements. Rush options are available.",
  },
  {
    q: "Do you offer sampling before bulk orders?",
    a: "Yes, we strongly encourage sampling. We create fit samples, print samples, and full production-ready pre-production samples. Sample costs vary based on complexity and are typically deducted from bulk order payments.",
  },
  {
    q: "What printing and decoration techniques do you support?",
    a: "We support a wide range: screen printing (plastisol, discharge, waterbased), puff print, high-density gel print, embroidery (flat, 3D puff, chenille patches), heat transfer, sublimation, foil printing, reflective inks, and more. Ask us about your specific requirements.",
  },
  {
    q: "Can you handle custom packaging and private labelling?",
    a: "Absolutely. We offer a full private label package: custom woven neck labels, satin or printed care labels, hang tags (paper or recycled cardboard), custom size tabs, and frosted or biodegradable ziplock polybags with your branding.",
  },
  {
    q: "How do you handle shipping and customs?",
    a: "We ship worldwide via DHL Express for sample and smaller orders. For bulk orders we offer sea freight via verified freight forwarders. We can ship DDP (Delivered Duty Paid) where we handle all customs documentation, making the process seamless for international clients.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard terms are 50% deposit to begin production and 50% balance before shipment. For repeat clients with a track record, extended payment terms can be arranged on a case-by-case basis.",
  },
];

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".faq-item") || [];
      
      // Animate each accordion item entering viewport
      gsap.fromTo(
        Array.from(items),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (idx: number) => {
    const isOpen = openIndex === idx;
    const prevIndex = openIndex;

    // Close previously open item
    if (prevIndex !== null && answersRef.current[prevIndex]) {
      gsap.to(answersRef.current[prevIndex], {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          if (answersRef.current[prevIndex]) {
            answersRef.current[prevIndex]!.style.overflow = "hidden";
          }
        },
      });
    }

    if (isOpen) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
      // Animating the newly opened item
      setTimeout(() => {
        const el = answersRef.current[idx];
        if (el) {
          el.style.height = "auto";
          el.style.overflow = "visible";
          const fullH = el.scrollHeight;
          gsap.fromTo(
            el,
            { height: 0, opacity: 0 },
            { height: fullH, opacity: 1, duration: 0.4, ease: "power2.out" }
          );
        }
      }, 0);
    }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-bg-secondary border-t border-border-primary/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-display text-[10px] md:text-xs font-bold tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full uppercase mb-4">
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mt-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-muted mt-4">
            Everything you need to know before placing your order with EVOZA ENTERPRISES.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-item bg-white border border-border-primary/60 rounded-2xl overflow-hidden shadow-sm hover:border-brand/30 transition-colors duration-200"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left p-6 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base md:text-lg font-bold text-text-primary leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* GSAP-animated answer container */}
                <div
                  ref={(el) => {
                    answersRef.current[idx] = el;
                  }}
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-text-muted leading-relaxed text-sm md:text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
