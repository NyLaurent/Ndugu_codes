"use client";

import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

// Mock blog posts data - replace with real data fetching as needed
const blogPosts = [
  {
    id: "1",
    title: "Starting Your Web3 Journey in Rwanda and Beyond",
    content:
      "Discover how Rwanda is becoming a hub for Web3 innovation, with opportunities for developers and entrepreneurs to shape Africa's digital future.",
    date: "2025-03-20",
  },
  {
    id: "2",
    title: "DeFi Solutions Tailored for African Markets",
    content:
      "Explore decentralized finance projects addressing Africa's unique financial challenges and unlocking new economic possibilities.",
    date: "2025-03-18",
  },
  {
    id: "3",
    title: "Expanding Blockchain Education Across Rwanda",
    content:
      "Learn about our initiatives to bring blockchain knowledge to universities, startups, and communities in Rwanda.",
    date: "2025-03-15",
  },
];

export default function BlogPosts() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <main className="py-28 px-4 md:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/events"
          className="inline-flex items-center text-[#0066FF] hover:text-blue-700 mb-8 transition-colors"
          aria-label="Back to Events page"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

        <h1 className="text-4xl font-bold text-[#0B1C39] mb-12">
          Insights & Updates from Rwanda&apos;s Web3 Frontier
        </h1>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="border-b border-gray-300 pb-8">
              <time
                className="text-[#0066FF] text-sm mb-2 block"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-RW", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-2xl font-semibold text-[#0B1C39] mb-4">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {post.content}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-[#0066FF] font-semibold hover:text-blue-700 transition-colors"
                aria-label={`Read more about: ${post.title}`}
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
