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
            Our Impact in Africa&apos;s Web3 Ecosystem
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From training developers to supporting startups, Ndugu Codes is
            driving real change in Africa&apos;s tech landscape. Here&apos;s a
            glimpse of what we&apos;ve achieved together so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactMetric
            number="300K+"
            title="Developers Trained"
            description="Equipped with Web3 skills through bootcamps, workshops, and mentorship programs."
          />
          <ImpactMetric
            number="256"
            title="Jobs Created"
            description="Through skill development, networking, and startup employment in the Web3 ecosystem."
          />
          <ImpactMetric
            number="10k+"
            title="Startups Supported"
            description="Incubated or accelerated through our programs and community collaborations."
          />
          <ImpactMetric
            number="20k+"
            title="Community Members"
            description="Engaged across Africa via Discord, events, and educational programs."
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
