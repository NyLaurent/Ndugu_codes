"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.svg"
                alt="Ndugu Logo"
                width={45}
                height={45}
                priority
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Ndugu</span>
                <span className="text-sm text-[#0066FF]">
                  Blockchain Catalyst
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/"
              className={`text-sm font-medium ${
                isActive("/")
                  ? "text-[#0066FF]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium ${
                isActive("/services")
                  ? "text-[#0066FF]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium ${
                isActive("/about")
                  ? "text-[#0066FF]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              About us
            </Link>
            <Link
              href="/collaboration"
              className={`text-sm font-medium ${
                isActive("/collaboration")
                  ? "text-[#0066FF]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Collaborations
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium ${
                isActive("/events")
                  ? "text-[#0066FF]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Events and News
            </Link>
            <Link
              href="/contact"
              className="bg-[#0066FF] text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium flex items-center ml-4"
            >
              Contact Us
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0066FF]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link
            href="/"
            className={`block px-3 py-2 text-base font-medium ${
              isActive("/")
                ? "text-[#0066FF]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`block px-3 py-2 text-base font-medium ${
              isActive("/services")
                ? "text-[#0066FF]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 text-base font-medium ${
              isActive("/about")
                ? "text-[#0066FF]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About us
          </Link>
          <Link
            href="/collaboration"
            className={`block px-3 py-2 text-base font-medium ${
              isActive("/collaboration")
                ? "text-[#0066FF]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Collaborations
          </Link>
          <Link
            href="/events"
            className={`block px-3 py-2 text-base font-medium ${
              isActive("/events")
                ? "text-[#0066FF]"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Events and News
          </Link>
          <Link
            href="/contact"
            className="bg-[#0066FF] text-white block px-3 py-2 rounded-full text-base font-medium mt-4 mx-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
