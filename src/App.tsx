import React from 'react';
import AccessibilityFeatures from './components/ui/AccessibilityFeatures';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoIsMSzingers from './components/sections/WhoIsMSzingers';
import WhatIsMS from './components/sections/WhatIsMS';
import MSStory from './components/sections/MSStory';
import MSAdventures from './components/sections/MSAdventures';
import SpillingZingers from './components/sections/SpillingZingers';
import MSzingerSays from './components/sections/MSzingerSays';
import MonthlyTingle from './components/sections/MonthlyTingle';
import FiveStarZingers from './components/sections/FiveStarZingers';
import ZiggyZeeMiki from './components/sections/ZiggyZeeMiki';
import ZiggyHoliday from './components/sections/ZiggyHoliday';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <AccessibilityFeatures />
      <Navigation />
      <Hero />
      <main id="main-content">
        <ZiggyHoliday />
        <WhoIsMSzingers />
        <WhatIsMS />
        <MSStory />
        <MSAdventures />
        <SpillingZingers />
        <MSzingerSays />
        <MonthlyTingle />
        <FiveStarZingers />
        <ZiggyZeeMiki />
      </main>
      <Footer />
    </div>
  );
}

export default App;