import { CheckCircle, Clock, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';

const WhatMakesUsBest = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div ref={contentRef} className={`flex items-center flex-col justify-center transition-all duration-1000 ease-out ${
  isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  <h2 className={`font-georgia text-[35px] text-center transition-all duration-700 delay-200 ease-out ${
    isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`}>At EELI, support is heartfelt — <span className='text-[rgba(203,8,240,1)]'>every action is guided by love, dignity, and empowerment.</span></h2>
  <h2 className={`font-georgia text-[35px] text-center transition-all duration-700 delay-400 ease-out ${
    isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`}>We uplift women and children every step of the way.</h2>
</div>


      </div>
    </section>
  );
}

export default WhatMakesUsBest;