"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Always show loading for minimum 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-float">
        <Image
          src="/logo.svg"
          alt="Ndugu Codes Logo"
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
