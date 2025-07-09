"use client";

import CollaborationHero from "@/components/CollaborationHero";
import MiddleDecoration from "@/components/MiddleDecoration";
import CollaborationStories from "@/components/CollaborationStories";
import React from "react";
import ContactSection from "@/components/ContactSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import useLoading from "@/hooks/useLoading";

const Collaboration = () => {
  const loading = useLoading();

  if (loading) {
    return <LoadingSpinner isLoading={loading} />;
  }

  return (
    <div>
      <CollaborationHero />
      <MiddleDecoration />

      <CollaborationStories />
      <ContactSection />
    </div>
  );
};

export default Collaboration;
