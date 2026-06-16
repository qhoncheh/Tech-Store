import { Categories } from "@/components/sections/Categories/categories-section";
import { Hero } from "@/components/sections/Hero/hero";
import { SmartphonesSection } from "@/components/sections/Smartphones/smartphones-section";
import { TabletsSection } from "@/components/sections/Tablets/tablets-section";
import { LaptopsSection } from "@/components/sections/Laptops/laptops-section";
import { BackToTop } from "@/components/ui/back-to-top-btn";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <SmartphonesSection />
      <TabletsSection />
      <LaptopsSection />
      <BackToTop />
    </>
  );
}
