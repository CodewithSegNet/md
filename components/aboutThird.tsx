import { Target, Eye, Award, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';


const AboutThird = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">

        <div className='flex items-start max-w-screen-2xl px-4 sm:px-6 lg:px-8 mx-auto'>

            <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
              isTitleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>

<h1 className='text-[40px] w-[461px] font-normal font-georgia'>
    Who We Are
</h1>
            </div>

<div ref={contentRef} className={`transition-all duration-1000 delay-300 ease-out ${
  isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
}`}>
<p className='text-base font-helvetica'>
    Empowerment & Elevation Legacy International (EELI) is a community-driven organization committed to uplifting women and children through compassion, support, and empowerment. We provide practical tools, emotional guidance, and life-changing programs that inspire growth, build resilience, and create lasting impact in communities locally and globally.
At EELI, we believe in nurturing the bond between mothers and children while helping families thrive.
</p>
</div>

        </div>

    </section>
  );
}

export default AboutThird;