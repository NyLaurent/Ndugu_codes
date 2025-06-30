import Image from "next/image";

const InnovateSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-[#0066FF] font-medium mb-4">
              Join Africa&apos;s Web3 Movement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C39] mb-4 leading-tight">
              Learn. Build. Innovate.
              <br />
              Together, We&apos;re Shaping
              <br />
              Africa&apos;s Digital Future.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Gain real-world skills, connect with like-minded innovators, and
              create impactful Web3 solutions rooted in African challenges and
              opportunities.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-[#0066FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Start now <span className="ml-2">→</span>
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/innovate.svg"
                alt="Web3 Innovation Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateSection;
