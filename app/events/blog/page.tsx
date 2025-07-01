import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts | Ndugu Codes",
  description: "Read our latest blog posts about Web3 developments in Africa",
};

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
              <button
                className="text-[#0066FF] hover:text-blue-700 transition-colors"
                onClick={() => {
                  // Handle click - you can use local storage or state management
                  // to show full post content
                  console.log(`Viewing post ${post.id}`);
                }}
              >
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
