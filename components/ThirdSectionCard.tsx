import { Target, Eye, Award, Globe } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';
import ThirdImg from '../assets/thirdImg.png'
import svgImg from '../assets/bbr1.svg'
import svgImg2 from '../assets/bbr2.svg'
import svgImg3 from '../assets/download.svg'



export function ThirdSection() {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.3 });
  const [featuresRef, areFeaturesVisible] = useScrollAnimation({ threshold: 0.4 });
  const [buttonRef, isButtonVisible] = useScrollAnimation({ threshold: 0.5 });

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='flex items-start gap-12 bg-[rgba(203,8,240,0.1)] rounded-2xl shadow-md px-[2rem] py-[4rem]'>

          <div ref={imageRef} className={`w-[424px] h-auto transition-all duration-1000 ease-out ${
            isImageVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-10 scale-95'
          }`}>
            <img src={ThirdImg} alt="" className="hover:scale-105 transition-transform duration-500 ease-out" />
          </div>

          <div className='w-[800px] space-y-20'>

            <div ref={contentRef} className={`w-[800px] transition-all duration-1000 delay-300 ease-out ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className='font-georgia text-[40px] font-normal'>Guide To <span className='text-regular'>Managing mental Health Issues</span> : </h3>
              <h3 className='font-georgia text-[40px] font-normal'>Anxiety, Depression, And Burnout</h3>
              
              <p className='font-helvetica text-md pr-[5rem]'>This handbook provides practical tools, insights, and supportive strategies to help you understand, 
                manage, and navigate mental health challenges such as anxiety, 
                depression, and burnout — both in your personal and professional life.</p>
            </div>


            <div ref={featuresRef} className='flex items-center'>

              <div className={`w-[374px] border-r border-gray-400 pr-6 transition-all duration-800 delay-500 ease-out ${
                areFeaturesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}>
                <img src={svgImg} className='mb-3' alt="" />

                <h3 className='font-georgia font-normal text-2xl mb-3'>Understand What You're Feeling </h3>
                <p className='font-helvetica text-sm'>Learn how to identify the signs of anxiety, depression, and burnout — and what they mean for your mental and emotional well-being.</p>
              </div>


              <div className={`w-[374px] px-6 pb-6 transition-all duration-800 delay-700 ease-out ${
                areFeaturesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}>
                <img src={svgImg2} className='mb-3' alt="" />

                <h3 className='font-georgia font-normal text-2xl mb-3'>Take Back Control</h3>
                <p className='font-helvetica text-sm'>Discover practical tools and coping strategies to manage stress, set boundaries, and build a healthier mindset.</p>
              </div>

            </div>

            <button ref={buttonRef} className={`bg-primary w-fit transition-all hover:bg-purple-500 hover:scale-105 hover:shadow-lg duration-300 rounded-full py-4 px-10 text-white flex items-center gap-2 justify-center group transform hover:-translate-y-1 delay-900 ease-out ${
              isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <p className='text-white flex items-center gap-3 font-bold text-sm font-helvetica transition-all duration-300 group-hover:tracking-wide'><span> <img src={svgImg3} alt="" /></span> DOWNLOAD HANDBOOK</p>
            </button>

          </div>
        </div>
    
      </div>
    </section>
  );
}