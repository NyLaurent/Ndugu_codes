"use client";

import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import EmpowerSection from "@/components/EmpowerSection";
import InnovateSection from "@/components/InnovateSection";
import NewsletterSection from "@/components/NewsletterSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

export default function Home() {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <EmpowerSection />
      <InnovateSection />
      <NewsletterSection />
    </div>
  );
}
