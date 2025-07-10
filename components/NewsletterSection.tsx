"use client";

import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      // TODO: Replace this with actual API call
      console.log("Subscribing email:", email);

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#0066FF] font-medium mb-4">
            Updates That Empower. Stories That Inspire.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C39] mb-4">
            Stay Connected to Africa&apos;s Web3 Movement
          </h2>
          <p className="text-gray-600 mb-8">
            Join our mailing list to get early access to training programs,
            hackathons, stories, and resources from the Web3 Mates community.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            aria-label="Newsletter subscription form"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your email"
              required
              className="px-6 py-3 rounded-full border border-gray-300 flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-[#0066FF] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          {/* Feedback */}
          {status === "success" && (
            <p className="text-green-600 mt-4">Thanks for subscribing!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
