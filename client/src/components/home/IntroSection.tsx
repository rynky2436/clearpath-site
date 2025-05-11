import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="ClearPath Tech team working on technology solutions"
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology shouldn't be <span className="text-primary">complicated</span>
            </h2>
            <p className="text-neutral-600 text-lg mb-6">
              At ClearPath Tech Solutions, we believe technology should enhance your life, not complicate it. 
              Our hands-on approach ensures you get personalized solutions that work for your specific needs.
            </p>
            <p className="text-neutral-600 text-lg mb-8">
              From smart home setups to enterprise IT infrastructure, our team of certified technicians 
              brings clarity to technology with straightforward solutions and ongoing support.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Expert Technicians",
                  description: "Certified pros with years of experience",
                },
                {
                  title: "Personalized Service",
                  description: "Solutions tailored to your unique needs",
                },
                {
                  title: "Clear Communication",
                  description: "No technical jargon, just clarity",
                },
                {
                  title: "Ongoing Support",
                  description: "We're there long after installation",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
