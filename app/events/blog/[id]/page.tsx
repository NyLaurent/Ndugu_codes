import { Metadata } from "next";
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

type SearchParams = { [key: string]: string | string[] | undefined };

interface PageProps {
  params: { id: string };
  searchParams: SearchParams;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Blog Post ${params.id} | Ndugu Codes`,
    description: "Read our latest blog post about Web3 developments in Africa",
  };
}

// Mock blog post data - replace with actual data fetching
const getBlogPost = async (id: string) => {
  // Simulate API call
  return {
    id,
    title: `Blog Post ${id}`,
    content: "This is the blog post content...",
    date: new Date().toLocaleDateString(),
  };
};

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  return (
    <main className="py-28 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="text-[#0066FF] text-sm mb-2">{post.date}</div>
          <h1 className="text-4xl font-bold text-black mb-4">{post.title}</h1>
        </header>
        <div className="prose prose-lg">{post.content}</div>
      </article>
    </main>
  );
}
