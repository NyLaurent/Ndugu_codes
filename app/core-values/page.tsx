"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CoreValues = () => {
  const values = [
    {
      title: "Empowerment Through Education",
      description: "We believe in equipping African developers with practical Web3 skills through hands-on learning and real-world projects.",
      icon: "🎓",
      color: "bg-[#0066FF]/10"
    },
    {
      title: "Community First",
      description: "Our strength comes from collaborative learning, shared knowledge, and supporting each member's growth journey.",
      icon: "🤝",
      color: "bg-[#FFD700]/10"
    },
    {
      title: "Innovation Without Borders",
      description: "We break down geographical and technological barriers to foster groundbreaking Web3 solutions for Africa.",
      icon: "🌍",
      color: "bg-[#00C781]/10"
    },
    {
      title: "Integrity in Blockchain",
      description: "We uphold transparency, accountability, and ethical standards in all our Web3 initiatives and teachings.",
      icon: "🔗",
      color: "bg-[#FF6B6B]/10"
    },
    {
      title: "Sustainable Growth",
      description: "We're committed to creating lasting impact through mentorship programs that continue beyond initial training.",
      icon: "🌱",
      color: "bg-[#A162F7]/10"
    },
    {
      title: "African-Centric Solutions",
      description: "We focus on developing Web3 applications that solve real African challenges in finance, identity, and more.",
      icon: "🦁",
      color: "bg-[#FF9F43]/10"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#0066FF]">Core Values</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These principles guide everything we do at Web3 Mates to empower Africa&apos;s blockchain revolution
        </motion.p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`p-6 sm:p-8 rounded-xl ${value.color} border border-transparent hover:border-[#0066FF]/30 transition-all`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{value.icon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0B1C39] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 sm:mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1C39] mb-4">
          Ready to join our values-driven community?
        </h3>
        <Link
          href="/mentorship"
          className="inline-block bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
        >
          Start Your Web3 Journey
        </Link>
      </motion.div>

      {/* Team Values Illustration */}
      <motion.div 
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Image
          src="/values-illustration.svg"
          alt="Team values illustration"
          width={600}
          height={400}
          className="w-full max-w-2xl"
        />
      </motion.div>
    </div>
  );
};

export default CoreValues;