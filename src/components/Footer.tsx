import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { COLORS, SOCIAL_LINKS } from '../utils/constants';

const Footer = () => {
  const socialLinks = [
    {
      icon: () => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      href: `https://tiktok.com/${SOCIAL_LINKS.tiktok}`,
      label: 'Follow on TikTok'
    },
    {
      icon: Youtube,
      href: SOCIAL_LINKS.youtube,
      label: 'Subscribe on YouTube'
    },
    {
      icon: Twitter,
      href: `https://twitter.com/${SOCIAL_LINKS.twitter.replace('@', '')}`,
      label: 'Follow on Twitter'
    },
    {
      icon: Facebook,
      href: `https://facebook.com/${SOCIAL_LINKS.facebook}`,
      label: 'Follow on Facebook'
    },
    {
      icon: Instagram,
      href: `https://instagram.com/${SOCIAL_LINKS.instagram}`,
      label: 'Follow on Instagram'
    },
    {
      icon: Mail,
      href: `mailto:${SOCIAL_LINKS.email}`,
      label: 'Send an email'
    }
  ];

  return (
    <footer className="bg-[#4B0082] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">MSzingers</h2>
            <p className="text-[#E6E6FA] mt-2">Unfiltered. Unexpected. Unstoppable.</p>
          </div>

          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#50C878] transition-colors duration-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className="text-center text-sm text-[#E6E6FA] mb-8">
            <p>Follow ZiggyZee:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href={`https://instagram.com/${SOCIAL_LINKS.ziggyInstagram.replace('@', '')}`}
                aria-label="Follow ZiggyZee on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#50C878] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://tiktok.com/${SOCIAL_LINKS.ziggyTiktok}`}
                aria-label="Follow ZiggyZee on TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#50C878] transition-colors duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-[#E6E6FA]">
            <p>&copy; {new Date().getFullYear()} MSzingers. All rights reserved.</p>
            <p className="mt-2">
              <a href="/privacy" className="hover:text-[#50C878]">Privacy Policy</a>
              {' • '}
              <a href="/terms" className="hover:text-[#50C878]">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;