import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { services, audiences } from "@shared/data";
import { useTranslation } from "react-i18next";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="/logos/logo-light.png" 
                alt="ClearPath Tech Solutions Logo" 
                className="h-20 w-auto" 
              />
            </Link>
            <p className="text-white/70 mb-6">Your trusted hands-on tech expert serving the DC Metro area. Specializing in smart home systems, security cameras, computer repairs, custom PC builds, networking, and technology solutions for homes and businesses across Washington DC, Maryland, and Northern Virginia.</p>
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
            <h4 className="text-lg font-semibold mb-6">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/managed-it" className="text-white/70 hover:text-primary transition-colors">
                  Managed IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-white/70 hover:text-primary transition-colors">
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link href="/services/data-backup" className="text-white/70 hover:text-primary transition-colors">
                  Data Backup & Recovery
                </Link>
              </li>
              <li>
                <Link href="/services/network" className="text-white/70 hover:text-primary transition-colors">
                  Network Setup & Support
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-white/70 hover:text-primary transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary transition-colors">
                  View All IT Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Areas Served</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/washington-dc" className="text-white/70 hover:text-primary transition-colors">
                  Washington DC IT Support
                </Link>
              </li>
              <li>
                <Link href="/locations/arlington" className="text-white/70 hover:text-primary transition-colors">
                  Arlington VA IT Services
                </Link>
              </li>
              <li>
                <Link href="/locations/alexandria" className="text-white/70 hover:text-primary transition-colors">
                  Alexandria VA IT Support
                </Link>
              </li>
              <li>
                <Link href="/locations/baltimore" className="text-white/70 hover:text-primary transition-colors">
                  Baltimore MD IT Services
                </Link>
              </li>
              <li>
                <Link href="/locations/bethesda" className="text-white/70 hover:text-primary transition-colors">
                  Bethesda MD IT Support
                </Link>
              </li>
              <li>
                <Link href="/locations/rockville" className="text-white/70 hover:text-primary transition-colors">
                  Rockville MD IT Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-white/70 hover:text-primary transition-colors">
                  All DMV Service Areas
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center mt-3">
                <Phone className="text-primary h-5 w-5 mr-3" />
                <a href="tel:+13017488360" className="text-white/70 hover:text-primary transition-colors">301.748.8360</a>
              </li>
              <li className="flex items-center mt-3">
                <Mail className="text-primary h-5 w-5 mr-3" />
                <a href="mailto:support@clearpathtech.com" className="text-white/70 hover:text-primary transition-colors">support@clearpathtech.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="mb-6 text-center">
            <p className="text-white/70 text-sm">Your trusted DC Metro tech expert for smart home, security, computer repair, and networking solutions across the DMV region.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} ClearPath Tech Solutions. IT Support Services in Washington DC, Maryland, and Northern Virginia. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-white/70 text-sm hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/70 text-sm hover:text-primary transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-white/70 text-sm hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
