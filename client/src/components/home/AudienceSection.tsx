import { motion } from "framer-motion";
import { Link } from "wouter";
import { audiences } from "@shared/data";
import { 
  Home,
  Store,
  Users,
  Key,
  Laptop,
  Heart,
  Globe,
  Activity,
  GraduationCap,
  Building
} from "lucide-react";

export default function AudienceSection() {
  return (
    <section id="audiences" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Serve</h2>
          <p className="text-neutral-600 text-lg">
            Tailored technology solutions for diverse clients, each with unique requirements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <Link
                href={`/audience/${audience.slug}`}
                className="audience-tile glass rounded-2xl p-6 text-center transition-all duration-300 block"
              >
                <div className="bg-secondary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto">
                  <span className="text-primary">
                    {audience.iconName === "Home" && <Home className="h-6 w-6" />}
                    {audience.iconName === "Store" && <Store className="h-6 w-6" />}
                    {audience.iconName === "Users" && <Users className="h-6 w-6" />}
                    {audience.iconName === "Key" && <Key className="h-6 w-6" />}
                    {audience.iconName === "LaptopCode" && <Laptop className="h-6 w-6" />}
                    {audience.iconName === "Heart" && <Heart className="h-6 w-6" />}
                    {audience.iconName === "Globe" && <Globe className="h-6 w-6" />}
                    {audience.iconName === "Activity" && <Activity className="h-6 w-6" />}
                    {audience.iconName === "GraduationCap" && <GraduationCap className="h-6 w-6" />}
                    {audience.iconName === "Building" && <Building className="h-6 w-6" />}
                  </span>
                </div>
                <h3 className="font-semibold">{audience.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
