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
        <title>ClearPath Tech Solutions | Managed IT Services Maryland | Baltimore IT Support</title>
        <meta name="description" content="Expert IT support services in Baltimore, Columbia & across Maryland. ClearPath Tech provides managed IT services, cybersecurity, network support, and cloud solutions for small businesses." />
        <meta property="og:title" content="ClearPath Tech Solutions | Maryland Managed IT Services | Baltimore IT Support" />
        <meta property="og:description" content="Trusted Maryland IT support provider with offices in Baltimore and Columbia. 24/7 remote support, on-site services, and complete technology management for businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clearpathtech.com" />
        <meta name="keywords" content="Managed IT Services Maryland, Baltimore IT Support, Columbia IT Services, Small Business IT Support Maryland, Cybersecurity Services Baltimore, IT Help Desk Maryland, Network Support Services, Cloud Services Maryland, Microsoft 365 Support, IT Consulting Baltimore, Computer Support Columbia MD, Business Continuity Services" />
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Baltimore, Columbia" />
        <link rel="canonical" href="https://clearpathtech.com" />
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
