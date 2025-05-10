
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialSection from "@/components/TestimonialSection";
import VendorSection from "@/components/VendorSection";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <VendorSection />
        <TestimonialSection />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
