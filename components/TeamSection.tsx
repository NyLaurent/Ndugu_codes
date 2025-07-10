"use client";

import Image from "next/image";
import Link from "next/link";

const team = [
  {
    image: "/joab.jpeg",
    name: "Joab Niwagaba",
    role: "Founder & Visionary Leader",
    description:
      "Mr.Joab drives the company’s mission and strategic growth, inspiring innovation and fostering a culture of excellence across all teams.",
    socials: {
      twitter: "https://x.com/niwagaba_joab?s=21",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/joab-niwagaba-0905161b3",
      telegram: "https://t.me/JoabP",
    },
  },
  {
    image: "/jabo.jpeg",
    name: "Jabo Prosper",
    role: "Operations Lead",
    description:
      "Mr.Jabo ensures operational efficiency and seamless execution of projects, optimizing workflows to empower teams and maximize impact.",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
      telegram: "#",
    },
  },
  {
    image: "/jonas.jpg",
    name: "Jonas Sebera",
    role: "Web3 Developer & Technical Support Lead",
    description:
      "Mr.Jonas leads the technical support efforts and drives blockchain development initiatives, ensuring robust, scalable solutions and expert troubleshooting.",
    socials: {
      twitter: "https://x.com/0xJonaseb11",
      instagram: "https://instagram.com/sebe_j_az99",
      linkedin: "https://linkedin.com/in/jonas-sebera",
      telegram: "https://t.me/jonas_sebera",
      github: "https://github.com/0xJonaseb11",
    },
  },
  {
    image: "/laurent.jpeg",
    name: "Nyumbayire Laurent",
    role: "Developer Relations Specialist",
    description:
      "Mr.Laurent builds and nurtures the developer community by providing technical guidance, resources, and fostering collaboration across ecosystems.",
    socials: {
      twitter: "https://x.com/Lau_lanez",
      instagram: "https://www.instagram.com/laulan_6/",
      linkedin: "https://www.linkedin.com/in/nyumbayire-laurent-b11251299/",
      telegram: "https://t.me/laulanez",
      github: "https://github.com/0xJonaseb11",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4 sm:mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl sm:max-w-3xl mx-auto px-2">
            Our strength comes from the passion and expertise of our core team members who drive innovation and deliver value every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <div className="w-48 h-64 sm:w-56 sm:h-72 lg:w-72 lg:h-96 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 384px"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0B1C39] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0066FF] mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{member.description}</p>
                <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                  {member.socials.twitter && member.socials.twitter !== "#" && (
                    <Link
                      href={member.socials.twitter}
                      className="text-gray-600 hover:text-[#0066FF] transition-colors"
                      target="_blank"
                    >
                      {/* Twitter Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </Link>
                  )}
                  {member.socials.instagram && member.socials.instagram !== "#" && (
                    <Link
                      href={member.socials.instagram}
                      className="text-gray-600 hover:text-[#0066FF] transition-colors"
                      target="_blank"
                    >
                      {/* Instagram Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </Link>
                  )}
                  {member.socials.linkedin && member.socials.linkedin !== "#" && (
                    <Link
                      href={member.socials.linkedin}
                      className="text-gray-600 hover:text-[#0066FF] transition-colors"
                      target="_blank"
                    >
                      {/* LinkedIn Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </Link>
                  )}
                  {member.socials.telegram && member.socials.telegram !== "#" && (
                    <Link
                      href={member.socials.telegram}
                      className="text-gray-600 hover:text-[#0066FF] transition-colors"
                      target="_blank"
                    >
                      {/* Telegram Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </Link>
                  )}
                  {member.socials.github && member.socials.github !== "#" && (
                    <Link
                      href={member.socials.github}
                      className="text-gray-600 hover:text-[#0066FF] transition-colors"
                      target="_blank"
                    >
                      {/* GitHub Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.72 1.28 3.38.98.1-.76.4-1.28.73-1.57-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.01 11.01 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.26 5.7.41.35.78 1.03.78 2.08v3.09c0 .31.21.67.8.56A10.996 10.996 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
