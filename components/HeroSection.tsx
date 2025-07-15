"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0066FF]/10 rounded-full filter blur-3xl opacity-70"></div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Content */}
        <div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-[#0B1C39] mb-6 leading-tight"
            variants={itemVariants}
          >
            Empowering <span className="text-[#0066FF]">Africa</span> Through <span className="text-[#0066FF]">Web3</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 text-xl mb-8 leading-relaxed max-w-lg"
            variants={itemVariants}
          >
            Web3 Mates is a Web3 education and innovation hub dedicated to
            training, connecting, and empowering African developers and
            entrepreneurs in the blockchain revolution.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <Link
              href="/course"
              className="relative bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-medium group overflow-hidden"
            >
              <span className="relative z-10">Join The Course</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#0047CC] to-[#0066FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-4 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Collaboration Section */}
          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Trusted by leading organizations</p>
            <div className="flex flex-wrap items-center gap-8">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/monday.svg"
                  alt="Monday.com"
                  width={120}
                  height={30}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/newRelic.svg"
                  alt="New Relic"
                  width={120}
                  height={30}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={100}
                  height={30}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/pinterest.svg"
                  alt="Pinterest"
                  width={100}
                  height={30}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Image with Animated Circle */}
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[550px] h-[550px] flex items-center justify-center">
            {/* Animated Circle Border */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#0066FF]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Gradient Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#0066FF]/30 blur-md"></div>
            
            {/* Image Container */}
            <motion.div 
              className="relative w-[400px] h-[400px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/hero.svg"
                alt="Hero Image"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;