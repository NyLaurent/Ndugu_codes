"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Mock project data - consistent with project profile data structure
const featuredProjects = [
  {
    id: 1,
    title: "AfriChain Marketplace",
    description: "A decentralized marketplace for African artisans to sell digital and physical goods with crypto payments",
    tags: ["E-commerce", "NFT", "DeFi"],
    status: "Live",
    logo: "/project-africhain.jpg",
    link: "/projects/1", // Updated to use dynamic route
    team: [
      { name: "Amina O.", role: "Founder & CEO" },
      { name: "Kwame M.", role: "Blockchain Developer" },
      { name: "Ngozi E.", role: "UX Designer" }
    ],
    tech: ["Solidity", "Next.js", "IPFS"]
  },
  {
    id: 2,
    title: "NaijaDAO",
    description: "Community-owned investment DAO focused on Nigerian tech startups",
    tags: ["DAO", "Governance", "Investment"],
    status: "Beta",
    logo: "/project-naijadao.jpg",
    link: "/projects/2",
    team: [
      { name: "Tunde A.", role: "DAO Coordinator" },
      { name: "Fatima D.", role: "Smart Contract Developer" }
    ],
    tech: ["Aragon", "Gnosis Safe", "The Graph"]
  },
  {
    id: 3,
    title: "CedisPay",
    description: "Stablecoin payment gateway for Ghanaian businesses",
    tags: ["Payments", "Stablecoin", "Web3"],
    status: "Coming Soon",
    logo: "/project-cedispay.jpg",
    link: "/projects/3",
    team: [
      { name: "Jabari J.", role: "Founder" },
      { name: "Amina O.", role: "Product Manager" }
    ],
    tech: ["Circle API", "WalletConnect", "Node.js"]
  }
];

const upcomingProjects = [
  {
    id: 4,
    title: "YallaDeFi",
    description: "Arabic-language DeFi education platform with gamified learning",
    tags: ["Education", "DeFi", "Gamification"],
    status: "Prototype",
    logo: "/project-yalladefi.jpg",
    link: "/projects/4",
    team: [
      { name: "Karim B.", role: "Founder" },
      { name: "Leila M.", role: "Content Lead" }
    ],
    tech: ["React", "Firebase", "Web3.js"]
  },
  {
    id: 5,
    title: "SAFUFund",
    description: "Decentralized emergency fund for African creators",
    tags: ["Social Impact", "Crowdfunding", "DAOs"],
    status: "Ideation",
    logo: "/project-safufund.jpg",
    link: "/projects/5",
    team: [
      { name: "Wanjiru K.", role: "Community Lead" },
      { name: "Olumide B.", role: "Developer" }
    ],
    tech: ["Solidity", "Hardhat", "React"]
  }
];

const projectCategories = [
  "All Projects",
  "DeFi",
  "NFT",
  "DAOs",
  "Payments",
  "Education",
  "Social Impact"
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const allProjects = [...featuredProjects, ...upcomingProjects];

  // Filter projects based on active filter
  const filteredProjects = allProjects.filter(project => {
    if (activeFilter === "All Projects") return true;
    return project.tags.includes(activeFilter);
  });

  // Separate filtered projects back into featured and upcoming
  const filteredFeatured = filteredProjects.filter(project => 
    featuredProjects.some(fp => fp.id === project.id)
  );
  const filteredUpcoming = filteredProjects.filter(project => 
    upcomingProjects.some(up => up.id === project.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
        >
          Web3 <span className="text-blue-600">Projects</span> from Africa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg"
        >
          Discover and contribute to innovative blockchain projects built by our community
        </motion.p>
      </div>

      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition-colors ${
              activeFilter === category
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Featured Projects */}
      {filteredFeatured.length > 0 && (
        <section className="mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFeatured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Team</h4>
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((member) => (
                          <div 
                            key={member.name} 
                            className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium"
                          >
                            {member.name.charAt(0)}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span key={tech} className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={project.link}
                    className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Projects */}
      {filteredUpcoming.length > 0 && (
        <section className="mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Upcoming Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUpcoming.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 w-full bg-gray-100">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Prototype" ? "bg-purple-100 text-purple-800" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Show message when no projects match filter */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No projects match the selected filter
          </h3>
          <p className="text-gray-500">
            Try selecting a different category or check back later for new projects.
          </p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.section
        className="bg-blue-600 rounded-xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Have a Web3 Project?
        </h2>
        <p className="text-blue-50 max-w-2xl mx-auto mb-8 text-lg">
          Get featured on our platform and connect with developers, investors, and mentors in our ecosystem.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects/submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:shadow-md font-medium transition-all"
          >
            Submit Your Project
          </Link>
          <Link
            href="/mentors"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 font-medium transition-all"
          >
            Find Project Mentors
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectsPage;