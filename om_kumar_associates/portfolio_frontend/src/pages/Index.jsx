import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import YearlyWorkSection from "@/components/YearlyWorkSection";
import EquipmentSection from "@/components/EquipmentSection";
import StaffSection from "@/components/StaffSection";
import ClientsSection from "@/components/ClientsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <YearlyWorkSection />
      <EquipmentSection />
      <StaffSection />
      <ClientsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;