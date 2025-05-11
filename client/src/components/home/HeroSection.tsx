import { motion } from "framer-motion";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-neutral-900/30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl shadow-xl max-w-3xl mx-auto md:mx-0 p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Trusted IT Support <span className="text-primary">in Maryland</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl">
            ClearPath Tech Solutions provides managed IT services and business tech support across Maryland. 
            From small business IT support to cybersecurity services, we're your local technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-primary text-white text-center px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              View IT Support Services
            </a>
            <a
              href="#consult"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 text-center px-8 py-4 rounded-full hover:bg-white/30 transition-colors text-lg font-medium"
            >
              Get Free IT Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
