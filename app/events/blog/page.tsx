"use client";

import Link from "next/link";

// Mock blog posts data - replace with actual data fetching
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Web3 in Africa",
    content: "Learn about the exciting opportunities in Web3...",
    date: "2024-03-20",
  },
  {
    id: "2",
    title: "Building DeFi Solutions for African Markets",
    content: "Exploring decentralized finance solutions...",
    date: "2024-03-18",
  },
  {
    id: "3",
    title: "Blockchain Education Initiatives",
    content: "How we're spreading blockchain knowledge...",
    date: "2024-03-15",
  },
];

export default function BlogPosts() {
  return (
    <main className="py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/events"
          className="inline-flex items-center text-[#0066FF] hover:text-blue-700 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Events
        </Link>

        <h1 className="text-4xl font-bold text-black mb-12">
          Latest Blog Posts
        </h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-200 pb-8">
              <div className="text-[#0066FF] text-sm mb-2">{post.date}</div>
              <h2 className="text-2xl font-bold text-black mb-4">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <Link
                href="#"
                className="text-[#0066FF] hover:text-blue-700 transition-colors"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
