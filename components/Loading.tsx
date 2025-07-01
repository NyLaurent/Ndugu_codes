"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="logo-float">
        <Image
          src="/logo.svg"
          alt="Ndugu Codes Logo"
          width={120}
          height={120}
          priority
          className="drop-shadow-lg"
        />
      </div>
    </div>
  );
}
