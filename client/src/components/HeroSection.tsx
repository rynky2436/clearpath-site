import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  actionLabel?: string;
  actionLink?: string;
}

export default function HeroSection({ 
  title, 
  description, 
  backgroundImage,
  actionLabel = "Get Started",
  actionLink = "#contact"
}: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-neutral-600"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
        }}
      ></div>
      <div className="absolute inset-0 bg-neutral-900/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90 mb-8">{description}</p>
          <Button size="lg" className="rounded-full" asChild>
            <a href={actionLink}>{actionLabel}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}