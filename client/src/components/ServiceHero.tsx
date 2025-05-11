import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceHeroProps {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage?: string;
  image?: string;
}

export default function ServiceHero({ 
  slug, 
  title, 
  shortDescription, 
  heroImage, 
  image 
}: ServiceHeroProps) {
  // Use hero image if available, otherwise fallback to regular image
  const backgroundImage = heroImage || image;
  
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-neutral-900/70"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90 mb-8">{shortDescription}</p>
          <Button size="lg" className="rounded-full" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}