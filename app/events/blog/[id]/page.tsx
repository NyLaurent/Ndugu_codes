import { notFound } from "next/navigation";
import Link from "next/link";

// This would typically come from a database or API
const blogPosts = [
  {
    id: "rwanda-web3-hackathon-2025",
    title: "Rwanda Web3 Hackathon 2025",
    date: "20-22 July 2025",
    content: `Join developers, startups, and mentors for a 48-hour sprint to solve local challenges using blockchain and decentralized tools.

We're excited to announce our upcoming hackathon in Kigali, bringing together the brightest minds in Web3 from across Africa. This event will focus on building practical solutions for real-world problems using blockchain technology.

Key Features:
- 48-hour intensive development sprint
- Mentorship from industry experts
- Workshops on blockchain development
- Networking opportunities
- Prizes for winning teams

Join us for this exciting opportunity to shape the future of Web3 in Africa!`,
  },
  {
    id: "web3-in-academia-summit-1",
    title: "Web3 in Academia Summit",
    date: "2 August 2025",
    content: `A roundtable for educators and students to explore how blockchain can enhance research, credentials, and campus innovation.

Join us for an enlightening discussion on the intersection of blockchain technology and academia. We'll explore how Web3 can revolutionize education and research.

Topics Include:
- Blockchain in academic credentials
- Decentralized research collaboration
- Campus innovation initiatives
- Student engagement in Web3
- Future of education technology`,
  },
  // Add more blog posts here
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-28 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/events"
            className="inline-flex items-center text-[#0066FF] hover:text-blue-700 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
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
        </div>
        <header className="mb-8">
          <div className="text-[#0066FF] text-sm mb-2">{post.date}</div>
          <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
        </header>
        <div className="prose prose-lg">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
