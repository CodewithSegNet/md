import { useState } from 'react';
import { Header } from '../../components/Header';
import Annouces from '../../components/announcements';

import { Footer } from '../../components/Footer';
import '../../App.css'
import '../../index.css'

function Announcements() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="overflow-x-hidden">
<Annouces/>
 
      </main>
      <Footer />
    </div>
  );
}

export default Announcements;
