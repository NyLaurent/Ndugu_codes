import CollaborationHero from "@/components/CollaborationHero";
import MiddleDecoration from "@/components/MiddleDecoration";
import CollaborationStories from "@/components/CollaborationStories";
import React from "react";
import ContactSection from "@/components/ContactSection";

const Collaboration = () => {
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
