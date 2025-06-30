export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive solutions tailored to your needs
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Service 1</h2>
          <p className="text-gray-600 mb-4">
            Detailed description of service 1 and how it benefits your customers.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Learn More →
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Service 2</h2>
          <p className="text-gray-600 mb-4">
            Detailed description of service 2 and how it benefits your customers.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Learn More →
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Service 3</h2>
          <p className="text-gray-600 mb-4">
            Detailed description of service 3 and how it benefits your customers.
          </p>
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Learn More →
          </button>
        </div>
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us to discuss how we can help with your specific needs.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
          Get in Touch
        </button>
      </section>
    </div>
  );
} 