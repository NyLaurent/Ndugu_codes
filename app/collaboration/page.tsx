export default function Collaboration() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Collaboration</h1>
        <p className="text-xl text-gray-600">
          Partner with us to create something amazing
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Collaborate With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p className="text-gray-600">
              Benefit from our years of experience and industry knowledge.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              Access cutting-edge technology and innovative solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <p className="text-gray-600">
              Get dedicated support throughout our partnership journey.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Partnership Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Business Partners</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Strategic business collaborations</li>
              <li>• Joint venture opportunities</li>
              <li>• Revenue sharing models</li>
              <li>• Market expansion partnerships</li>
            </ul>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Learn More →
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Technology Partners</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>• Integration partnerships</li>
              <li>• Development collaborations</li>
              <li>• Research partnerships</li>
              <li>• Innovation programs</li>
            </ul>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can work together to achieve mutual success.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
}
