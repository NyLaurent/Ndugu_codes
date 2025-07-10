"use client";

import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#0066FF] mb-4">
            Rooted in Africa. Building for the world.
          </p>
          <h1 className="text-4xl font-bold text-[#0B1C39] mb-6">
            About Web3 Mates Blockchain Catalyst
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We&apos;ve been told it is not possible to overachieve our
            customers&apos; expectations. We have not reinvented the wheel, we
            decided to build upon it.
          </p>
          <div className="flex gap-4">
            <Link
              href="/get-started"
              className="bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="text-[#0B1C39] px-6 py-3 rounded-lg border border-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-colors flex items-center"
            >
              Contact Us <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/about.svg"
            alt="About Web3 Mates Blockchain"
            width={600}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
