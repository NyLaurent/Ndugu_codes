import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Company</h1>
        <p className="text-xl text-gray-600">
          Innovating for a better tomorrow
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Discover our comprehensive range of services designed to meet your needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600">
            Learn about our mission, vision, and the team behind our success.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          <p className="text-gray-600">
            Stay updated with our latest events, news, and announcements.
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join us in creating innovative solutions for the future.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
}
