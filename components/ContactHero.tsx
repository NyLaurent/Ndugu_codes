"use client";

import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

export default function ContactHero() {
  const url = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
  const { toast, ToastContainer } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    toast({
      title: "Submitting message...",
      description: "Please wait while your message is being sent.",
    });

    try {
      const response = await fetch(url || "", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description:
            "Your message has been sent successfully. We'll get back to you soon!",
          variant: "success",
        });
        form.reset();
      } else {
        const result = await response.json();
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was an issue sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p
          className="text-gray-600 text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out to us with any question or inquiry you have and we&apos;ll
          do our best to get back to you as soon as possible.
        </motion.p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Please input"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 text-sm sm:text-base outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please input"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 text-sm sm:text-base outline-none"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+000"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 text-sm sm:text-base outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                  Contact method
                </label>
                <select
                  name="contactMethod"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 text-sm sm:text-base outline-none"
                  defaultValue=""
                  required
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
              <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Enter your message..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-black rounded-lg bg-gray-50 border border-gray-200 text-sm sm:text-base outline-none"
                required
              ></textarea>
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="privacyPolicy"
                id="privacyPolicy"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 mt-1 outline-none"
                required
              />
              <label
                htmlFor="privacyPolicy"
                className="ml-2 text-xs sm:text-sm text-gray-600"
              >
                I agree with Web3 Mates Privacy Policy
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-lg sm:text-xl text-black font-semibold mb-2 sm:mb-3">
              Get in touch
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We&apos;d love to hear from you—whether you&apos;re looking to
              collaborate, support, or join our mission to drive Web3 innovation
              across Africa. Let&apos;s build something meaningful together.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl text-black font-semibold mb-2 sm:mb-3">
              Address
            </h2>
            <p className="font-medium text-black text-sm sm:text-base">
              Web3 Mates Hub — Kigali, Rwanda
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Bumbogo Innovation Center, KG 690 St, Kigali, Rwanda
            </p>
          </div>
          <div>
            <a
              href="tel:+250788123456"
              className="text-blue-600 hover:text-blue-700 text-sm sm:text-base"
            >
              Make a phone call
            </a>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              +250 788 123 456
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl text-black font-semibold mb-2 sm:mb-3">
              Social media
            </h2>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">X (Twitter)</span>
                <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
      <ToastContainer />
    </div>
  );
}
