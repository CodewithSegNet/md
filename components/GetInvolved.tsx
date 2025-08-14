import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';
import woman from '../assets/woman-posing.png'
import buttonarr from '../assets/buttonarr.svg'
import PlayCard from '../assets/playcard.png'
import video from '../assets/google-meet.svg';
import date from '../assets/time.svg';
import time from '../assets/time.svg';
import speaker from '../assets/microphone.svg';
import calendar from '../assets/schedule.svg';
import bolb from '../assets/bolb.svg';
import arrup from '../assets/arrow-up.svg';
import circle from '../assets/circle.png'
import whatsapp from '../assets/whatsapp.svg'




const events = [
  {
    id: 1,
    title: "Trusting the Process in Motherhood",
    date: "Saturday, June 21, 2025",
    time: "2:00 PM - 4:00 PM",
    speaker: "Pastor Dayo Ogunsanya"
  },
  {
    id: 2,
    title: "Building Strong Family Foundations",
    date: "Sunday, July 15, 2025",
    time: "10:00 AM - 12:00 PM",
    speaker: "Dr. Sarah Johnson"
  },
  {
    id: 3,
    title: "Empowering Women in Leadership",
    date: "Friday, August 9, 2025",
    time: "6:00 PM - 8:00 PM",
    speaker: "Minister Grace Adebayo"
  }
];

export function GetInvolved() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [leftCardRef, isLeftCardVisible] = useScrollAnimation({ threshold: 0.3 });
  const [centerCardRef, isCenterCardVisible] = useScrollAnimation({ threshold: 0.3 });
  const [rightCardRef, isRightCardVisible] = useScrollAnimation({ threshold: 0.3 });

  const transitionToEvent = (newIndex) => {
    if (newIndex === currentEvent || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentEvent(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const nextEvent = () => {
    const nextIndex = (currentEvent + 1) % events.length;
    transitionToEvent(nextIndex);
  };

  const prevEvent = () => {
    const prevIndex = (currentEvent - 1 + events.length) % events.length;
    transitionToEvent(prevIndex);
  };

  const goToEvent = (index) => {
    transitionToEvent(index);
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 xl:py-24 mx-auto bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-3 sm:gap-4 lg:gap-5'>
          <div ref={leftCardRef} className={`bg-[rgba(203,8,240,0.1)] relative rounded-2xl p-4 sm:p-6 lg:p-7 w-full max-w-[577px] transition-all duration-1000 ease-out ${
            isLeftCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img src={woman} className='w-full h-auto relative hover:scale-105 transition-transform duration-500 ease-out' alt="" />
            <img src={buttonarr} className={`absolute top-11 right-6 sm:top-8 sm:right-8 lg:top-10 lg:right-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transform hover:scale-125 duration-300 transition-all delay-700 ${
              isLeftCardVisible ? 'opacity-100 translate-y-0 animate-float' : 'opacity-0 translate-y-4'
            }`} alt="" />

            <div className={`w-full max-w-[400px] pt-[1rem] transition-all duration-800 delay-300  ${
              isLeftCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <h3 className='font-georgia font-normal text-[21px] sm:text-2xl lg:text-3xl mb-2'>Where <span className='text-regular'>Love</span> Begins and Grows</h3>
              <p className='text-sm sm:text-sm font-helvetica'>How we empower the bond between women and children through care, support, and lasting impact.</p>
            </div>
          </div>

          <div ref={centerCardRef} className={`w-full max-w-[424px] transition-all duration-1000 delay-200 ease-out ${
            isCenterCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className='text-[21px] sm:text-2xl lg:text-3xl font-georgia mt-[1.2rem] lg:mt-0 mb-2 sm:mb-4'>Get Involved</h3>
            <p className='text-sm sm:text-sm mb-3 sm:mb-4'> Together, we can uplift voices, and build lasting legacies that empower women and transform generations.</p>


            <div 
  className={`w-full max-w-[424px] h-[300px] sm:h-[350px] lg:h-[423px] bg-cover bg-center bg-no-repeat relative rounded-2xl overflow-hidden hover:scale-105 transition-all duration-700 ease-out ${
    isCenterCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  }`}
  style={{ backgroundImage: `url(${PlayCard})` }}
>              


<div className="p-4 sm:p-5 lg:p-6 text-white h-full flex flex-col">


<div className={`w-full flex items-center justify-between px-1 sm:px-2 mb-6 sm:mb-8 lg:mb-10 transition-all duration-600 delay-500 ${
  isCenterCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
}`}>
  <img src={bolb} alt="" className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 ${isCenterCardVisible ? 'animate-pulse-soft' : ''}`} />
    <img src={arrup} alt="" className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-all duration-300 ${isCenterCardVisible ? 'animate-bounce-soft' : ''}`} />

</div>

                <h1 className={`text-lg sm:text-xl lg:text-2xl font-georgia text-white font-bold mb-4 sm:mb-5 lg:mb-6 transition-all duration-700 delay-400 ${
                  isCenterCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>Upcoming Events</h1>
                
                {/* Event Content */}
                <div className={`space-y-2 sm:space-y-3 lg:space-y-4 transition-all duration-300 w-fit ease-in-out flex-1 ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : `opacity-100 transform translate-y-0 ${
                    isCenterCardVisible ? 'delay-600' : 'opacity-0'
                  }`
                }`}>
                  <div className={`flex items-center bg-[rgba(255,255,255,0.2)] p-1.5 sm:p-2 rounded-full gap-2 sm:gap-3 transform transition-all duration-500 hover:translate-x-1 delay-700 ${
                    isCenterCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}>
                    <img src={video} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="text-sm sm:text-base lg:text-lg font-bold transition-colors duration-200 text-white">{events[currentEvent].title}</p>
                  </div>

                  <div className={`flex w-fit items-center gap-2 sm:gap-3 bg-[rgba(255,255,255,0.2)] p-1.5 sm:p-2 rounded-full transform transition-all duration-500 hover:translate-x-1 delay-800 ${
                    isCenterCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}>
                    <img src={calendar} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold text-xs sm:text-sm lg:text-base duration-200 text-white">{events[currentEvent].date}</p>
                  </div>

                  <div className={`flex w-fit items-center gap-2 sm:gap-3 bg-[rgba(255,255,255,0.2)] p-1.5 sm:p-2 rounded-full transform transition-all duration-500 hover:translate-x-1 delay-900 ${
                    isCenterCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}>
                    <img src={time} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold text-xs sm:text-sm lg:text-base duration-200 text-white">{events[currentEvent].time}</p>
                  </div>

                  <div className={`flex w-fit items-center gap-2 sm:gap-3 bg-[rgba(255,255,255,0.2)] p-1.5 sm:p-2 rounded-full transform transition-all duration-500 hover:translate-x-1 delay-1000 ${
                    isCenterCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}>
                    <img src={speaker} alt="" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold text-xs sm:text-sm lg:text-base duration-200 text-white">{events[currentEvent].speaker}</p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className={`mt-auto transition-all duration-700 delay-1100 ${
                  isCenterCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <button
                      onClick={prevEvent}
                      disabled={isTransitioning}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all duration-200 transform hover:scale-110 hover:-translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200" />
                    </button>

                      {/* Dots Indicator */}
                  <div className="flex justify-center gap-1.5 sm:gap-2">
                    {events.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToEvent(index)}
                        disabled={isTransitioning}
                        className={`w-6 h-1 sm:w-8 sm:h-1 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed ${
                          index === currentEvent
                            ? 'bg-white scale-110 shadow-lg'
                            : 'bg-white bg-opacity-40 hover:bg-opacity-60 hover:shadow-md'
                        }`}
                      />
                    ))}
                  </div>
                    
                    <button
                      onClick={nextEvent}
                      disabled={isTransitioning}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-1.5 sm:p-2 transition-all duration-200 transform hover:scale-110 hover:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-200" />
                    </button>
                  </div>

                
                </div>
              </div>
            </div>




          </div>



<div ref={rightCardRef} className={`bg-white p-3 sm:p-4 h-auto min-h-[300px] sm:min-h-[350px] lg:h-[375px] w-full max-w-[374px] rounded-2xl transition-all duration-1000 delay-400 ease-out ${
  isRightCardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
}`}>

<div className={`transition-all duration-800 delay-600 ${
  isRightCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
}`}>
  <h3 className='font-georgia text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3'> Join Our Community</h3>
  <p className='font-helvetica text-xs sm:text-sm'>Be part of a strong, supportive network where women and children thrive</p>
</div>

<div className={`w-full flex items-center justify-center my-[1.5rem] sm:my-[2rem] transition-all duration-800 delay-800 ${
  isRightCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
}`}>
  <img src={circle} className={`w-[100px] sm:w-[120px] lg:w-[150px] hover:scale-105 transition-transform duration-500 ease-out ${
    isRightCardVisible ? 'animate-pulse-soft' : ''
  }`} alt="" />
</div>

<button className={`bg-primary mx-auto w-fit transition-all hover:bg-purple-500 hover:scale-105 hover:shadow-lg duration-300 rounded-full py-3 px-6 sm:py-4 sm:px-8 lg:px-10 text-white flex items-center gap-2 justify-center group transform hover:-translate-y-1 delay-1000 ${
  isRightCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
}`}>
  <p className='text-white flex items-center gap-2 sm:gap-3 font-bold text-xs sm:text-sm font-helvetica transition-all duration-300 group-hover:tracking-wide'><span> <img src={whatsapp} alt="" className="w-4 h-4 sm:w-5 sm:h-5" /></span> JOIN EELI COMMUNITY</p>
</button>

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
      `}</style>
    </section>
  );
}