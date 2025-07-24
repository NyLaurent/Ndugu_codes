/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MentorshipPage = () => {
  const mentorshipTracks = [
    {
      title: "Web3 Fundamentals",
      description: "Master blockchain basics, wallets, and core concepts before diving deeper",
      icon: "📚",
      duration: "4 weeks",
      level: "Beginner",
      features: [
        "Blockchain architecture",
        "Crypto wallets & security",
        "Smart contract overview",
        "Decentralized applications"
      ]
    },
    {
      title: "Smart Contract Development",
      description: "Build and deploy production-ready smart contracts on Ethereum and other EVM chains",
      icon: "🛠️",
      duration: "8 weeks",
      level: "Intermediate",
      features: [
        "Solidity programming",
        "Testing & debugging",
        "Deployment strategies",
        "Security best practices"
      ]
    },
    {
      title: "DeFi & dApp Building",
      description: "Create full-stack decentralized applications with frontend integration",
      icon: "💻",
      duration: "12 weeks",
      level: "Advanced",
      features: [
        "DeFi protocols",
        "Web3.js/Ethers.js",
        "UI/UX for dApps",
        "Mainnet deployment"
      ]
    }
  ];

  const mentors = [
    {
      name: "Jonas Sebera",
      role: "Smart Contract Engineer",
      company: "ChainSafe Africa",
      expertise: "Solidity, Security Audits",
      image: "/mentor-1.jpg"
    },
    {
      name: "Jonas Sebera",
      role: "DeFi Architect",
      company: "Binance Africa",
      expertise: "DeFi Protocols, Tokenomics",
      image: "/mentor-2.jpg"
    },
    {
      name: "Kevin Jones",
      role: "Blockchain Educator",
      company: "Crypto Mastery",
      expertise: "EVM, Solidity, Smart Contract Development",
      image: "/mentor-3.jpg"
    }
  ];

  const ArrowAnimation = () => (
    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="mx-2"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
        <path d="M8 12H16M16 12L12 8M16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Accelerate Your <span className="text-blue-600">Web3 Journey</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Personalized 1:1 mentorship from Africa&apos;s top blockchain developers and builders.
        </motion.p>
      </div>

      <motion.section 
        className="mb-16 bg-blue-50 rounded-xl p-8 sm:p-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Web3 Mates Mentorship?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍💻",
                title: "Industry Practitioners",
                description: "Learn from actively building professionals"
              },
              {
                icon: "🌍",
                title: "African Context",
                description: "Relevant examples and case studies"
              },
              {
                icon: "🎯",
                title: "Career Focused",
                description: "Build job-ready skills and portfolio"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mentorship Tracks */}
      <section className="mb-16">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Structured Learning Tracks
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorshipTracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{track.title}</h3>
                <p className="text-gray-600 mb-4">{track.description}</p>
                
                <div className="flex gap-4 mb-6">
                  <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{track.duration}</span>
                  <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{track.level}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {track.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                <Link href="/mentorship/apply" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Meet Your Mentors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn from Africa&apos;s top Web3 builders and educators</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{mentor.role}</p>
                <p className="text-gray-600 text-sm mb-4">{mentor.company}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Expertise:</p>
                  <p className="text-sm text-gray-600">{mentor.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16 bg-gray-50 rounded-xl p-8 sm:p-12">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          How Our Mentorship Works
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {[
            {
              step: "1",
              title: "Application & Matching",
              description: "Complete our application form and we'll match you with the ideal mentor based on your goals and skill level"
            },
            {
              step: "2",
              title: "Onboarding Session",
              description: "Kickoff with an introductory call to align on objectives and create your learning plan"
            },
            {
              step: "3",
              title: "Weekly Sessions",
              description: "Regular 1:1 meetings with hands-on guidance and project reviews"
            },
            {
              step: "4",
              title: "Project Building",
              description: "Apply your learning by building real-world projects with mentor support"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex ${index !== 0 ? "mt-8" : ""}`}
            >
              <div className="flex flex-col items-center mr-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                {index !== 3 && (
                  <div className="w-px h-full bg-gray-300 my-2"></div>
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="bg-blue-600 rounded-xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Accelerate Your Web3 Career?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
          Join our next mentorship cohort and get personalized guidance from industry experts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/mentorship/apply"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Apply for Mentorship
          </Link>
          <Link
            href="/mentors"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Meet All Mentors
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default MentorshipPage;