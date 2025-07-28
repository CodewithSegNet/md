import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GetInvolved } from './components/GetInvolved';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhatMakesUsBest } from './components/WhatMakesUsBest';
import { Gallery } from './components/Gallery';
import { NewsletterSection } from './components/NewsletterSection';
import { QuestionsSection } from './components/QuestionsSection';
import { Footer } from './components/Footer';
import { CookieConsent } from './utils/cookies.jsx';
import './App.css'
import './index.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="overflow-x-hidden">
        <Hero />
        <GetInvolved />
        {/* 
        <AboutSection />
        <ServicesSection />
        <WhatMakesUsBest />
        <Gallery />
        <NewsletterSection />
        <QuestionsSection /> */}
      </main>
      {/* <Footer /> */}
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;