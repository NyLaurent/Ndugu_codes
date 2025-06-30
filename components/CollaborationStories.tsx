import Image from "next/image";

const CollaborationStories = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Collaboration in Action
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore real stories of how our partnerships are transforming
            communities, empowering talent, and driving Africa&apos;s Web3 future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Story */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-[400px]">
              <Image
                src="/big.svg"
                alt="University Collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Empowering Young Developers Through University Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                Through our partnership with Makerere University, we launched a
                10-week Web3 bootcamp reaching over 300 students with hands-on
                smart contract training and startup incubation.
              </p>
              <p className="text-gray-500">18 May 2025</p>
            </div>
          </div>

          {/* Right Side Stories */}
          <div className="space-y-8">
            {/* Story 1 */}
            <div className="flex gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-4">
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src="/c1.svg"
                  alt="Hackathon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Cross-Border Hackathon Unites 8 African Countries
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Developers from Nigeria, Rwanda, Kenya, and more teamed up to
                  build real-world Web3 apps in our first Pan-African Hackathon.
                </p>
                <p className="text-gray-500 text-sm">10 May 2025</p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-4">
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src="/c2.svg"
                  alt="Agriculture Blockchain"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Blockchain for Agriculture: A Pilot in Tanzania
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Partnering with a local co-op, we tested a blockchain-based
                  produce tracking system— improving transparency for farmers
                  and buyers.
                </p>
                <p className="text-gray-500 text-sm">04 May 2025</p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="flex gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-4">
              <div className="relative w-48 h-32 flex-shrink-0">
                <Image
                  src="/c3.svg"
                  alt="Women in Web3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-2">
                  Women in Web3: Driving Inclusion through Mentorship
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Our collaboration with SheBuilds Africa mentors over 200 young
                  women, introducing them to careers in smart contract
                  development and digital entrepreneurship.
                </p>
                <p className="text-gray-500 text-sm">27 Apr 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationStories;
