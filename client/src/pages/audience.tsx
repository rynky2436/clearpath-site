import { useParams, useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { audiences, services } from "@shared/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import HeroSection from "@/components/HeroSection";

export default function Audience() {
  const { slug } = useParams();
  const [, navigate] = useLocation();
  
  const audience = audiences.find(a => a.slug === slug);
  
  if (!audience) {
    navigate("/not-found");
    return null;
  }
  
  // Filter services relevant to this audience
  const relevantServices = services.filter(
    service => audience.relevantServices.includes(service.slug)
  );
  
  return (
    <>
      <Helmet>
        <title>DC Metro IT Solutions for {audience.title} | DMV IT Support | ClearPath Tech</title>
        <meta name="description" content={`Custom IT solutions for ${audience.title.toLowerCase()} in the DC Metro area. ClearPath Tech provides tailored technology services in Washington DC, Maryland, and Northern Virginia.`} />
        <meta property="og:title" content={`IT Solutions for ${audience.title} in the DMV Region | ClearPath Tech`} />
        <meta property="og:description" content={`Expert IT support and technology solutions for ${audience.title.toLowerCase()} throughout the DC Metro area. Reliable, local IT services tailored to your specific needs across the DMV region.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://clearpathtech.com/audience/${audience.slug}`} />
        <meta name="keywords" content={`IT solutions for ${audience.title}, IT support for ${audience.title} DC Metro, technology services ${audience.title.toLowerCase()} Washington DC, IT consulting ${audience.title.toLowerCase()} Northern Virginia, managed services ${audience.title} DMV`} />
        <meta name="geo.region" content="US-DC, US-MD, US-VA" />
        <meta name="geo.placename" content="Washington DC, Northern Virginia, Maryland" />
      </Helmet>
      
      <main>
        {/* Hero section */}
        <HeroSection
          title={audience.pageTitle}
          description={audience.shortDescription}
          backgroundImage={audience.heroImage}
          actionLabel="Get a Personalized Solution"
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
                <h2 className="text-3xl font-bold mb-6">DC Metro Area IT Solutions for {audience.title}</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{audience.description}</p>
                  
                  {audience.sections?.map((section, index) => (
                    <div key={index} className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
                
                {audience.challenges && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">Common Challenges</h3>
                    <ul className="space-y-4">
                      {audience.challenges.map((challenge, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * index }}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Recommended Services</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relevantServices.map((service, index) => (
                      <motion.div
                        key={service.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                      >
                        <Card className="h-full service-card">
                          <div className="h-40 relative">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-6 text-white font-bold text-lg">{service.title}</h3>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-neutral-600 mb-4 text-sm">{service.shortDescription}</p>
                            <Link
                              href={`/services/${service.slug}`}
                              className="inline-flex items-center text-primary font-medium text-sm"
                            >
                              Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="glass rounded-3xl shadow-lg p-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">How We Help {audience.title} in the DC Metro Area</h3>
                  
                  <ul className="space-y-4">
                    {audience.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {audience.testimonial && (
                    <div className="mt-8 p-4 bg-secondary rounded-xl">
                      <blockquote className="text-neutral-600 italic mb-4">
                        "{audience.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="mr-3 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-bold">{audience.testimonial.initials}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{audience.testimonial.name}</h4>
                          <p className="text-neutral-600 text-xs">{audience.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <Button className="w-full rounded-xl" size="lg" asChild>
                      <a href="#contact">Get DC Metro IT Support</a>
                    </Button>
                    <p className="text-xs text-center mt-3 text-neutral-500">Serving {audience.title} throughout the DMV region</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">DC Metro IT Support for {audience.title}</h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                ClearPath Tech specializes in custom IT solutions for {audience.title.toLowerCase()} throughout Washington DC, Maryland, and Northern Virginia.
                Contact our team today to discuss your specific technology needs across the DMV region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="#contact">Schedule Free IT Assessment</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <a href="tel:+13017488360">Call 301.748.8360</a>
                </Button>
              </div>
              <p className="text-sm text-neutral-500 mt-6">
                Trusted by {audience.title.toLowerCase()} across Washington DC, Northern Virginia, and throughout Maryland
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
