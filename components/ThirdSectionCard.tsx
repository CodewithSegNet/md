import { Target, Eye, Award, Globe } from 'lucide-react';
import ThirdImg from '../assets/thirdImg.png'
import svgImg from '../assets/bbr1.svg'
import svgImg2 from '../assets/bbr2.svg'
import svgImg3 from '../assets/download.svg'



export function ThirdSection() {


  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='flex items-start gap-12 bg-[rgba(203,8,240,0.1)] rounded-2xl shadow-md px-[2rem] py-[4rem]'>

          <div className='w-[424px] h-auto'>
<img src={ThirdImg} alt="" />
          </div>

<div className='w-[800px] space-y-20'>

  <div className='w-[800px]'>
  <h3 className='font-georgia text-[40px] font-normal'>Guide To <span className='text-regular'>Managing mental Health Issues</span> : </h3>
  <h3 className='font-georgia text-[40px] font-normal'>Anxiety, Depression, And Burnout</h3>
  
  <p className='font-helvetica text-md pr-[5rem]'>This handbook provides practical tools, insights, and supportive strategies to help you understand, 
    manage, and navigate mental health challenges such as anxiety, 
    depression, and burnout — both in your personal and professional life.</p>
  </div>


  <div className='flex items-center '>

    <div className='w-[374px] border-r pr-6'>
<img src={svgImg} className='mb-3' alt="" />

<h3 className='font-georgia font-normal text-2xl mb-3'>Understand What You’re Feeling </h3>
<p className='font-helvetica text-sm'>Learn how to identify the signs of anxiety, depression, and burnout — and what they mean for your mental and emotional well-being.</p>
    </div>


        <div className='w-[374px] px-6 pb-6'>
<img src={svgImg2} className='mb-3' alt="" />

<h3 className='font-georgia font-normal text-2xl mb-3'>Take Back Control</h3>
<p className='font-helvetica text-sm'>Discover practical tools and coping strategies to manage stress, set boundaries, and build a healthier mindset.</p>
    </div>

  </div>


   <button className='bg-primary w-fit transition-all hover:bg-purple-500 hover:scale-105 hover:shadow-lg duration-300 rounded-full py-4 px-10 text-white flex items-center gap-2 justify-center group animate-fade-in-up transform hover:-translate-y-1' style={{animationDelay: '1s'}}>
                            <p className='text-white flex items-center gap-3 font-bold text-sm font-helvetica transition-all duration-300 group-hover:tracking-wide'><span> <img src={svgImg3} alt="" /></span> DOWNLOAD HANDBOOK</p>
                          </button>

</div>
        </div>
    
      </div>
    </section>
  );
}