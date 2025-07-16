"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MentorsPage = () => {
  const mentors = [
    {
      name: "Jonas Sebera",
      role: "Smart Contract Engineer",
      company: "ChainSafe Africa",
      expertise: "Solidity, Security Audits, EVM Chains",
      image: "/mentor-1.jpg",
      bio: "Former Ethereum core contributor with 5+ years experience in smart contract development and security audits.",
      availability: "Accepting new mentees",
      rate: "$100/hr",
      track: "Smart Contract Development"
    },
    {
      name: "Jonas Sebera",
      role: "DeFi Architect",
      company: "Binance Africa",
      expertise: "DeFi Protocols, Tokenomics, DAOs",
      image: "/mentor-2.jpg",
      bio: "Built multiple TVL-leading DeFi protocols in Africa. Specializes in protocol design and economic mechanisms.",
      availability: "Waitlist only",
      rate: "$150/hr",
      track: "DeFi & dApp Building"
    },
    {
      name: "Jonas Sebera",
      role: "Blockchain Educator",
      company: "Web3Bridge",
      expertise: "Onboarding, Technical Writing, Community Building",
      image: "/mentor-3.jpg",
      bio: "Has onboarded 1000+ developers to Web3 through immersive programs and curriculum development.",
      availability: "Accepting new mentees",
      rate: "$80/hr",
      track: "Web3 Fundamentals"
    },
    {
      name: "Jonas Sebera",
      role: "Blockchain Infrastructure Engineer",
      company: "Luno Nigeria",
      expertise: "Node Operation, Indexing, Blockchain APIs",
      image: "/mentor-4.jpg",
      bio: "Specializes in blockchain infrastructure and backend systems for Web3 applications.",
      availability: "Accepting new mentees",
      rate: "$120/hr",
      track: "Smart Contract Development"
    },
    {
      name: "Jonas Sebera",
      role: "NFT & Creator Economy Specialist",
      company: "SuperRare Africa",
      expertise: "NFTs, IP Rights, Creator Monetization",
      image: "/mentor-5.jpg",
      bio: "Helps artists and creators navigate the NFT space with technical and business guidance.",
      availability: "Limited availability",
      rate: "$90/hr",
      track: "DeFi & dApp Building"
    },
    {
      name: "Jonas Sebera",
      role: "ZK Proof Researcher",
      company: "ZCash Foundation",
      expertise: "Zero-Knowledge Proofs, Cryptography, Privacy",
      image: "/mentor-6.jpg",
      bio: "Working on cutting-edge privacy solutions for blockchain networks through advanced cryptography.",
      availability: "Not currently accepting",
      rate: "$200/hr",
      track: "Advanced Topics"
    }
  ];

  // Filter options state
  const [filters, setFilters] = useState({
    track: "",
    availability: "",
    search: ""
  });

  const filteredMentors = mentors.filter(mentor => {
    return (
      (filters.track === "" || mentor.track === filters.track) &&
      (filters.availability === "" || 
       (filters.availability === "available" && mentor.availability.includes("Accepting")) ||
       (filters.availability === "waitlist" && mentor.availability.includes("Waitlist"))) &&
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
          Learn directly from Africa&apos;s top blockchain builders, researchers, and educators.
        </motion.p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={filters.availability}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">All Mentors</option>
              <option value="available">Accepting New Mentees</option>
              <option value="waitlist">Waitlist Only</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => setFilters({
                track: "",
                availability: "",
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
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600">{mentor.company}</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      mentor.availability.includes("Accepting") ? "bg-green-500" : 
                      mentor.availability.includes("Waitlist") ? "bg-yellow-500" : "bg-red-500"
                    }`}></span>
                    {mentor.availability}
                  </p>
                </div>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {mentor.rate}
                </span>
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
                {mentor.availability.includes("Accepting") && (
                  <Link
                    href="/mentorship/apply"
                    className="flex-1 text-center bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    Apply Now
                  </Link>
                )}
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
              availability: "",
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