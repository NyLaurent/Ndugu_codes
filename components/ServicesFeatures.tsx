"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    image: "/s1.svg",
    title: "Web3 Training & Education",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/training"
  },
  {
    id: 2,
    image: "/s2.svg",
    title: "Hackathons & Bootcamps",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/hackathons"
  },
  {
    id: 3,
    image: "/s3.svg",
    title: "Mentorship & Coaching",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/mentorship"
  },
  {
    id: 4,
    image: "/s4.svg",
    title: "Startup & Business Support",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/startup"
  },
  {
    id: 5,
    image: "/s5.svg",
    title: "Networking & Community Events",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/networking"
  },
  {
    id: 6,
    image: "/s6.svg",
    title: "Access to Funding & Opportunities",
    description: "No matter what kind of home you have to share, you can increase your earnings and beyond.",
    link: "/services/funding"
  }
];

const ServicesFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1C39] mb-6">
            Fostering Collaboration, Building Excellence.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here&apos;s a quick overview of our main features and what we have to offer. For more in-depth reviews, browse around our website and articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              href={service.link}
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#0B1C39] group-hover:text-[#0066FF] transition-colors">
                  {service.id}. {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFeatures; 