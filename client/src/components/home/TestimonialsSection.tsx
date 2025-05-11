import { motion } from "framer-motion";
import { QuoteIcon, Star, StarHalf } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ClearPath completely transformed my home office setup. Their team installed a custom PC, network security, and smart lighting that has made working from home a dream. Their ongoing support is just as impressive.",
      author: "Michael Robinson",
      role: "Remote Marketing Director",
      initials: "MR",
      stars: 5,
    },
    {
      quote: "As a small business owner, I needed reliable IT without a full-time staff. ClearPath set up our entire network, security systems, and provides ongoing maintenance. Their response time is exceptional and they explain everything clearly.",
      author: "Jennifer Torres",
      role: "Cafe Owner",
      initials: "JT",
      stars: 5,
    },
    {
      quote: "I was intimidated by smart home technology until I found ClearPath. They designed a system that's both powerful and user-friendly. The automated routines they set up for my Airbnb property have saved me countless hours of management.",
      author: "David Kim",
      role: "Airbnb Superhost",
      initials: "DK",
      stars: 4.5,
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-neutral-600 text-lg">
            Real experiences from people we've helped with their technology needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass rounded-3xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary text-2xl mr-2">
                  <QuoteIcon className="h-6 w-6" />
                </div>
                <div className="text-yellow-400 flex">
                  {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  {testimonial.stars % 1 !== 0 && (
                    <StarHalf className="h-4 w-4 fill-current" />
                  )}
                </div>
              </div>
              <blockquote className="text-neutral-600 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
