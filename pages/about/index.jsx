import { useState } from 'react';
import { Header } from '../../components/Header';
import AboutFirst from "../../components/aboutfirst.js" 
import AboutSecond from "../../components/AboutSecond.js" 
import AboutThird from "../../components/aboutThird.js" 
import AboutFour from "../../components/aboutFour.js" 
import AboutFive from "../../components/aboutFive.js" 
import AboutSix from "../../components/aboutSix.js" 
import AboutSeven from "../../components/aboutSeven.js" 
import AboutEight from "../../components/aboutEight.js" 


import { Footer } from '../../components/Footer';
import { CookieConsent } from '../../utils/cookies.jsx';
import { NewsletterSection } from '../../components/NewsletterSection';
import  FAQSection  from '../../components/QuestionsSection';
import  Payment  from '../../components/payment';
import '../../App.css'
import '../../index.css'

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="overflow-x-hidden">

<AboutFirst/>

<AboutSecond/>
<AboutThird/>
<AboutFour/>
<AboutFive/>
<AboutSix/>
<AboutSeven/>
<AboutEight/>



    <NewsletterSection />
        <Payment/>
        <FAQSection /> 
 
      </main>
      <Footer />
    </div>
  );
}

export default About;
