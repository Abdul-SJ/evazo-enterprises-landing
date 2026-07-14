import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProduct from "@/components/FeaturedProduct";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import CustomBranding from "@/components/CustomBranding";
import QualitySection from "@/components/QualitySection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
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
        <WhyChooseUs />
        <FeaturedProduct />
        <ManufacturingProcess />
        <CustomBranding />
        <QualitySection />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
