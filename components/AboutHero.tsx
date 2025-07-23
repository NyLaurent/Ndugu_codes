"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#0066FF] mb-3 sm:mb-4 text-xl sm:text-xl">
            Rooted in Africa. Building for the world.
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            About Web3 Mates Blockchain Catalyst
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
            We&apos;ve been told it is not possible to overachieve our
            customers&apos; expectations. We have not reinvented the wheel, we
            decided to build upon it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/mentorship"
              className="bg-[#0066FF] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base text-center"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="text-[#0B1C39] px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors flex items-center justify-center text-sm sm:text-base"
            >
              Contact Us <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <Image
            src="/about.svg"
            alt="About Web3 Mates Blockchain"
            width={600}
            height={500}
            className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
