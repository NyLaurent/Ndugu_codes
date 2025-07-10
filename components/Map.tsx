"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize map only if it hasn't been initialized yet
      if (!mapRef.current) {
        // Set default marker icon options
        L.Icon.Default.imagePath =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

        // Create map instance
        mapRef.current = L.map("map").setView([-1.9441, 30.0619], 13);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        // Add marker for Web3 Mates location
        L.marker([-1.9441, 30.0619], {
          title: "Web3 Mates",
        })
          .addTo(mapRef.current)
          .bindPopup("Web3 Mates - Innovation Hub")
          .openPopup();
      }
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div id="map" className="w-full h-full" />;
}
