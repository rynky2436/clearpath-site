import { useParams, useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { services } from "@shared/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Service() {
  const { slug } = useParams();
  const [, navigate] = useLocation();
  
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    navigate("/not-found");
    return null;
  }
  
  return (
    <>
      <Helmet>
        <title>{service.title} | ClearPath Tech Solutions</title>
        <meta name="description" content={service.description.slice(0, 160)} />
        <meta property="og:title" content={`${service.title} | ClearPath Tech Solutions`} />
        <meta property="og:description" content={service.description.slice(0, 160)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clearpathtech.com/services/${service.slug}`} />
      </Helmet>
      
      <main>
        {/* Hero section */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${service.heroImage || service.image})`,
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
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.title}</h1>
              <p className="text-xl text-white/90 mb-8">{service.shortDescription}</p>
              <Button size="lg" className="rounded-full" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Content section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2"
              >
                <h2 className="text-3xl font-bold mb-6">How We Can Help</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{service.description}</p>
                  
                  {service.sections?.map((section, index) => (
                    <div key={index} className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
                
                {service.benefits && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Benefits</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12"
                >
                  <a href="#contact" className="inline-flex items-center text-primary font-medium text-lg">
                    Contact us to learn more <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="glass rounded-3xl shadow-lg p-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Why Choose ClearPath Tech</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Personalized solutions tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Expert technicians with years of experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Clear communication throughout the process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Transparent pricing with no hidden fees</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button className="w-full rounded-xl" size="lg" asChild>
                      <a href="#contact">Schedule a Consultation</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                Contact our team today to discuss your {service.title.toLowerCase()} needs and 
                how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#contact">Schedule a Consultation</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="tel:+14155550123">Call (415) 555-0123</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
