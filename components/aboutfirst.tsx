import { Target, Eye, Award, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';
import rec from "../assets/Rectangle3.png"

const AboutFirst = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [imagesRef, areImagesVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">

      <div className='max-w-screen-2xl mt-[6rem] mx-auto px-4 sm:px-6 lg:px-8'>

     <div className="flex items-center justify-center rounded-2xl" style={{
       backgroundImage: `url(${rec})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       width: '100%',
       height: '400px'
     }}>

<div ref={headerRef} className={`flex text-center gap-5 flex-col justify-center mx-auto transition-all duration-1000 ease-out ${
  isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  <p className='bg-[rgba(203,8,240,0.1)] shadow-md mx-auto rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>About Us</p>

  <h3 className='font-normal text-[25px] md:text-[35px] font-georgia'>Get to know about EELI</h3>

  <p className='text-xs px-2 md:px-0'>EELI empowers women and children through support, education, and life-changing community programs.</p>
</div>

     </div>

      </div>
    </section>
  );
}

export default AboutFirst;