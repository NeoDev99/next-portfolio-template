import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/Projects';
import TapeSection from '@/components/sections/Tape';
import TestimonalsSection from '@/components/sections/Testimonials';
import AboutSection from '@/components/sections/About';
import ContactSection from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonalsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;