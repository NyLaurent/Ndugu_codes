import Image from "next/image";

const InnovateSection = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="text-[#0066FF] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
              Be Part of Africa&apos;s Web3 Evolution
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-3 sm:mb-4 leading-tight">
              Learn. Build. Dream Big.
              <br />
              Together, Let&apos;s Shape
              <br />
              Africa&apos;s Digital Future.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Web3 Mates is an emerging community for dreamers and doers in the
              Web3 space. Whether you&apos;re just starting or eager to
              collaborate, we&apos;re laying the foundation for a hub where
              developers learn, explore, and build solutions inspired by African
              needs.
            </p>
            <a
              href="/mentorship"
              className="inline-flex items-center bg-[#0066FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Join the journey <span className="ml-2">→</span>
            </a>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              <Image
                src="/innovate.svg"
                alt="Web3 Innovation Illustration"
                fill
                className="object-contain rounded-xl"
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
