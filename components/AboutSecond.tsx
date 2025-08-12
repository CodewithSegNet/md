import { Target, Eye, Award, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';


const AboutSecond = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>


  <div className="container mx-auto max-w-screen-2xl">        
        <div ref={gridRef} className="grid grid-cols-3 grid-rows-4 gap-6 h-[550px]">
            {/* First Column - 2 boxes */}
            <div className={`bg-blue-500 text-white py-[4rem] px-7 rounded-2xl flex items-center justify-center row-span-3 transition-all duration-700 delay-100 ease-out ${
              isGridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
                <span className="text-lg font-semibold">Box 1</span>
            </div>
            <div className={`bg-[rgba(244,226,214,1)] text-white py-[4rem] px-7 rounded-2xl flex items-center justify-center row-span-1 transition-all duration-700 delay-300 ease-out ${
              isGridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
                            <div className='flex flex-col'>
 <h3 className="text-[24px] font-normal mb-1 font-georgia">Our Mission</h3>
                <p className='text-base font-helvetica font-normal'>We respond to real needs, from mentorship to food drives — creating meaningful change.</p>
              </div>
            </div>
            
            {/* Middle Column - 1 box */}
            <div className={`bg-purple-500 text-white py-[4rem] px-7 rounded-2xl flex items-center justify-center row-span-4 col-start-2 row-start-1 transition-all duration-700 delay-200 ease-out ${
              isGridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
                <span className="text-lg font-semibold">Box 3</span>
            </div>
            
            {/* Third Column - 2 boxes */}
            <div className={`bg-red-500 text-white py-[4rem] px-7 rounded-2xl flex items-center justify-center row-span-3 transition-all duration-700 delay-400 ease-out ${
              isGridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
                <span className="text-lg font-semibold">Box 4</span>
            </div>
            <div className={`bg-[rgba(240,228,240,1)] text-white py-[4rem] px-7 rounded-2xl flex items-center justify-center row-span-1 transition-all duration-700 delay-500 ease-out ${
              isGridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>

              <div className='flex flex-col'>
 <h3 className="text-[24px] font-normal mb-1 font-georgia">Our Vision</h3>
                <p className='text-base font-helvetica font-normal'>We respond to real needs, from mentorship to food drives — creating meaningful change.</p>
              </div>


            </div>
        </div>
    </div>
    
     </div>

    </section>
  );
}

export default AboutSecond;