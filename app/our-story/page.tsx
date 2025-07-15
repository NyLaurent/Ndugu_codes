"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const OurStory = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Spark",
      description: "Joab Niwagaba, while working on blockchain projects, recognized Africa's potential to leapfrog traditional systems through Web3.",
      image: "/joab.jpeg",
      icon: ""
    },
    {
      year: "2024",
      title: "First Assemblies",
      description: "Joab brought together Jonas, Jabo, and Laurent - forming the core team with complementary skills in development, operations, and community.",
      image: "/team-early.jpg",
      icon: ""
    },
    {
      year: "Q1 2025",
      title: "First Bootcamp",
      description: "Launched our pilot program in Kigali, training 25 developers despite having no funding - proving the demand for Web3 education.",
      image: "/first-bootcamp.jpg",
      icon: ""
    },
    {
      year: "Q3 2025",
      title: "Continent-Wide Reach",
      description: "Expanded to 6 African countries through partnerships with local tech hubs and blockchain projects.",
      image: "/africa1.jpeg",
      icon: ""
    },
    {
      year: "late 2025",
      title: "Enterprise Recognition",
      description: "Started working with companies like StoneProofLabs to bridge the talent gap, validating our training model.",
      image: "/enterprise-partners.jpg",
      icon: ""
    }
  ];

  const coreValues = [
    {
      title: "African Solutions",
      description: "We build curriculum solving Africa-specific challenges in finance, identity, and governance.",
      icon: ""
    },
    {
      title: "Learning by Building",
      description: "No theoretical fluff - only hands-on projects that create real portfolio pieces.",
      icon: ""
    },
    {
      title: "Community First",
      description: "Our alumni network supports each other's growth long after programs end.",
      icon: ""
    },
    {
      title: "Abundance Mindset",
      description: "We believe Africa's tech potential is limitless when knowledge is shared openly.",
      icon: "♾️"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/africa-tech-hub.jpg"
          alt="African tech hub"
          fill
          className="object-cover absolute z-0"
          priority
        />
        <div className="absolute inset-0 bg-blue-800 rounded-xl opacity-90 z-1"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 60, y: 70 }}
          transition={{ duration: 10 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            From <span className="text-[#0066FF]">Vision</span> to Movement
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            How a small group of passionate Africans came together to build Web3 Mates
          </p>
        </motion.div>
      </div>

      {/* Founder Spotlight */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/joab-speaking.jpg"
                alt="Joab Niwagaba speaking"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm">Joab Niwagaba, Founder & CEO</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-4">
              &quot;Africa&apos;s future won&apos;t be built by outsiders&quot;
            </h2>
            <p className="text-gray-600 mb-6">
              In 2021, Joab saw two realities: Africa&apos;s youth were hungry for tech opportunities, while global Web3 projects lacked African perspectives. He envisioned a homegrown solution - training Africans to build for African contexts.
            </p>
            <p className="text-gray-600 mb-6">
              What started as WhatsApp groups sharing Solidity tutorials became structured programs when Jonas (technical lead), Jabo (operations), and Laurent (community) joined the mission.
            </p>
            <div className="flex gap-4">
              <Link
                href="/team"
                className="bg-[#0066FF] text-white px-6 py-2 rounded-lg hover:bg-[#0047CC] transition-colors"
              >
                Meet The Team
              </Link>
              <Link
                href="https://youtube.com/watch?v=example"
                className="flex items-center gap-2 text-[#0066FF] hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.564 12.568-6 4A1 1 0 0 1 11 16V8a1 1 0 0 1 1.564-.832l6 4a1 1 0 0 1 0 1.664z"/>
                </svg>
                Watch Founder&apos;s Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFF]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600">
            From humble beginnings to continental impact
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-[#0066FF]/30 transform -translate-x-1/2"></div>
          
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Date */}
                <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm font-medium text-[#0066FF]">{milestone.year}</p>
                </div>
                
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0066FF] flex items-center justify-center text-white z-10">
                  {milestone.icon}
                </div>
                
                {/* Card */}
                <div className="w-1/2 px-4">
                  <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                    <h3 className="text-lg font-bold text-[#0B1C39] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 mb-4">{milestone.description}</p>
                    <div className="relative h-40 rounded-md overflow-hidden">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        fill
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1C39] mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600">
            The principles that guide every decision we make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#0B1C39] mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0066FF] to-[#0047CC] rounded-2xl mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Whether you&apos;re a developer, entrepreneur, or company - join us in building Africa&apos;s Web3 future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/course"
              className="bg-white text-[#0066FF] px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Start Learning
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;