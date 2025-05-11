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
        <title>ClearPath Tech Solutions | IT Support Services Maryland</title>
        <meta name="description" content="Trusted IT support services in Maryland. ClearPath Tech provides managed IT services, business tech support, cybersecurity, and website development for small businesses." />
        <meta property="og:title" content="ClearPath Tech Solutions | IT Support Services Maryland" />
        <meta property="og:description" content="Trusted Maryland IT support, managed services, and tech consulting for small businesses. Local, friendly, and personalized technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clearpathtech.com" />
        <meta name="keywords" content="IT support services Maryland, business tech support Maryland, managed IT services Maryland, small business IT support, cybersecurity services Maryland, website development Maryland, computer repair for businesses" />
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
