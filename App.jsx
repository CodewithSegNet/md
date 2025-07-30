import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GetInvolved } from './components/GetInvolved';
import { ThirdSection } from './components/ThirdSectionCard.js';
import { ServicesSection } from './components/ServicesSection';
import { WhatMakesUsBest } from './components/WhatMakesUsBest';
import { Gallery } from './components/Gallery';
import { NewsletterSection } from './components/NewsletterSection';
import  FAQSection  from './components/QuestionsSection';
import  Payment  from './components/payment';
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
        <ThirdSection />
        <ServicesSection />
        <WhatMakesUsBest />
        <Gallery />
        <NewsletterSection />
        <Payment/>
  <FAQSection /> 

 
      </main>
      <Footer />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;