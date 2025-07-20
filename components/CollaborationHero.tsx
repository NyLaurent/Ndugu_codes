"use client";

const CollaborationHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#0066FF] font-medium mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
            1% OF THE INDUSTRY
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            <span className="text-[#0066FF]">Collaborate</span> with Us. Impact
            the World.
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12">
            At Web3 Mates, we believe in the power of collaboration to drive
            change—not just in Africa, but across the globe. Whether you&apos;re
            a Web3 company, university, tech hub, or nonprofit, we welcome you
            to join us in shaping the future of decentralized innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center max-w-2xl mx-auto gap-3 sm:gap-4">
            <div className="relative flex-1 text-black w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4M4 12l6-6m-6 6l6 6"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Feel free to share your ideas or feedback here ..."
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 text-black py-2 sm:py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0066FF] bg-white text-sm sm:text-base"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#0066FF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap text-sm sm:text-base">
              Send feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHero;
