import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";
import { services, audiences } from "@shared/data";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const [audiencesSubmenuOpen, setAudiencesSubmenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 glass shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img 
              src="/logos/logo-dark.png" 
              alt="ClearPath Tech Solutions Logo" 
              className="h-20 w-auto" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass rounded-xl shadow-lg">
                <div className="p-3 space-y-1">
                  {services.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors">
                <span>Audiences</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 glass rounded-xl shadow-lg">
                <div className="p-3 grid grid-cols-2 gap-1">
                  {audiences.map((audience) => (
                    <Link 
                      key={audience.slug} 
                      href={`/audience/${audience.slug}`}
                      className="block px-4 py-2 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      {audience.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <a href="#about" className="text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors">Contact</a>
            <a href="#consult" className="bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">Get Started</a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-neutral-900 dark:text-neutral-100 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="glass-dark px-4 pt-2 pb-6 space-y-1">
            <div className="py-3">
              <button 
                className="w-full text-left px-4 py-2 text-white flex justify-between items-center"
                onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesSubmenuOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="py-3">
              <button 
                className="w-full text-left px-4 py-2 text-white flex justify-between items-center"
                onClick={() => setAudiencesSubmenuOpen(!audiencesSubmenuOpen)}
              >
                <span>Audiences</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {audiencesSubmenuOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {audiences.map((audience) => (
                    <Link 
                      key={audience.slug} 
                      href={`/audience/${audience.slug}`}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {audience.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="#about" 
              className="block px-4 py-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4">
              <a 
                href="#consult" 
                className="block w-full bg-primary text-center text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
