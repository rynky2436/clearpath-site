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
        <title>ClearPath Tech Solutions | DC Metro Area IT Services | DMV Managed IT</title>
        <meta name="description" content="Expert IT support services throughout Washington DC, Maryland, and Northern Virginia. ClearPath Tech provides managed IT services, cybersecurity, network support, and cloud solutions for businesses in the DMV region." />
        <meta property="og:title" content="ClearPath Tech Solutions | DC Metro IT Services | DMV Technology Support" />
        <meta property="og:description" content="Trusted IT support provider serving the entire DC Metro area. 24/7 remote support, on-site services, and complete technology management for businesses throughout the DMV region." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://clearpathtech.com" />
        <meta name="keywords" content="Managed IT Services DC Metro, IT Support DMV Region, Washington DC IT Services, Northern Virginia IT Support, DC Metro Cybersecurity, Maryland IT Consulting, DMV Cloud Services, Small Business IT Support DC, Network Support Services DMV, Microsoft 365 Support DC Metro, Business IT Solutions DC Metro, VoIP Services DMV" />
        <meta name="geo.region" content="US-DC, US-MD, US-VA" />
        <meta name="geo.placename" content="Washington DC, Northern Virginia, Maryland" />
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
