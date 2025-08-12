import { useScrollAnimation } from '../utils/animation';
import desktop from '../assets/ds1.png'
import desktop1 from '../assets/ds2.png'
import desktop2 from '../assets/ds3.png'
import desktop3 from '../assets/ds4.png'
import desktop4 from '../assets/ds5.png'
import desktop5 from '../assets/ds6.png'



const AboutSeven = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [topRowRef, isTopRowVisible] = useScrollAnimation({ threshold: 0.3 });
  const [bottomRowRef, isBottomRowVisible] = useScrollAnimation({ threshold: 0.4 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden px-4 sm:px-6 lg:px-8">

        <div className='max-w-screen-2xl mx-auto '>
            <div ref={headerRef} className={`flex text-left gap-4 flex-col mb-5 justify-start transition-all duration-1000 ease-out ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className='bg-[rgba(203,8,240,0.1)] shadow-md rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Our Team</p>

            <h3 className='font-normal text-[35px] font-georgia'>Meet Our Team</h3>
          </div>



<div className='flex items-start gap-8 flex-col'>


<div ref={topRowRef} className={`flex items-center gap-[24px] transition-all duration-1000 ease-out ${
  isTopRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
}`}>
    <div className={`transition-all duration-700 ease-out delay-100 ${
      isTopRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Faith Idukpaye</h1>
            <h1 className='text-base font-normal font-helvetica'>Founder</h1>
        </div>
    </div>

    <div className={`transition-all duration-700 ease-out delay-200 ${
      isTopRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop4} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Trinity Ogboe</h1>
            <h1 className='text-base font-normal font-helvetica'>Admin | Youth and Children Coordinator</h1>
        </div>
    </div>


    <div className={`transition-all duration-700 ease-out delay-300 ${
      isTopRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop2} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Regina</h1>
            <h1 className='text-base font-normal font-helvetica'>Youth and Children Coordinator </h1>
        </div>
    </div>


    <div className={`transition-all duration-700 ease-out delay-500 ${
      isTopRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop1} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Faith Abraham</h1>
            <h1 className='text-base font-normal font-helvetica'>Image/Style/Etiquette Coordinator</h1>
        </div>
    </div>
</div>





<div ref={bottomRowRef} className={`flex items-center gap-[24px] mt-10 transition-all duration-1000 ease-out ${
  isBottomRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
}`}>
    <div className={`transition-all duration-700 ease-out delay-200 ${
      isBottomRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop3} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Tirelo Ntsima</h1>
            <h1 className='text-base font-normal font-helvetica'>Career/Business/Investment coordinator </h1>
        </div>
    </div>

    <div className={`transition-all duration-700 ease-out delay-400 ${
      isBottomRowVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
    }`}>
        <img src={desktop5} className='h-[434px] w-[366px] transition-transform duration-500 hover:scale-105' alt="" />

        <div>
            <h1 className='text-xl font-normal text-black font-georgia my-2'>Gcinile</h1>
            <h1 className='text-base font-normal font-helvetica'>Head Youth and Children Coordinator</h1>
        </div>
    </div>


</div>



</div>


        </div>

    </section>
  );
}

export default AboutSeven;