import { useState } from 'react';
import { Header } from '../../components/Header';
import GallerySection from '../../components/gallerySection';

import { Footer } from '../../components/Footer';
import '../../App.css'
import '../../index.css'

function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="overflow-x-hidden">
<GallerySection/>

 
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
