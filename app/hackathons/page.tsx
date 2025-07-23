"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HackathonsPage = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: "Kigali Web3 Hackathon 2025",
      description:
        "Join Rwanda's premier Web3 development competition in partnership with University of Rwanda. Build decentralized solutions for Africa's challenges.",
      date: "December 15-17, 2025",
      location: "University of Rwanda, Kigali Campus",
      themes: ["DeFi for Africa", "Digital Identity", "Climate Tech"],
      prize: "$15,000 in prizes",
      partners: [
        "University of Rwanda",
        "Rwanda ICT Chamber",
        "Africa Blockchain Institute",
      ],
      status: "Registration Open",
      image: "/hackathon-kigali.jpg",
      registrationLink: "#register",
      deadline: "November 30, 2025",
    },
    {
      id: 2,
      title: "East Africa Blockchain Challenge 2026",
      description:
        "Regional hackathon bringing together developers from across East Africa to build interoperable blockchain solutions.",
      date: "March 2026 (TBD)",
      location: "University of Rwanda, Nyarugenge Campus",
      themes: ["Cross-border Payments", "Supply Chain", "Healthcare"],
      prize: "TBD",
      partners: ["University of Rwanda", "EAC Secretariat"],
      status: "Coming Soon",
      image: "/hackathon-east-africa.jpg",
      registrationLink: "#",
      deadline: "TBD",
    },
  ];

  const pastHackathons = [
    {
      id: 3,
      title: "Rwanda Digital Innovation Hackathon 2024",
      description:
        "Pilot event that laid the foundation for our Web3 hackathon series in Rwanda.",
      date: "August 2024",
      location: "Kigali Innovation City",
      themes: ["Financial Inclusion", "E-Government"],
      winners: [
        "Team Umuganda (Digital ID solution)",
        "Team Irembo (Land registry prototype)",
      ],
      image: "/hackathon-pilot.jpg",
      recapLink: "#",
    },
  ];

  const hackathonBenefits = [
    {
      title: "Build Real Solutions",
      description:
        "Work on meaningful projects that address Africa's unique challenges",
      icon: "🛠️",
    },
    {
      title: "Learn from Experts",
      description: "Access workshops and mentorship from industry leaders",
      icon: "👩‍🏫",
    },
    {
      title: "Win Prizes",
      description:
        "Compete for cash prizes, grants, and incubation opportunities",
      icon: "🏆",
    },
    {
      title: "Grow Your Network",
      description:
        "Connect with developers, entrepreneurs, and potential employers",
      icon: "🌐",
    },
    {
      title: "Career Opportunities",
      description:
        "Get noticed by top tech companies and investors in the region",
      icon: "💼",
    },
    {
      title: "University Credits",
      description:
        "Participating students may earn academic credits (varies by institution)",
      icon: "🎓",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 pt-20 sm:pt-24">
      {/* Hero Section */}
      <div className="text-center mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Web3 <span className="text-blue-700">Hackathons</span> in Rwanda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Join our upcoming hackathon series in partnership with University of
          Rwanda to build the future of Web3 in Africa
        </motion.p>
      </div>

      {/* Upcoming Hackathons */}
      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Upcoming Hackathons
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {upcomingHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                <Image
                  src={hackathon.image}
                  alt={hackathon.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                  {hackathon.status}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {hackathon.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {hackathon.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Date
                    </h4>
                    <p className="text-sm sm:text-base">{hackathon.date}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Location
                    </h4>
                    <p className="text-sm sm:text-base">{hackathon.location}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Prize Pool
                    </h4>
                    <p className="text-sm sm:text-base">{hackathon.prize}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Registration Deadline
                    </h4>
                    <p className="text-sm sm:text-base">{hackathon.deadline}</p>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                    Themes/Tracks
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {hackathon.themes.map((theme) => (
                      <span
                        key={theme}
                        className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2">
                    Partners
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                    {hackathon.partners.map((partner) => (
                      <span
                        key={partner}
                        className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={hackathon.registrationLink}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors text-center text-sm sm:text-base"
                  >
                    Register Now
                  </Link>
                  <Link
                    href={`/hackathons/${hackathon.id}`}
                    className="bg-white border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 font-medium transition-colors text-center text-sm sm:text-base"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Participate?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hackathonBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-green-300 transition-colors"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {pastHackathons.length > 0 && (
        <section className="mb-12 sm:mb-16">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Past Hackathons
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {pastHackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="relative h-40 sm:h-48 w-full bg-gray-100">
                  <Image
                    src={hackathon.image}
                    alt={hackathon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {hackathon.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {hackathon.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                        Date
                      </h4>
                      <p className="text-sm sm:text-base">{hackathon.date}</p>
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                        Location
                      </h4>
                      <p className="text-sm sm:text-base">
                        {hackathon.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Themes
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {hackathon.themes.map((theme) => (
                        <span
                          key={theme}
                          className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                        >
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                      Winning Teams
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
                      {hackathon.winners.map((winner) => (
                        <li key={winner}>{winner}</li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={hackathon.recapLink}
                    className="text-blue-600 hover:text-green-700 font-medium inline-flex items-center text-sm sm:text-base"
                  >
                    See Event Recap
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <motion.section
        className="bg-blue-600 rounded-xl p-6 sm:p-8 lg:p-12 text-center mb-12 sm:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Hack the Future?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
          Whether you&apos;re a developer, designer, or entrepreneur,
          there&apos;s a place for you at our hackathons.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#register"
            className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all text-sm sm:text-base"
          >
            Register Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all text-sm sm:text-base"
          >
            Partner With Us
          </Link>
        </div>
      </motion.section>

      <section>
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Who can participate in the hackathons?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our hackathons are open to university students, professional
              developers, and anyone interested in Web3 technology. Teams can be
              2-5 people. If you don&apos;t have a team, we&apos;ll help you
              find one during the event!
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              Do I need blockchain experience to join?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Not at all! We welcome beginners and will provide workshops and
              mentorship throughout the event. About 30% of participants in our
              previous hackathon were new to blockchain.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              What should I bring to the hackathon?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Bring your laptop, charger, and any other devices you need to
              code. We&apos;ll provide food, drinks, and workspace. For
              overnight hackathons, you may want to bring a change of clothes
              and toiletries.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
              How does the University of Rwanda partnership work?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We&apos;re collaborating with UR&apos;s Computer Science and
              Engineering departments to co-organize these events. Students may
              earn academic credits, and faculty will serve as mentors and
              judges.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsPage;
