import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VSL from "@/components/VSL";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import CustomBranding from "@/components/CustomBranding";
import QualitySection from "@/components/QualitySection";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VSL />
        <WhyChooseUs />
        <FeaturedProduct />
        <ManufacturingProcess />
        <CustomBranding />
        <QualitySection />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
