"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function LocationMap() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Map />
          </div>

          {/* Location Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Innovation Hub
              </h2>
              <p className="text-gray-600 mb-4">
                Find us at the heart of Kigali&apos;s tech ecosystem—open for
                collaboration, training, and innovation.
              </p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Read more →
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Address
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Ndugu Codes (DC)</p>
                <p className="text-gray-600">
                  Bumbogo Innovation & Technology Hub
                </p>
                <p className="text-gray-600">KG 690 Street, Kigali, Rwanda</p>
              </div>
            </div>

            <div>
              <Link
                href="https://maps.google.com/?q=-1.9441,30.0619"
                target="_blank"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Get directions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
