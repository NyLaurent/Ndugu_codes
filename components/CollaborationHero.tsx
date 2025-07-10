"use client";

const CollaborationHero = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#0066FF] font-medium mb-4">1% OF THE INDUSTRY</p>
          <h1 className="text-5xl font-bold text-[#0B1C39] mb-6">
            <span className="text-[#0066FF]">Collaborate</span> with Us. Impact
            the World.
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            At Web3 Mates, we believe in the power of collaboration to drive
            change—not just in Africa, but across the globe. Whether you&apos;re
            a Web3 company, university, tech hub, or nonprofit, we welcome you
            to join us in shaping the future of decentralized innovation.
          </p>

          <div className="flex items-center max-w-2xl mx-auto">
            <div className="relative flex-1 text-black">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
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
                placeholder="Feel free to share your ideas here ..."
                className="w-full pl-12 pr-4 text-black py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0066FF] bg-white"
              />
            </div>
            <button className="ml-4 bg-[#0066FF] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationHero;
