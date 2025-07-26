"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Testimonials = () => {
  const individualTestimonials = [
    {
      name: "Petar Popovic",
      role: "Founder and CEO of ETH-BELGRADE",
      company: "ETH-BELGRADE",
      quote:
        "As a longtime Ethereum ecosystem contributor and founder, I’ve seen many communities—but Web3 Mates stands out for its hands-on mentorship and real-world impact. Their support helped me scale ETH Belgrade and empower the next generation of blockchain builders.",
      image: "/white.jpeg",
      stats: "300% salary increase",
    },
    {
      name: "Michael Lawal",
      role: "Conscious Capitalism Advocate & Web3 Educator",
      company: "Open Source",
      quote:
        "Web3 Mates mentorship is a catalyst for social good. Their guidance enabled me to launch inclusive blockchain education programs, reaching hundreds of aspiring developers and advancing economic empowerment across Africa.",
      image: "/mentor2.jpg",
      stats: "200+ developers empowered",
    },
    {
      name: "Gilbert Muhirwa",
      role: "University Student, Mining Sector",
      company: "University of Rwanda",
      quote:
        "Before Web3 Mates, I was a university student focused on the mining sector, unsure how blockchain could fit into my future. Through their mentorship, I discovered new possibilities, learned smart contract development, and transitioned into a thriving Web3 career. Now, I’m building solutions that bridge traditional industries and blockchain technology.",
      image: "/gilbert.jpeg",
      stats: "Career transformation",
    },
  ];

  // State for expanded testimonials
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // State for expanded company testimonials
  const [expandedCompany, setExpandedCompany] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpandCompany = (index: number) => {
    setExpandedCompany((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const companyTestimonials = [
    {
      name: "AyaHQ",
      logo: "/AyaHQ-blue.png",
      industry: "Web3 Community Platform",
      testimonial:
        "Web3 Mates has been a valuable partner in growing our African developer community and facilitating meaningful connections across the continent.",
      stats: "Community growth",
    },
    {
      name: "Web3Bridge",
      logo: "/web3bridge.png",
      industry: "Web3 Education",
      testimonial:
        "The mentorship and collaboration with Web3 Mates helped us reach more learners and deliver hands-on blockchain education in Africa.",
      stats: "Expanded reach",
    },
    {
      name: "BuidlGuidl",
      logo: "/logo-color.svg",
      industry: "Ethereum Builders Guild",
      testimonial:
        "Web3 Mates has contributed passionate developers and fresh perspectives to our builder community, strengthening our collective impact.",
      stats: "Stronger builder network",
    },
  ];

  const individualCarouselVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear" as any,
      },
    },
  };

  const companyCarouselVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 15,
        ease: "linear" as any,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transformation <span className="text-[#0066FF]">Stories</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          How we&apos;re empowering individuals and revolutionizing companies
          through Web3 education
        </motion.p>
      </div>

      <section className="mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-6 sm:mb-8 text-center">
          Developer Success Stories
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            variants={individualCarouselVariants}
            animate="animate"
          >
            {[...individualTestimonials, ...individualTestimonials].map(
              (testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[300px] max-w-[280px] sm:max-w-[300px]"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#0B1C39]">
                        {testimonial.name}
                      </h3>
                      <p className="text-[#0066FF] text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 italic">
                    {expanded[index]
                      ? `"${testimonial.quote}"`
                      : testimonial.quote.length > 120
                        ? `"${testimonial.quote.substring(0, 120)}..."`
                        : `"${testimonial.quote}"`}
                  </blockquote>
                  {testimonial.quote.length > 120 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-600 hover:text-blue-800 text-xs font-medium mb-2"
                    >
                      {expanded[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <div className="bg-[#0066FF]/10 px-2 sm:px-3 py-1 rounded-lg inline-block">
                    <p className="text-[#0066FF] font-medium text-xs">
                      {testimonial.stats}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      <section className="mb-10 sm:mb-12 lg:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1C39] mb-6 sm:mb-8 text-center">
          Enterprise Impact Stories
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            variants={companyCarouselVariants}
            animate="animate"
          >
            {[...companyTestimonials, ...companyTestimonials].map(
              (company, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-[#0066FF]/20 shadow-sm hover:shadow-md transition-shadow min-w-[280px] sm:min-w-[300px] max-w-[280px] sm:max-w-[300px]"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={40}
                        height={40}
                        className="object-contain max-h-8 sm:max-h-10"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B1C39]">
                        {company.name}
                      </h3>
                      <p className="text-[#0066FF] text-xs sm:text-sm">
                        {company.industry}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    {expandedCompany[index]
                      ? `"${company.testimonial}"`
                      : company.testimonial.length > 120
                        ? `"${company.testimonial.substring(0, 120)}..."`
                        : `"${company.testimonial}"`}
                  </p>
                  {company.testimonial.length > 120 && (
                    <button
                      onClick={() => toggleExpandCompany(index)}
                      className="text-blue-600 hover:text-blue-800 text-xs font-medium mb-2"
                    >
                      {expandedCompany[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <div className="bg-[#0066FF]/10 px-2 sm:px-3 py-1 rounded-lg inline-block">
                    <p className="text-[#0066FF] font-medium text-xs">
                      {company.stats}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0B1C39] mb-4 sm:mb-6">
          Ready to transform your team or career?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/mentorship"
            className="bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-6 sm:px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Start Learning
          </Link>
          <Link
            href="/enterprise"
            className="bg-white text-[#0066FF] px-6 sm:px-8 py-3 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium text-sm sm:text-base"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
