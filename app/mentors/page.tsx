"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MentorsPage = () => {
  const mentors = [
    {
      name: "Petar Popovic",
      role: "Smart Contract Engineer && Founder @EthBelgrade",
      company: "ETH BELGRADE",
      expertise: "Solidity, Security Audits, EVM Chains",
      image: "/white.jpeg",
      bio: "Former Ethereum core contributor with 5+ years experience in smart contract development and security audits. Specializes in building secure, gas-optimized smart contracts and conducting comprehensive security audits for DeFi protocols.",
      track: "Smart Contract Development"
    },
    {
      name: "Michael Lawal",
      role: "Conscious Capitalism Advocate",
      company: "Open Source",
      expertise: "DeFi Protocols, Tokenomics, DAOs",
      image: "/mentor2.jpg",
      bio: "Pioneering tech for good initiatives and economic inclusion through blockchain technology. Advocates for sustainable development goals (SDGs) and builds solutions that bridge traditional finance with decentralized systems.",
      track: "DeFi & dApp Building"
    },
    {
      name: "Kevin Jones",
      role: "Blockchain Educator",
      company: "Crypto Mastery",
      expertise: "Onboarding, Technical Writing, Community Building",
      image: "/kevin-jones.jpeg",
      bio: "Longtime contributor to the Ethereum ecosystem and founder of Crypto Mastery. Co-founded BuidlGuidl and has onboarded 1000+ developers to Web3 through immersive programs and curriculum development. Passionate about making blockchain education accessible to everyone.",
      track: "Web3 Fundamentals, Solidity and smart contract development"
    },
   
  ];

  // Filter options state
  const [filters, setFilters] = useState({
    track: "",
    search: ""
  });

  const filteredMentors = mentors.filter(mentor => {
    return (
      (filters.track === "" || mentor.track === filters.track) &&
      (filters.search === "" || 
       mentor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
       mentor.expertise.toLowerCase().includes(filters.search.toLowerCase())))
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Meet Our <span className="text-blue-600">Web3 Mentors</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Learn directly from Africa&apos;s top blockchain builders, researchers, and educators in our free community.
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Mentors
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Name or expertise"
            />
          </div>
          
          <div>
            <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-1">
              Track
            </label>
            <select
              id="track"
              name="track"
              value={filters.track}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">All Tracks</option>
              <option value="Web3 Fundamentals">Web3 Fundamentals</option>
              <option value="Smart Contract Development">Smart Contract Development</option>
              <option value="DeFi & dApp Building">DeFi & dApp Building</option>
              <option value="Advanced Topics">Advanced Topics</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                track: "",
                search: ""
              })}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-60 w-full">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <p className="text-blue-300 font-medium">{mentor.role}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <p className="text-sm text-gray-600">{mentor.company}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Expertise:</h4>
                <p className="text-sm text-gray-600">{mentor.expertise}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Track:</h4>
                <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                  {mentor.track}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-6 line-clamp-3">{mentor.bio}</p>
              
              <div className="flex space-x-3">
                <Link
                  href={`/mentors/${mentor.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  View Profile
                </Link>
                <Link
                  href="/mentorship/apply"
                  className="flex-1 text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredMentors.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="mx-auto w-24 h-24 text-gray-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No mentors found</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            Try adjusting your filters or check back later as we onboard new mentors regularly.
          </p>
          <button
            onClick={() => setFilters({
              track: "",
              search: ""
            })}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </motion.div>
      )}

      <motion.section
        className="mt-16 bg-blue-600 rounded-xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Want to Become a Mentor?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
          Join our network of expert mentors and help shape the next generation of Web3 builders in Africa.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/mentors/apply"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Apply to Mentor
          </Link>
          <Link
            href="/mentorship"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Learn About Mentorship
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default MentorsPage;