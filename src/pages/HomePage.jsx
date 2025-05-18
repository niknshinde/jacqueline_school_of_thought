import React from 'react';
import Hero from '../components/Hero';
import GlampingHighlights from '../components/GlampingHighlights';
import ImageGallery from '../components/ImageGallery';
import ExperiencesOverview from '../components/ExperiencesOverview';
import WellnessSection from '../components/WellnessSection';
import AdventureSection from '../components/AdventureSection';
// Import other sections here as you build them
// import FeaturesSection from '../components/FeaturesSection';
// import WellnessSection from '../components/WellnessSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <GlampingHighlights/>
      <AdventureSection/>
      <ExperiencesOverview/>
      <ImageGallery/>

      {/* 
      <div style={{padding: '40px 20px', textAlign: 'center'}}>
        <h2>Our Unique Offerings</h2>
        <p>Placeholder for next sections like Glamping Options, Wellness, Adventure etc.</p>
      </div> 
      */}
      {/* <FeaturesSection /> */}
      {/* <WellnessSection /> */}
      {/* ... and so on */}
    </>
  );
};

export default HomePage;