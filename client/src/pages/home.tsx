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
        <meta name="keywords" content="IT Support Services DC Metro, Managed IT Services DMV, Washington DC IT Support, Northern Virginia Tech Support, Cybersecurity Services DC Metro, Cloud Services for Small Business DMV, Microsoft 365 Support DC Metro, Remote IT Help Desk DMV, Network Setup DC Area, Business Tech Support Washington DC, VoIP Setup Arlington VA, Data Backup DC Metro, Small Business IT Support Alexandria VA, IT Consulting Bethesda MD, Local Tech Support Company DMV" />
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
