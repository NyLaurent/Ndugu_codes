import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 pt-20 sm:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-[#0B1C39] mb-4 sm:mb-6 leading-tight">
            Empowering Africa Through Web3
          </h1>
          <p className="text-gray-600 text-base sm:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Web3 Mates is a Web3 education and innovation hub dedicated to
            training, connecting, and empowering African developers and
            entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="/course"
              className="bg-[#0066FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium text-center"
            >
              Join The Course
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#0066FF] px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[#0066FF] hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Collaboration Section */}
          <div className="mt-8 sm:mt-12">
            <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">In Collaboration with:</p>
            <div className="relative overflow-hidden">
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 animate-scroll">
                <Image
                  src="/monday.svg"
                  alt="Monday.com"
                  width={80}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[100px] sm:h-[25px] lg:w-[120px] lg:h-[30px]"
                />
                <Image
                  src="/newRelic.svg"
                  alt="New Relic"
                  width={80}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[100px] sm:h-[25px] lg:w-[120px] lg:h-[30px]"
                />
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={70}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[90px] sm:h-[25px] lg:w-[100px] lg:h-[30px]"
                />
                <Image
                  src="/pinterest.svg"
                  alt="Pinterest"
                  width={70}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[90px] sm:h-[25px] lg:w-[100px] lg:h-[30px]"
                />
                {/* Duplicate logos for seamless loop */}
                <Image
                  src="/monday.svg"
                  alt="Monday.com"
                  width={80}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[100px] sm:h-[25px] lg:w-[120px] lg:h-[30px]"
                />
                <Image
                  src="/newRelic.svg"
                  alt="New Relic"
                  width={80}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[100px] sm:h-[25px] lg:w-[120px] lg:h-[30px]"
                />
                <Image
                  src="/paypal.svg"
                  alt="PayPal"
                  width={70}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[90px] sm:h-[25px] lg:w-[100px] lg:h-[30px]"
                />
                <Image
                  src="/pinterest.svg"
                  alt="Pinterest"
                  width={70}
                  height={20}
                  className="object-contain flex-shrink-0 sm:w-[90px] sm:h-[25px] lg:w-[100px] lg:h-[30px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image with Perfect Circle */}
        <div className="relative flex items-center justify-center order-first lg:order-last">
          <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] flex items-center justify-center">
            {/* Circle Border */}
            <div className="absolute inset-0 rounded-full border-2 border-[#0066FF]" />
            {/* Image Container */}
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[400px] xl:h-[400px]">
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
