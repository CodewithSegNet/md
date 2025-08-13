import React, { useState } from 'react';

import img1 from '../assets/gs12.jpg'
import img2 from '../assets/js1.jpg'
import img3 from '../assets/js2.jpg'
import img4 from '../assets/js3.jpg'
import img5 from '../assets/js4.jpg'
import img6 from '../assets/js5.jpg'
import img7 from '../assets/js6.jpg'
import img8 from '../assets/js7.jpg'
import img9 from '../assets/js8.jpg'
import img10 from '../assets/js9.jpg'
import img11 from '../assets/js10.jpg'
import img12 from '../assets/js3.jpg'
import img13 from '../assets/js7.jpg'
import img14 from '../assets/js4.jpg'
import img15 from '../assets/js1.jpg'
import img16 from '../assets/js10.jpg'
import img17 from '../assets/js11.jpg'
import img18 from '../assets/js3.jpg'
import img19 from '../assets/js8.jpg'
import img20 from '../assets/js13.jpg'
import img21 from '../assets/js14.jpg'
import img24 from '../assets/js15.jpg'
import img22 from '../assets/js16.jpg'
import img23 from '../assets/js17.jpg'


const PinterestGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Using varied height placeholder images to create Pinterest masonry effect
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: img1,
      alt: "Gallery Image 1",
      height: 'h-69'
    },
    {
      id: 2,
      type: 'image',
      src: img19,
      alt: "Gallery Image 2",
      height: 'h-80'
    },
    {
      id: 3,
      type: 'image',
      src: img18,
      alt: "Gallery Image 3",
      height: 'h-72'
    },
    {
      id: 4,
      type: 'image',
      src: img17,
      alt: "Gallery Image 4",
      height: 'h-96'
    },
    {
      id: 5,
      type: 'image',
      src: img16,
      alt: "Gallery Image 5",
      height: 'h-60'
    },
    {
      id: 6,
      type: 'image',
      src: img15,
      alt: "Gallery Image 6",
      height: 'h-88'
    },
    {
      id: 7,
      type: 'image',
      src: img14,
      alt: "Gallery Image 7",
      height: 'h-72'
    },
    {
      id: 8,
      type: 'image',
      src: img13,
      alt: "Gallery Image 8",
      height: 'h-64'
    },
    {
      id: 9,
      type: 'image',
      src: img12,
      alt: "Gallery Image 9",
      height: 'h-96'
    },
    {
      id: 10,
      type: 'image',
      src: img11,
      alt: "Gallery Image 10",
      height: 'h-56'
    },
    {
      id: 11,
      type: 'image',
      src: img10,
      alt: "Gallery Image 11",
      height: 'h-80'
    },
    {
      id: 12,
      type: 'image',
      src: img9,
      alt: "Gallery Image 12",
      height: 'h-72'
    },
    {
      id: 13,
      type: 'image',
      src: img8,
      alt: "Gallery Image 13",
      height: 'h-64'
    },
    {
      id: 14,
      type: 'image',
      src: img7,
      alt: "Gallery Image 14",
      height: 'h-96'
    },
    {
      id: 15,
      type: 'image',
      src: img6,
      alt: "Gallery Image 15",
      height: 'h-60'
    },
    {
      id: 16,
      type: 'image',
      src: img5,
      alt: "Gallery Image 16",
      height: 'h-88'
    },
    {
      id: 17,
      type: 'image',
      src: img4,
      alt: "Gallery Image 17",
      height: 'h-72'
    },
    {
      id: 18,
      type: 'image',
      src: img3,
      alt: "Gallery Image 18",
      height: 'h-80'
    },
    {
      id: 19,
      type: 'image',
      src: img2,
      alt: "Gallery Image 19",
      height: 'h-64'
    },
        
    {
      id: 20,
      type: 'image',
      src: img1,
      alt: "Gallery Image 20",
      height: 'h-96'
    },
    {
      id: 21,
      type: 'image',
      src: img20,
      alt: "Gallery Image 19",
      height: 'h-72'
    },
    {
      id: 22,
      type: 'image',
      src: img23,
      alt: "Gallery Image 19",
      height: 'h-60'
    },
    {
      id: 23,
      type: 'image',
      src: img21,
      alt: "Gallery Image 19",
      height: 'h-88'
    },
    {
      id: 24,
      type: 'image',
      src: img22,
      alt: "Gallery Image 19",
      height: 'h-80'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      {/* Pinterest-style masonry grid */}
      <div className="max-w-screen-2xl mx-auto px-4 pt-[10rem] pb-[5rem]">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="
                break-inside-avoid mb-4 group cursor-pointer
                transition-all duration-300 ease-in-out
                hover:scale-[1.02] hover:shadow-2xl
                rounded-2xl overflow-hidden
                bg-white shadow-md
                relative
                transform hover:-translate-y-1
              "
              onClick={() => openModal(item)}
            >
              {item.type === 'image' ? (
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`
                      w-full object-cover
                      transition-all duration-500 ease-in-out
                      group-hover:brightness-105 group-hover:scale-105
                      ${item.height}
                    `}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="
                    absolute inset-0 bg-black/0 group-hover:bg-black/10
                    transition-all duration-300 ease-in-out
                    flex items-center justify-center
                  ">
                    <div className="
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      bg-white/90 backdrop-blur-sm
                      px-4 py-2 rounded-full
                      shadow-lg
                    ">
                      <span className="text-gray-800 font-medium">View</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <video
                    className={`
                      w-full object-cover
                      transition-all duration-500 ease-in-out
                      group-hover:brightness-110
                      ${item.height}
                    `}
                    poster={item.poster}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  
                  {/* Play button overlay */}
                  <div className="
                    absolute inset-0 flex items-center justify-center
                    bg-black/20 group-hover:bg-black/30
                    transition-all duration-300
                  ">
                    <div className="
                      w-16 h-16 bg-white/90 rounded-full
                      flex items-center justify-center
                      group-hover:bg-white group-hover:scale-110
                      transition-all duration-300 shadow-lg
                    ">
                      <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Modal */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 bg-black/95 z-50 
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            backdrop-blur-sm
          "
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="
              absolute top-6 right-6 z-20
              text-white hover:text-red-400
              text-4xl font-light leading-none
              transition-all duration-200
              p-3 hover:bg-white/10 rounded-full
              hover:rotate-90 transform
            "
            aria-label="Close"
          >
            ×
          </button>
          
          {/* Modal content */}
          <div className="w-full h-full flex items-center justify-center p-8">
            {selectedImage.type === 'image' ? (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="
                  max-w-full max-h-full object-contain
                  rounded-lg shadow-2xl
                  transition-all duration-500 ease-out
                  animate-in fade-in zoom-in-95
                "
              />
            ) : (
              <video
                className="
                  max-w-full max-h-full object-contain
                  rounded-lg shadow-2xl
                  transition-all duration-500 ease-out
                  animate-in fade-in zoom-in-95
                "
                controls
                autoPlay
                poster={selectedImage.poster}
              >
                <source src={selectedImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          
          {/* Click indicator */}
          <div className="
            absolute bottom-8 left-1/2 transform -translate-x-1/2
            text-white/80 text-sm font-light
            hidden md:block bg-black/50 px-6 py-3 rounded-full
            border border-white/20
          ">
            Click anywhere to close
          </div>
        </div>
      )}
    </div>
  );
};

export default PinterestGallery;