"use client";

import Link from "next/link";

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1C39] mb-6">
            Fostering Collaboration, Building Excellence.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here&apos;s a quick overview of our main features and what we have
            to offer. For more in-depth reviews, browse around our website and
            articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Decentralization</h3>
            <p className="text-gray-600">
              NBC operates on a decentralized governance model, ensuring that
              decision-making power is distributed among community members.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Innovation encourages participants to think creatively, develop
              novel solutions, and push the boundaries of blockchain technology.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm18 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600">
              Fosters a spirit of teamwork, innovation, idea exchange and
              collective growth among participants, mentors, and partners.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Inclusivity</h3>
            <p className="text-gray-600">
              Ensures that all participants, regardless of their background,
              feel welcome, valued, and empowered to contribute.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Transparency</h3>
            <p className="text-gray-600">
              Ensures that all stakeholders have access to clear and accurate
              information about the program&apos;s operations, decisions, and
              outcomes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <h3 className="text-xl  text-black font-semibold mb-4">Diversity</h3>
            <p className="text-gray-600">
              NBC is looking at creating an inclusive and diverse pool of
              developers, protocols, and stakeholders.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#EEF5FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-[#0066FF]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
              </svg>
            </div>
            <h3 className="text-xl text-black font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600">
              Fosters a spirit of teamwork, innovation, idea exchange and
              collective growth among participants, mentors, and partners.
            </p>
          </div>
        </div>

        <div className="text-center">
            <h3 className="text-2xl text-black font-bold mb-4">Join this Web3 Movement</h3>
          <p className="text-gray-600 mb-8">
            Empowering Africa through code, community, and innovation.
          </p>
          <Link
            href="/join-community"
            className="inline-flex items-center bg-[#0066FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Our Community <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
