import React from "react";

const ImpactMetric = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-lg text-center">
    <div className="text-[#0066FF] text-4xl font-bold mb-4">{number}</div>
    <h3 className="text-[#9747FF] text-lg font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ImpactSection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            The Impact We’re Building for Africa&apos;s Web3 Future
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a growing hub, Ndugu-codes is setting out to empower Africa’s next
            generation of Web3 builders. These are the goals we’re working toward
            through community, collaboration, and code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactMetric
            number="300K+"
            title="Developers to Empower"
            description="We aim to train thousands in blockchain, smart contracts, and dApp development."
          />
          <ImpactMetric
            number="256"
            title="Jobs to Facilitate"
            description="Our mission includes creating pathways to meaningful Web3 employment opportunities."
          />
          <ImpactMetric
            number="10K+"
            title="Startups to Support"
            description="We’re building programs to incubate and mentor founders building on decentralized tech."
          />
          <ImpactMetric
            number="20K+"
            title="Community to Grow"
            description="Our vision is to unite learners, developers, and builders across Africa and beyond."
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
