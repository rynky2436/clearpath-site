import { useParams, useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { services } from "@shared/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";

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
        <title>{service.title} | Maryland IT Services | ClearPath Tech Solutions</title>
        <meta name="description" content={`${service.title} in Baltimore, Columbia & across Maryland. ${service.description.slice(0, 120)}`} />
        <meta property="og:title" content={`${service.title} | Maryland IT Services | ClearPath Tech Solutions`} />
        <meta property="og:description" content={`Professional ${service.title.toLowerCase()} for businesses throughout Maryland. Serving Baltimore, Columbia, Annapolis and surrounding areas.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clearpathtech.com/services/${service.slug}`} />
        <meta name="keywords" content={`${service.title} Maryland, ${service.title} Baltimore, IT Services Maryland, Technology Solutions Columbia MD, Professional IT Support, ${service.title.split(' ').join(', ')}`} />
        <meta name="geo.region" content="US-MD" />
      </Helmet>
      
      <main>
        {/* Hero section */}
        <HeroSection
          title={service.title}
          description={service.shortDescription}
          backgroundImage={service.heroImage || service.image}
          actionLabel="Get Started"
          actionLink="#contact"
        />
        
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
                  <h3 className="text-xl font-bold mb-6">Why Choose ClearPath Tech in Maryland</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Local Maryland IT team with fast response times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Certified IT professionals with industry expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>24/7 monitoring and proactive maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Maryland-based offices in Baltimore and Columbia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Flat-rate IT services with predictable monthly costs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Experience serving Maryland businesses since 2010</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <Button className="w-full rounded-xl" size="lg" asChild>
                      <a href="#contact">Get Maryland IT Support</a>
                    </Button>
                    <p className="text-xs text-center mt-3 text-neutral-500">Serving Baltimore, Columbia & All Maryland</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need {service.title} in Maryland?</h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                Our Baltimore and Columbia-based IT team is ready to provide expert {service.title.toLowerCase()} 
                solutions for your Maryland business. Contact us today for a free assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#contact">Schedule Free IT Assessment</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="tel:+14105550123">Call (410) 555-0123</a>
                </Button>
              </div>
              <p className="text-sm text-neutral-500 mt-6">
                Serving Baltimore, Columbia, Annapolis, and all of Maryland
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
