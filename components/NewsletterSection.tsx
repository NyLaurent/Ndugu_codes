'use client';

import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[#0066FF] font-medium mb-4">
            Updates That Empower. Stories That Inspire.
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Stay Connected With Africa&apos;s Web3 Revolution
          </h2>
          <p className="text-gray-600 mb-8">
            Join our mailing list and be the first to hear about training programs, hackathons, community stories, and more.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col text-black sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="px-6 py-3 rounded-full border text-black border-gray-300 flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-[#0066FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection; 