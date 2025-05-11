import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { services, audiences } from "@shared/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-white text-2xl font-bold">ClearPath</span>
              <span className="text-primary text-2xl font-light">Tech</span>
            </Link>
            <p className="text-white/70 mb-6">Technology solutions that simplify your digital life. Expert service with a personal touch.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Who We Serve</h4>
            <ul className="space-y-3">
              {audiences.slice(0, 5).map((audience) => (
                <li key={audience.slug}>
                  <Link 
                    href={`/audience/${audience.slug}`}
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {audience.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/audiences" className="text-white/70 hover:text-primary transition-colors">
                  View All Audiences
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 mr-3" />
                <span className="text-white/70">123 Tech Avenue<br />Suite 101<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary h-5 w-5 mr-3" />
                <a href="tel:+14155550123" className="text-white/70 hover:text-primary transition-colors">(415) 555-0123</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary h-5 w-5 mr-3" />
                <a href="mailto:info@clearpathtech.com" className="text-white/70 hover:text-primary transition-colors">info@clearpathtech.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} ClearPath Tech Solutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-white/70 text-sm hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/70 text-sm hover:text-primary transition-colors">Terms of Service</a>
            <a href="/sitemap" className="text-white/70 text-sm hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
