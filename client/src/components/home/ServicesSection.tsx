import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { services } from "@shared/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Services</h2>
          <p className="text-neutral-600 text-lg">
            Comprehensive solutions for all your technology needs, from custom builds to ongoing maintenance and support.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card glass rounded-3xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white font-bold text-xl">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-primary font-medium"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-primary font-medium text-lg"
          >
            View all services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
