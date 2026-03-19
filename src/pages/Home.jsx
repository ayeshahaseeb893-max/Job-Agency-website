import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import JobCategories from '../components/sections/JobCategories';
import FeaturedJobs from '../components/sections/FeaturedJobs';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Hero />
      <Features />
      <JobCategories />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
