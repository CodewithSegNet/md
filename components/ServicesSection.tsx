import { useScrollAnimation } from '../utils/animation';
import desktop from '../assets/Desktop.png'
import desktop1 from '../assets/Desktop1.png'
import desktop2 from '../assets/Desktop2.png'




export function ServicesSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [imagesRef, areImagesVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">


   <div className='space-y-12'>

<div ref={headerRef} className={`flex text-center gap-7 flex-col justify-center mx-auto transition-all duration-1000 ease-out ${
  isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  <p className='bg-[rgba(203,8,240,0.1)] shadow-md mx-auto rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Why We Stand Out</p>

  <h3 className='font-normal text-[35px] font-georgia'>What Makes Us Best</h3>
</div>


<div ref={imagesRef} className='flex justify-center gap-9 mx-auto'>

  <div className={`transition-all duration-1000 delay-200 ease-out ${
    areImagesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
  }`}>
    <img src={desktop} alt="" className="hover:scale-105 transition-transform duration-500 ease-out" />
  </div>


    <div className={`mt-[4rem] transition-all duration-1000 delay-400 ease-out ${
      areImagesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`}>
      <img src={desktop1} alt="" className="hover:scale-105 transition-transform duration-500 ease-out" />
    </div>


    <div className={`transition-all duration-1000 delay-600 ease-out ${
      areImagesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
    }`}>
      <img src={desktop2} alt="" className="hover:scale-105 transition-transform duration-500 ease-out" />
    </div>

</div>
</div>

       
      </div>
    </section>
  );
}