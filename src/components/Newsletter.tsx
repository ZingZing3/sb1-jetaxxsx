import React, { useState } from 'react';
import Button from './ui/Button';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-[#4B0082] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Adventure
          </h2>
          <p className="text-[#E6E6FA] text-lg mb-8">
            Get monthly stories, travel tales, and lessons learned from a life of 
            unexpected adventures. No filters, just real stories and occasional zingers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full bg-white text-[#36454F] flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-[#50C878]"
              required
            />
            <Button type="submit" icon={Mail}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;