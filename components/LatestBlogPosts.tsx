"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "rwanda-web3-hackathon-2025",
    image: "/e1.svg",
    date: "20-22 July 2025",
    title: "Rwanda Web3 Hackathon 2025",
    description:
      "Join developers, startups, and mentors for a 48-hour sprint to solve local challenges using blockchain and decentralized tools.",
  },
  {
    id: "web3-in-academia-summit-1",
    image: "/e2.svg",
    date: "2 August 2025",
    title: "Web3 in Academia Summit",
    description:
      "A roundtable for educators and students to explore how blockchain can enhance research, credentials, and campus innovation.",
  },
  {
    id: "web3-in-academia-summit-2",
    image: "/e3.svg",
    date: "2 August 2025",
    title: "Web3 in Academia Summit",
    description:
      "A roundtable for educators and students to explore how blockchain can enhance research, credentials, and campus innovation.",
  },
  {
    id: "collaborate-world-tour-nairobi",
    image: "/e4.svg",
    date: "20-22 July 2025",
    title: "Collaborate World Tour: Nairobi Edition",
    description:
      "Meet our partners, hear success stories, and explore how to engage with Ndugu Codes on the ground.",
  },
  {
    id: "web3-in-academia-summit-3",
    image: "/e5.svg",
    date: "2 August 2025",
    title: "Web3 in Academia Summit",
    description:
      "A roundtable for educators and students to explore how blockchain can enhance research, credentials, and campus innovation.",
  },
  {
    id: "web3-in-academia-summit-4",
    image: "/e6.svg",
    date: "2 August 2025",
    title: "Web3 in Academia Summit",
    description:
      "A roundtable for educators and students to explore how blockchain can enhance research, credentials, and campus innovation.",
  },
];

const LatestBlogPosts = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here&apos;s a quick glance over our latest blog posts and media
            articles written by our team members, staff and guest writers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-[#0066FF] text-sm mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <Link
                  href="/events/blog"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
