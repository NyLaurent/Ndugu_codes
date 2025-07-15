"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SolutionsPage = () => {
  const challenges = [
    {
      title: "Training Web3 Developers",
      description: "African developers need accessible, high-quality Web3 education to master blockchain technologies.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L14.5 9.5H19.5L15.5 13L17 18.5L12 15.5L7 18.5L8.5 13L4.5 9.5H9.5L12 4Z" fill="#0066FF" />
        </svg>
      ),
      solution: {
        title: "Hands-On Bootcamps",
        description: "Our bootcamps deliver practical training in blockchain, smart contracts, and DeFi with African-focused projects.",
        features: [
          "Smart contract development",
          "Blockchain integrations",
          "Local payment solutions"
        ],
        image: "/talent-solution.jpg"
      }
    },
    {
      title: "Isolated Builders",
      description: "Developers often work in silos without community support or collaboration opportunities.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#0066FF" />
        </svg>
      ),
      solution: {
        title: "Vibrant Community Hub",
        description: "Connect with 1000+ African Web3 developers through our platforms and events.",
        features: [
          "Monthly hackathons",
          "Mastermind groups",
          "Collaboration portals"
        ],
        image: "/community-solution.jpg"
      }
    },
    {
      title: "Industry Disconnect",
      description: "Companies struggle to find Web3 talent while graduates lack clear job pathways.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#0066FF" />
        </svg>
      ),
      solution: {
        title: "Talent Pipeline",
        description: "We bridge the gap between trained developers and hiring companies.",
        features: [
          "Job matching platform",
          "Company showcases",
          "Interview preparation"
        ],
        image: "/pipeline-solution.jpg"
      }
    }
  ];

  const successStories = [
    {
      name: "GrowEasy",
      logo: "/groweasy-logo.svg",
      result: "Increased farmer payments by 40%",
      story: "Trained 3 developers who built a blockchain solution for agricultural supply chains."
    },
    {
      name: "PayPulse",
      logo: "/paypulse-logo.svg",
      result: "$1.2M in seed funding",
      story: "Co-founded by 2 Web3 Mates alumni specializing in cross-border payments."
    },
    {
      name: "SecureChain",
      logo: "/securechain-logo.svg",
      result: "3x engineering capacity",
      story: "Hired 5 graduates who reduced smart contract audit times by 30%."
    }
  ];

  const ArrowAnimation = ({ reversed = false }) => (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      className="hidden lg:flex items-center justify-center"
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        className={`text-blue-600 ${reversed ? "rotate-180" : ""}`}
      >
        <path 
          d="M8 12H16M16 12L12 8M16 12L12 16" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Solving Africa&apos;s <span className="text-blue-600">Web3 Challenges</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We address critical gaps in Africa&apos;s blockchain revolution through education, community, and opportunity.
        </p>
      </div>

      <section className="mb-16 space-y-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Solutions Framework
        </h2>
        {challenges.map((item, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-md max-w-[450px] mx-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-50 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-600 font-medium">The Web3 Mates Approach</p>
                </div>
              </motion.div>
            </div>

            <ArrowAnimation reversed={index % 2 !== 0} />

            <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-md max-w-[450px] mx-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{item.solution.description}</p>
                <div className="space-y-3 mb-6">
                  {item.solution.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="relative h-56 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src={item.solution.image}
                    alt={item.solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Proven Impact Across Africa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm max-w-[400px] mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Image
                  src={story.logo}
                  alt={story.name}
                  width={100}
                  height={50}
                  className="h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">{story.name}</h3>
              <div className="bg-blue-50 px-4 py-2 rounded-lg mb-4 w-full text-center">
                <p className="text-blue-600 font-medium text-sm">{story.result}</p>
              </div>
              <p className="text-gray-600 text-sm text-center">{story.story}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 rounded-xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Be Part of the Solution?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
          Whether you&apos;re a developer looking to skill up or a company seeking talent, we have a solution for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/course"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Explore Programs
          </Link>
          <Link
            href="/enterprise"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default SolutionsPage;