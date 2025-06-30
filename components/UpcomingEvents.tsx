import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: "featured",
    image: "/big.svg",
    title: "Empowering Young Developers Through University Collaboration",
    description:
      "Through our partnership with Makerere University, we launched a 10-week Web3 bootcamp reaching over 300 students with hands-on smart contract training and startup incubation.",
    date: "18 May 2025",
  },
  {
    id: "event1",
    image: "/c1.svg",
    title: "Cross-Border Hackathon Unites 8 African Countries",
    description:
      "Developers from Nigeria, Rwanda, Kenya, and more teamed up to build real-world Web3 apps in our first Pan-African Hackathon.",
    date: "10 May 2025",
  },
  {
    id: "event2",
    image: "/c2.svg",
    title: "Blockchain for Agriculture: A Pilot in Tanzania",
    description:
      "Partnering with a local co-op, we tested a blockchain-based produce tracking system—improving transparency for farmers and buyers.",
    date: "04 May 2025",
  },
  {
    id: "event3",
    image: "/c3.svg",
    title: "Women in Web3: Driving Inclusion through Mentorship",
    description:
      "Our collaboration with SheBuilds Africa mentors over 200 young women, introducing them to careers in smart contract development and digital entrepreneurship.",
    date: "27 Apr 2025",
  },
];

const UpcomingEvents = () => {
  const [featuredEvent, ...otherEvents] = events;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Event - Left Column */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative h-[400px]">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-[#0066FF] text-sm mb-2">
                {featuredEvent.date}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                {featuredEvent.title}
              </h3>
              <p className="text-gray-600 mb-4">{featuredEvent.description}</p>
              <Link
                href={`/events/${featuredEvent.id}`}
                className="text-[#0066FF] font-medium hover:text-blue-700 inline-flex items-center"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Other Events - Right Column */}
          <div className="space-y-8">
            {otherEvents.map((event) => (
              <div
                key={event.id}
                className="flex gap-6 bg-white rounded-lg overflow-hidden shadow-sm p-4"
              >
                <div className="relative w-48 h-32 flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[#0066FF] text-sm mb-2">
                    {event.date}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {event.description}
                  </p>
                  <Link
                    href={`/events/${event.id}`}
                    className="text-[#0066FF] font-medium hover:text-blue-700 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
