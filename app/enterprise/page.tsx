"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EnterprisePage = () => {
  const url = process.env.NEXT_PUBLIC_FORMSPREE_URL;
  const partnershipOptions = [
    {
      title: "Talent Pipeline",
      description:
        "Get first access to our top graduates trained in blockchain development, smart contracts, and Web3 technologies.",
      icon: "🎯",
      benefits: [
        "Pre-vetted candidates",
        "Custom training tracks",
        "90-day placement guarantee",
      ],
    },
    {
      title: "Team Upskilling",
      description:
        "Transform your existing team with customized Web3 training programs tailored to your business needs.",
      icon: "📚",
      benefits: [
        "Personalized curriculum",
        "Project-based learning",
        "Certification programs",
      ],
    },
    {
      title: "Strategic R&D",
      description:
        "Collaborate on blockchain solutions with our developers and researchers to solve your business challenges.",
      icon: "🔬",
      benefits: [
        "Dedicated innovation lab",
        "Proof-of-concept development",
        "White-label solutions",
      ],
    },
  ];

  const successMetrics = [
    { value: "3-6x", label: "Faster onboarding" },
    { value: "40%", label: "Cost reduction" },
    { value: "85%+", label: "Retention rate" },
    { value: "100%", label: "Certified teams" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero */}
      <div className="text-center mb-16 lg:mb-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Web3 Talent <span className="text-[#0066FF]">Solutions</span> for
          Enterprises
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bridge the blockchain skills gap and accelerate your Web3 initiatives
          with Africa&apos;s premier developer training hub
        </motion.p>
      </div>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Partnership Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {partnershipOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1C39] mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-[#0066FF] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0066FF]/5 to-[#0047CC]/5 rounded-2xl p-8 sm:p-12 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Proven Enterprise Impact
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 text-center shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#0066FF] mb-2">
                {metric.value}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-8 text-center">
          Enterprise Case Studies
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/stoneprooflabs.png"
                  alt="StoneProofLabs"
                  width={120}
                  height={60}
                  className="h-12 object-contain"
                />
                <span className="text-sm text-gray-500">Web3 Security</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1C39] mb-4">
                Scaling Engineering Capacity 3x
              </h3>
              <p className="text-gray-600 mb-6">
                &quot;Web3 Mates provided us with a pipeline of pre-vetted
                blockchain security specialists that reduced our hiring time by
                70% and allowed us to take on 40% more clients within the first
                year.&quot;
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="bg-[#0066FF]/5 p-3 rounded-lg">
                  <p className="font-medium text-[#0B1C39]">$2M+</p>
                  <p className="text-sm text-gray-600">Annual revenue growth</p>
                </li>
                <li className="bg-[#0066FF]/5 p-3 rounded-lg">
                  <p className="font-medium text-[#0B1C39]">40%</p>
                  <p className="text-sm text-gray-600">Faster audit delivery</p>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-block bg-[#0066FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#0047CC] transition-colors"
              >
                Get Similar Results
              </Link>
            </div>
            {/* BuidlGuidl */}
            <div className="p-8 sm:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <Image
                src="/enterprise-dashboard.svg"
                alt="Enterprise Results"
                width={500}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-2 text-center">
          Start Your Web3 Transformation
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Complete the form below and our enterprise team will contact you
          within 24 hours
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="Company name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="+256 XXX XXX XXX"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="needs"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How can we help?
            </label>
            <select
              id="needs"
              name="partnershipInterest"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              required
            >
              <option value="">Select partnership interest</option>
              <option value="hiring">Hire Developers</option>
              <option value="training">Team Training</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#0066FF] focus:border-[#0066FF]"
              placeholder="Tell us about your Web3 needs..."
            ></textarea>
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Request Consultation
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EnterprisePage;
