export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Events & News</h1>
        <p className="text-xl text-gray-600">
          Stay updated with our latest happenings
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 font-semibold mb-2">MAR 15, 2024</div>
            <h3 className="text-xl font-semibold mb-4">Tech Conference 2024</h3>
            <p className="text-gray-600 mb-4">
              Join us for our annual technology conference featuring industry
              experts and innovative showcases.
            </p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>📍 Virtual Event</span>
              <span className="mx-2">•</span>
              <span>🕒 9:00 AM - 5:00 PM EST</span>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Register Now →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 font-semibold mb-2">APR 20, 2024</div>
            <h3 className="text-xl font-semibold mb-4">Innovation Workshop</h3>
            <p className="text-gray-600 mb-4">
              A hands-on workshop exploring the latest trends and technologies
              in innovation.
            </p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span>📍 New York City</span>
              <span className="mx-2">•</span>
              <span>🕒 10:00 AM - 3:00 PM EST</span>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-500 mb-2">March 1, 2024</div>
            <h3 className="text-xl font-semibold mb-4">
              Company Announces New Partnership
            </h3>
            <p className="text-gray-600 mb-4">
              We're excited to announce our strategic partnership with Industry
              Leader Corp to bring innovative solutions to our customers.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Read More →
            </button>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-gray-500 mb-2">February 15, 2024</div>
            <h3 className="text-xl font-semibold mb-4">
              Product Launch Success
            </h3>
            <p className="text-gray-600 mb-4">
              Our latest product launch exceeded expectations with overwhelming
              positive feedback from customers and industry experts.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Read More →
            </button>
          </article>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-600 mb-8">
          Subscribe to our newsletter for the latest updates and events.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
