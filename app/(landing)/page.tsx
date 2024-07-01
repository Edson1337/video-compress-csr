'use client';

import { useEffect, useState } from 'react';
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import TrustedBy from "./components/trustedBy";
import CTA from "./components/cta";
import Footer from "~/components/Footer";
import VideoDemo from "./components/videoDemo";
import Testimonial from "./components/testimonial";
import { Navbar } from '~/components/Navbar';

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou um loader, se preferir
  }

  return (
    <>
      <div className="max-w-5xl mx-auto pt-32 space-y-16 sm:space-y-32">
        <div>
          <Navbar />
          <Hero />
          <VideoDemo />
        </div>
        <div className="space-y-6 sm:space-y-16">
          <TrustedBy />
          <Features />
        </div>
        <Pricing />
        {/* <Testimonial /> */}
        <Faq />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Page;