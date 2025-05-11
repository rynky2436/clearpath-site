import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    
    // Clear error when user starts typing
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Received",
        description: "Thank you for your interest. We'll contact you soon to discuss your technology needs.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="consult" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-dark rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80"
                alt="ClearPath Tech consultation"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need IT Support in Maryland?</h2>
              <p className="text-white/80 mb-8">
                Schedule a free consultation with our local experts to discuss your business technology needs, from managed IT services to website development and cybersecurity.
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.name ? "border-red-500" : "border-white/20"
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.email ? "border-red-500" : "border-white/20"
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.service ? "border-red-500" : "border-white/20"
                    } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50`}
                  >
                    <option value="" className="bg-neutral-900">Select a service</option>
                    <option value="managed-it" className="bg-neutral-900">Managed IT Services</option>
                    <option value="it-support" className="bg-neutral-900">Small Business IT Support</option>
                    <option value="cybersecurity" className="bg-neutral-900">Cybersecurity Services</option>
                    <option value="data-backup" className="bg-neutral-900">Data Backup & Recovery</option>
                    <option value="network" className="bg-neutral-900">Network Setup & Support</option>
                    <option value="cloud" className="bg-neutral-900">Cloud Services</option>
                    <option value="business-email" className="bg-neutral-900">Business Email Setup</option>
                    <option value="microsoft-365" className="bg-neutral-900">Microsoft 365 Support</option>
                    <option value="website" className="bg-neutral-900">Website Development</option>
                    <option value="remote-support" className="bg-neutral-900">Remote IT Help Desk</option>
                    <option value="voip" className="bg-neutral-900">VoIP Setup & Support</option>
                    <option value="other" className="bg-neutral-900">Other IT Services</option>
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    rows={4}
                    placeholder="Tell us about your project or needs"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary font-medium px-6 py-4 rounded-xl hover:bg-white/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Processing..." : "Schedule Free IT Assessment"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
