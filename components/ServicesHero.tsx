"use client";

import Image from "next/image";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold text-[#0B1C39] mb-6 leading-tight">
              Turning Web3{" "}
              <span className="text-[#0066FF]">Ideas</span> into African Impact
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Whether you're just starting or scaling your vision, we offer
              guidance, training, and collaboration to help bring your
              blockchain solutions to life. The journey begins here.
            </p>
            <div className="flex flex-wrap gap-4">
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

          {/* Right Column - Image */}
          <div className="relative">
            <div className="pt-3 rounded-2xl overflow-hidden">
              <Image
                src="/service.svg"
                alt="Team collaborating on Web3 services"
                width={600}
                height={300}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
