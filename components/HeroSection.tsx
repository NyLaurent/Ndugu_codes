import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1C39] mb-6 leading-tight">
            Empowering Africa Through Web3
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Ndugu Codes is a Web3 education and innovation hub dedicated to
            training, connecting, and empowering African developers and
            entrepreneurs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/course"
              className="bg-[#0066FF] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Join The Course
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-8 py-3 rounded-full border border-[#0066FF] hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Collaboration Section */}
          <div className="mt-12">
            <p className="text-gray-500 mb-4">In Collaboration with:</p>
            <div className="flex flex-wrap items-center gap-8">
              <Image
                src="/monday.svg"
                alt="Monday.com"
                width={120}
                height={30}
                className="object-contain"
              />
              <Image
                src="/newRelic.svg"
                alt="New Relic"
                width={120}
                height={30}
                className="object-contain"
              />
              <Image
                src="/paypal.svg"
                alt="PayPal"
                width={100}
                height={30}
                className="object-contain"
              />
               <Image
                src="/pinterest.svg"
                alt="Pinterest"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Image with Perfect Circle */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[550px] h-[550px] flex items-center justify-center">
            {/* Circle Border */}
            <div className="absolute inset-0 rounded-full border-2 border-[#0066FF]" />
            {/* Image Container */}
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/hero.svg"
                alt="Hero Image"
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

export default HeroSection;
