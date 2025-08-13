import { Target, Eye, Award, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';
import img1 from "../assets/build1.png"
import { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          setTimeout(() => {
            let startTime = null;
            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              
              // Easing function for smoother animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOutQuart * end));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasStarted]);

  return (
    <span ref={ref} className="inline-block">
      {count}+
    </span>
  );
};

const AboutFour = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [containerRef, isContainerVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>

     <div ref={containerRef} className={`hidden lg:flex items-center justify-center rounded-2xl transition-all duration-1000 ease-out ${
       isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
     }`} style={{
       backgroundImage: `url(${img1})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       width: '100%',
       height: '330px'
     }}>


<div className='flex gap-10 items-center '>


<div className={`w-[286px] transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-100 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={100} duration={2500} delay={200} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Women Empowered</h3>
    <p className='text-base font-helvetica font-normal'>Mentorship, skills training, and support programs.</p>
</div>


<div className={`w-[286px] transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-300 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={120} duration={2500} delay={400} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Children Reached</h3>
    <p className='text-base font-helvetica font-normal'>School drives, food programs, and holiday support.</p>
</div>


<div className={`w-[286px] transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-500 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={50} duration={2500} delay={600} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Community Events</h3>
    <p className='text-base font-helvetica font-normal'>Workshops, healing sessions, and leadership seminars.</p>
</div>



<div className={`w-[286px] transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-700 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={90} duration={2500} delay={800} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Families Assisted </h3>
    <p className='text-base font-helvetica font-normal'>Providing financial relief, emotional support, and practical care to families in need.</p>
</div>



</div>



     </div>



<div className='block lg:hidden gap-10 items-center text-center justify-center'>


<div className={`w-full transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-100 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={100} duration={2500} delay={200} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Women Empowered</h3>
    <p className='text-base font-helvetica font-normal'>Mentorship, skills training, and support programs.</p>
</div>


<div className={`w-full transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-300 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={120} duration={2500} delay={400} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Children Reached</h3>
    <p className='text-base font-helvetica font-normal'>School drives, food programs, and holiday support.</p>
</div>


<div className={`w-full transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-500 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={50} duration={2500} delay={600} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Community Events</h3>
    <p className='text-base font-helvetica font-normal'>Workshops, healing sessions, and leadership seminars.</p>
</div>



<div className={`w-full transform transition-all duration-700 hover:scale-105 ${
  isContainerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
} delay-700 ease-out`}>

    <h1 className='text-[64px] text-[rgba(203,8,240,1)] font-georgia mb-3 font-normal'>
      <CountUp end={90} duration={2500} delay={800} />
    </h1>

    <h3 className='font-normal mb-2 text-xl font-georgia text-black'>Families Assisted </h3>
    <p className='text-base font-helvetica font-normal'>Providing financial relief, emotional support, and practical care to families in need.</p>
</div>



</div>

</div>

    </section>
  );
}

export default AboutFour;