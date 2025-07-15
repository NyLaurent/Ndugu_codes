"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Mock data - in a real app you'd fetch this from an API
const allProjects = [
  {
    id: 1,
    title: "AfriChain Marketplace",
    description: "A decentralized marketplace for African artisans to sell digital and physical goods with crypto payments",
    longDescription: "AfriChain Marketplace is revolutionizing e-commerce in Africa by providing a decentralized platform where artisans can sell both digital and physical goods while receiving payments in cryptocurrency. Our platform integrates NFT technology for digital goods certification and DeFi solutions for seamless crypto transactions. We're bridging the gap between African creators and the global crypto economy.",
    tags: ["E-commerce", "NFT", "DeFi"],
    status: "Live",
    logo: "/project-africhain.jpg",
    website: "https://africhain.example.com",
    whitepaper: "https://africhain.example.com/whitepaper.pdf",
    team: [
      { name: "Amina O.", role: "Founder & CEO" },
      { name: "Kwame M.", role: "Blockchain Developer" },
      { name: "Ngozi E.", role: "UX Designer" }
    ],
    tech: ["Solidity", "Next.js", "IPFS", "Polygon", "WalletConnect"],
    milestones: [
      { date: "Q1 2023", achievement: "Prototype development completed" },
      { date: "Q2 2023", achievement: "Seed funding secured ($500k)" },
      { date: "Q3 2023", achievement: "Beta launch with 100+ merchants" }
    ],
    gallery: [
      "/project-africhain-1.jpg",
      "/project-africhain-2.jpg",
      "/project-africhain-3.jpg"
    ]
  },
  // Add other projects with the same structure
];

const ProjectProfilePage = () => {
  const params = useParams();
  const projectId = Number(params.id);
  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row gap-8 mb-12"
      >
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md">
            <Image
              src={project.logo}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="flex items-start justify-between mb-4">
            <div>
              <motion.h1 
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Live" ? "bg-green-100 text-green-800" :
                  project.status === "Beta" ? "bg-yellow-100 text-yellow-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.longDescription}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Visit Website
              </a>
            )}
            {project.whitepaper && (
              <a
                href={project.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Read Whitepaper
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Project Details Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Team</h2>
          <div className="space-y-6">
            {project.team.map((member, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-medium">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Milestones Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Milestones</h2>
          <div className="space-y-4">
            {project.milestones.map((milestone, i) => (
              <div key={i} className="border-l-2 border-blue-500 pl-4 py-1">
                <p className="text-sm font-medium text-gray-500">{milestone.date}</p>
                <p className="text-gray-700">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-blue-600 rounded-xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Interested in this project?</h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-6">
          Contact the team to collaborate, invest, or learn more about their work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Contact Team
          </a>
          <Link
            href="/projects"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Explore More Projects
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectProfilePage;