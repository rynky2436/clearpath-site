import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-neutral-900/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl shadow-xl max-w-3xl mx-auto md:mx-0 p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-[#2196f3] text-white text-center px-8 py-4 rounded-full hover:bg-blue-500 transition-colors text-lg font-bold shadow-md"
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#consult"
              className="bg-white/80 backdrop-blur-sm text-neutral-800 border border-white/50 text-center px-8 py-4 rounded-full hover:bg-white/90 transition-colors text-lg font-bold shadow-md"
            >
              {t('hero.cta2')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
