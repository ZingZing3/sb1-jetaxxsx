import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Brain, BookHeart, Compass, Coffee, Camera, Laugh, Mic2, Palette, Rocket, Zap, Gift, Heart } from 'lucide-react';
import { NAVIGATION_LINKS } from '../utils/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    const icons = {
      Sparkles, Brain, BookHeart, Compass, Coffee, Camera, 
      Laugh, Mic2, Palette, Rocket, Zap, Gift, Heart
    };
    return icons[iconName] || null;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#4B0082]/95 backdrop-blur-sm shadow-lg' : 'bg-[#4B0082]/80 backdrop-blur-sm'
      }`}
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-white hover:text-[#50C878] transition-colors"
              aria-label="MSzingers Home"
            >
              <Sparkles className="w-8 h-8" />
              <span className="text-2xl font-bold">MSzingers</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1" role="menubar">
              {NAVIGATION_LINKS.map((link, index) => {
                const Icon = getIcon(link.icon);
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 hover:text-[#50C878] transition-colors relative group"
                    role="menuitem"
                  >
                    {Icon && <Icon className="w-4 h-4 mr-2" />}
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-md transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? 
                <X className="w-6 h-6" aria-hidden="true" /> : 
                <Menu className="w-6 h-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="lg:hidden bg-[#4B0082] border-t border-white/10"
          id="mobile-menu" 
          role="menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAVIGATION_LINKS.map((link, index) => {
              const Icon = getIcon(link.icon);
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center px-4 py-3 rounded-md text-base font-medium text-white hover:bg-white/20 hover:text-[#50C878] transition-colors"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon className="w-5 h-5 mr-3" />}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;