import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';
import desktop from '../assets/img1.png'
import desktop1 from '../assets/img2.png'
import desktop2 from '../assets/img3.png'
import desktop3 from '../assets/img4.png'
import desktop4 from '../assets/img5.png'




export function Gallery() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [topRowRef, isTopRowVisible] = useScrollAnimation({ threshold: 0.3 });
  const [bottomRowRef, isBottomRowVisible] = useScrollAnimation({ threshold: 0.4 });

  return (
    <section ref={sectionRef} id="gallery" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="gap-4">

          <div ref={headerRef} className={`flex text-left gap-4 flex-col mb-5 justify-start transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className='bg-[rgba(203,8,240,0.1)] shadow-md rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Why It Matters</p>

            <h3 className='font-normal text-[35px] font-georgia'>We've Touched Lives</h3>
          </div>

          <div ref={topRowRef} className="flex gap-4 h-[450px] mb-4 justify-center">
            <div className={`w-[65%] rounded-2xl overflow-hidden transition-all duration-1000 ease-out ${
              isTopRowVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'
            }`}>
              <img src={desktop2} alt="" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <div className={`w-[35%] rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ease-out ${
              isTopRowVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}>
              <img src={desktop1} alt="" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
          </div>

          <div ref={bottomRowRef} className="flex gap-4 h-[450px] justify-center">
            <div className={`w-[30%] rounded-2xl overflow-hidden transition-all duration-1000 ease-out ${
              isBottomRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <img src={desktop} alt="" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <div className={`w-[40%] rounded-2xl overflow-hidden transition-all duration-1000 delay-200 ease-out ${
              isBottomRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <img src={desktop3} alt="" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            <div className={`w-[30%] rounded-2xl overflow-hidden transition-all duration-1000 delay-400 ease-out ${
              isBottomRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>
              <img src={desktop4} alt="" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}