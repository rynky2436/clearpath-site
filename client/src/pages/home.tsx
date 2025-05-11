import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AudienceSection from "@/components/home/AudienceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ClearPath Tech Solutions | Modern Technology Services</title>
        <meta name="description" content="ClearPath Tech provides personalized technology services that make digital life seamless. From custom PC builds to smart home automation, we're your guide to better tech." />
        <meta property="og:title" content="ClearPath Tech Solutions | Modern Technology Services" />
        <meta property="og:description" content="Personalized technology services that make digital life seamless. From custom PC builds to smart home automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clearpathtech.com" />
      </Helmet>
      
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <AudienceSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}
