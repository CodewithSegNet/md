import { ArrowRight, Play } from 'lucide-react';
import hero from '../assets/hero.png'
import hero2 from '../assets/hero2.png'
import smily from '../assets/smily.svg'
import people from '../assets/people.svg'
import icon1 from '../assets/twi1.png'
import icon2 from '../assets/twi2.png'
import icon3 from '../assets/twi3.png'
import icon4 from '../assets/twi4.png'
import icon5 from '../assets/twi5.png'




export function Hero() {
  return (
    <section id="home" className="pt-[9rem] bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex items-center">
          {/* Content */}
          <div className="flex justify-evenly gap-5 space-y-8">
            <div className="flex relative gap-5">
              
              <div className='space-y-1'>
<h1 className="bg-white p-3 text-4xl md:text-5xl lg:text-6xl font-normal w-fit rounded-2xl font-georgia text-gray-900 leading-tight relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Empowering Women,
              
              </h1>
                  <p className=" text-regular bg-white p-3 text-4xl md:text-5xl lg:text-6xl font-normal w-fit rounded-2xl font-georgia leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Uplifting Children,
                </p>
                
                <h1 className='bg-white absolute p-3 z-50 text-4xl md:text-5xl lg:text-6xl font-normal w-fit rounded-2xl font-georgia text-gray-900 leading-tight animate-fade-in-up' style={{animationDelay: '0.6s'}}>
                Transforming Generation
                </h1>

                <div className='flex gap-3 flex-col relative pt-[6rem]'>

                     <p className=" text-md md:text-md text-gray-600 leading-relaxed w-[36.5rem] animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                EELI is dedicated to fostering joy, hope, and lasting change through mentorship, community support, and love.
              </p>




                         <button className='bg-primary w-fit transition-all hover:bg-purple-500 hover:scale-105 hover:shadow-lg duration-300 rounded-full py-4 px-10 text-white flex items-center gap-2 justify-center group animate-fade-in-up transform hover:-translate-y-1' style={{animationDelay: '1s'}}>
                            <p className='text-white font-bold text-sm font-helvetica transition-all duration-300 group-hover:tracking-wide'>EMPOWER A WOMAN NOW</p>
                          </button>


                          <div className='flex items-center gap-3 mt-[3rem] animate-fade-in-up' style={{animationDelay: '1.2s'}}>
                            <img src={people} alt="" className="animate-pulse-soft" />
                            <p> <span className='text-primary font-black animate-count-up'> 50+</span> Women have been empowered <br /> by EELI </p>
                          </div>
                </div>
              </div>



  <div className='relative inset-0 w-[29.875rem] animate-fade-in-right' style={{animationDelay: '0.3s'}}>
                  <img src={hero} className='relative hover:scale-105 transition-transform duration-500 ease-out' alt="" />

<div className='absolute bottom-0 right-[-3rem] w-[327px] flex flex-wrap items-center mb-6'>
                           <div className='bg-white mb-2 p-3 ml-2 rounded-full flex gap-2 items-center w-fit hover:shadow-md hover:scale-105 transition-all duration-300 animate-float' style={{animationDelay: '1.4s'}}>
<img src={icon2} className='w-5 h-5' alt="" />
                  <p className='text-xs '>Women Who Lead</p>
                </div>   <div className='bg-white mb-2 p-3 rounded-full ml-2 flex gap-2 items-center w-fit hover:shadow-md hover:scale-105 transition-all duration-300 animate-float' style={{animationDelay: '1.6s'}}>
<img src={icon3} className='w-5 h-5' alt="" />
                  <p className='text-xs '>Empower Her</p>
                </div>   <div className='bg-white mb-2 p-3 ml-2 rounded-full flex gap-2 items-center w-fit hover:shadow-md hover:scale-105 transition-all duration-300 animate-float' style={{animationDelay: '1.8s'}}>
<img src={icon4} className='w-5 h-5' alt="" />
                  <p className='text-xs '>She Rises</p>
                </div>   <div className='bg-white mb-2 p-3 ml-2 rounded-full flex gap-2 items-center w-fit hover:shadow-md hover:scale-105 transition-all duration-300 animate-float' style={{animationDelay: '2s'}}>
<img src={icon5} className='w-5 h-5' alt="" />
                  <p className='text-xs '>Her Voice, Her Power</p>
                </div>
                  </div>
                </div>
         
            </div>

            <div className="flex flex-col gap-2 w-[23.0625rem] animate-fade-in-left" style={{animationDelay: '0.5s'}}>

              <div className='flex flex-col'>
                <div className='bg-white mb-2 p-3 rounded-full flex gap-2 items-center w-fit hover:shadow-md hover:scale-105 transition-all duration-300 animate-fade-in-up' style={{animationDelay: '0.7s'}}>
<img src={icon1} className='w-5 h-5' alt="" />
                  <p className='text-xs '>Little Dreams, Big Futures</p>
                </div>

                <div className='flex items-end gap-3'>
      <h2 className='text-[30px] font-normal font-georgia animate-fade-in-up' style={{animationDelay: '0.9s'}}>
                Every Child <br /> Deserves to Smile
              </h2>

              <img src={smily} className='pb-2 animate-bounce-soft' style={{animationDelay: '1.1s'}} alt="" />
                </div>
  


              <p className="animate-fade-in-up" style={{animationDelay: '1.3s'}}>We believe every child deserves joy, love, and the chance to 
                grow in a safe and supportive environment. 
                Through community care and compassion, we create moments that light up their world.
                </p>
              </div>

      
<div className='w-[23.0625rem ] animate-fade-in-up' style={{animationDelay: '1.5s'}}>
                <img src={hero2} alt="" className="hover:scale-105 transition-transform duration-500 ease-out" />

</div>
        
            </div>

            {/* Stats */}
          
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse-soft {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes count-up {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}