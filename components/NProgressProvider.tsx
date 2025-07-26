"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export default function NProgressProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    NProgress.start();
    // Add a small artificial delay for smoother effect
    timeout = setTimeout(() => {
      NProgress.done();
    }, 600);
    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
    // Only run on pathname change
  }, [pathname]);

  return <>{children}</>;
} 