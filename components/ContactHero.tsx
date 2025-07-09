"use client";

export default function ContactHero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Get in Touch with Us
        </h1>
        <p className="text-gray-600">
          Reach out to us with any question or inquiry you have and we&apos;ll
          do our best to get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Please input"
                  className="w-full px-4 py-2 text-black rounded-lg bg-gray-50 border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Please input"
                  className="w-full px-4 py-2 text-black rounded-lg bg-gray-50 border border-gray-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+000"
                  className="w-full px-4 py-2 text-black rounded-lg bg-gray-50 border border-gray-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Contact method
                </label>
                <select
                  className="w-full px-4 py-2 text-black rounded-lg bg-gray-50 border border-gray-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose method
                  </option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Hi! We are Lookscout..."
                className="w-full px-4 py-2 text-black rounded-lg bg-gray-50 border border-gray-200"
              ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <label
                htmlFor="privacyPolicy"
                className="ml-2 text-sm text-gray-600"
              >
                I agree with Ndugu Codes Privacy Policy
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl text-black font-semibold mb-3">
              Get in touch
            </h2>
            <p className="text-gray-600">
              We&apos;d love to hear from you—whether you&apos;re looking to
              collaborate, support, or join our mission to drive Web3 innovation
              across Africa. Let&apos;s build something meaningful together.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-2"
            >
              Read more →
            </a>
          </div>

          <div>
            <h2 className="text-xl text-black font-semibold mb-3">Address</h2>
            <p className="font-medium text-black">Ndugu Codes Hub — Kigali, Rwanda</p>
            <p className="text-gray-600">
              Bumbogo Innovation Center, KG 690 St, Kigali, Rwanda
            </p>
          </div>

          <div>
            <a
              href="tel:+250788123456"
              className="text-blue-600 hover:text-blue-700"
            >
              Make a phone call
            </a>
            <p className="text-gray-600 mt-2">+250 788 123 456</p>
          </div>

          <div>
              <h2 className="text-xl text-black font-semibold mb-3">
              Social media
            </h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
