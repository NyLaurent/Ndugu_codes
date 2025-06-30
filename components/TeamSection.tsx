"use client";

import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const team = [
    {
      image: "/p1.svg",
      name: "Lisa Clarc",
      role: "UI/UX Designer",
      description:
        "Lisa's proactive support and problem-solving abilities make her an invaluable advocate for our customers.",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        telegram: "#",
      },
    },
    {
      image: "/p2.svg",
      name: "Olivia Manson",
      role: "Cloud Architect",
      description:
        "With a deep understanding of user behavior and industry best practices, she crafts engaging experiences that seamlessly blend form and function.",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        telegram: "#",
      },
    },
    {
      image: "/p3.svg",
      name: "Andrew Drue",
      role: "Project Manager",
      description:
        "An ambitious and exquisite personality that always strives to exceed expectations. Always there when someone is in need.",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        telegram: "#",
      },
    },
    {
      image: "/p4.svg",
      name: "Morgan John",
      role: "CEO",
      description:
        "With his expertise in digital marketing channels and data analytics, Michael consistently helps our SaaS company succeed.",
      socials: {
        twitter: "#",
        facebook: "#",
        linkedin: "#",
        telegram: "#",
      },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1C39] mb-6">
            The Core of Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We&apos;re happy to say that our team is what makes us strong and
            unite. Here are our beloved team members that make us who we are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="flex items-start space-x-8">
              <div className="w-64 h-64 relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#0B1C39] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0066FF] mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex space-x-4">
                  <Link
                    href={member.socials.twitter}
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link
                    href={member.socials.facebook}
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                  <Link
                    href={member.socials.linkedin}
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                  <Link
                    href={member.socials.telegram}
                    className="text-gray-600 hover:text-[#0066FF]"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </Link>
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
