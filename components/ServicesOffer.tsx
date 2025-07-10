"use client";

import Image from "next/image";

const offerings = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#0066FF]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    title: "Web3 Startup Clinics",
    description:
      "1-on-1 advisory sessions for early-stage founders on smart contracts, legal setup, and growth strategy.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#0066FF]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    title: "Funding Matchmaking",
    description:
      "We connect promising Web3 ideas with regional grant programs, impact investors, and accelerators.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#0066FF]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    title: "Tokenomics Design Support",
    description:
      "Practical help structuring your token economy for real utility, community alignment, and long-term health.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#0066FF]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
      </svg>
    ),
    title: "Pitch Readiness & Demo Prep",
    description:
      "Support with storytelling, deck creation, and demo-day confidence—so you pitch like a pro.",
  },
];

const ServicesOffer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <Image
              src="/offer.svg"
              alt="Web3 Mates Web3 Offerings Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#0B1C39] mb-6">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Built for African builders, our offerings are designed to meet you
              where you are—whether you&apos;re refining an idea or preparing to
              scale.
            </p>

            <div className="space-y-8">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#EEF5FF] p-3 rounded-lg">
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0B1C39] mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
