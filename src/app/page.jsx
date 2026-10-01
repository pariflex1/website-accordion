import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AiDemo from "@/components/AiDemo";
import Work from "@/components/Work";
import Process from "@/components/Process";
import StackSection from "@/components/StackSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <AiDemo />
      <Work />
      <Process />
      <StackSection />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
