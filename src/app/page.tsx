import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import PopularDestinations from "@/components/home/PopularDestinations";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";


export default function Home() {
  return (
      <main>
        <Hero />
        <PopularDestinations />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
  );
}
