"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  const individualTestimonials = [
    {
      name: "Amina Diallo",
      role: "Web3 Developer",
      company: "Chainlink Africa",
      quote: "Web3 Mates turned me from a beginner to a smart contract developer in 6 months, landing me a dream job.",
      image: "/amina.jpeg",
      stats: "300% salary increase"
    },
    {
      name: "Kwame Ofori",
      role: "Blockchain Educator",
      company: "Accra Web3 Academy",
      quote: "Their mentorship helped me launch a Web3 education platform, training 200+ developers in Ghana.",
      image: "/kwame.jpeg",
      stats: "200+ developers trained"
    },
    {
      name: "Ngozi Eze",
      role: "DeFi Specialist",
      company: "Yellow Card",
      quote: "From zero coding to leading DeFi product development at Africa's largest crypto exchange in 8 months.",
      image: "/ngozi.jpeg",
      stats: "Promoted in 8 months"
    },
    {
      name: "Jabari Mbeki",
      role: "DAO Architect",
      company: "AfriDAO",
      quote: "I went from farming to building DAOs, thanks to Web3 Mates' project-based learning for African agriculture.",
      image: "/jabari.jpeg",
      stats: "Launched 3 DAOs"
    }
  ];

  const companyTestimonials = [
    {
      name: "StoneProofLabs",
      logo: "/stoneproof-logo.svg",
      industry: "Web3 Security",
      testimonial: "Web3 Mates tripled our engineering capacity, boosting audit speed by 40% and sales by $2M+.",
      stats: "$2M+ revenue growth"
    },
    {
      name: "AfriPay",
      logo: "/afripay-logo.svg",
      industry: "Fintech",
      testimonial: "Their training enabled us to launch a DeFi payments platform 3 months early with 50K+ users.",
      stats: "50K+ new users"
    },
    {
      name: "BlockHarvest",
      logo: "/blockharvest-logo.svg",
      industry: "Agritech",
      testimonial: "We built a decentralized supply chain for farmers, cutting costs by 30% with their support.",
      stats: "30% cost reduction"
    }
  ];

  // Animation for individual testimonials (left to right)
  const individualCarouselVariants = {
    animate: {
      x: [0, -100 * individualTestimonials.length],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    }
  };

  // Animation for company testimonials (right to left)
  const companyCarouselVariants = {
    animate: {
      x: [-100 * companyTestimonials.length, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transformation <span className="text-[#0066FF]">Stories</span>
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          How we're empowering individuals and revolutionizing companies through Web3 education
        </motion.p>
      </div>

      {/* Individual Testimonials */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Developer Success Stories
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            variants={individualCarouselVariants}
            animate="animate"
          >
            {[...individualTestimonials, ...individualTestimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-w-[300px] max-w-[300px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0B1C39]">{testimonial.name}</h3>
                    <p className="text-[#0066FF] text-xs">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm mb-4 italic line-clamp-3">"{testimonial.quote}"</blockquote>
                <div className="bg-[#0066FF]/10 px-3 py-1 rounded-lg inline-block">
                  <p className="text-[#0066FF] font-medium text-xs">{testimonial.stats}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Testimonials */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Enterprise Impact Stories
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            variants={companyCarouselVariants}
            animate="animate"
          >
            {[...companyTestimonials, ...companyTestimonials].map((company, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#0066FF]/20 shadow-sm hover:shadow-md transition-shadow min-w-[300px] max-w-[300px]"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="object-contain max-h-10"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0B1C39]">{company.name}</h3>
                    <p className="text-[#0066FF] text-xs">{company.industry}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">"{company.testimonial}"</p>
                <div className="bg-[#0066FF]/10 px-3 py-1 rounded-lg inline-block">
                  <p className="text-[#0066FF] font-medium text-xs">{company.stats}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.div
        className="mt-12 sm:mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1C39] mb-6">
          Ready to transform your team or career?
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/course"
            className="bg-gradient-to-r from-[#0066FF] to-[#ителю
            [#0047CC] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
          >
            Start Learning
          </Link>
          <Link
            href="/enterprise"
            className="bg-white text-[#0066FF] px-8 py-3 rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF]/5 hover:shadow-md transition-all duration-300 font-medium"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;