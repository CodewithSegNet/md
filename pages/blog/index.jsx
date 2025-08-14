import { useState } from 'react';
import { Header } from '../../components/Header';
import Blog from '../../components/blog';

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
<Blog/>
 
      </main>
      <Footer />
    </div>
  );
}

export default Announcements;
