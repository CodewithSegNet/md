import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-16 lg:py-24 mx-auto bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex items-end justify-center gap-5'>
          <div className='bg-[rgba(203,8,240,0.1)] relative rounded-2xl p-7 animate-fade-in-left' style={{animationDelay: '0.2s'}}>
            <img src={woman} className='w-[577px] h-auto relative hover:scale-105 transition-transform duration-500 ease-out' alt="" />
            <img src={buttonarr} className='absolute top-10 right-12 w-14 h-14 transform hover:-translate-y-1 hover:scale-105 duration-300 animate-float' style={{animationDelay: '0.8s'}} alt="" />

            <div className='w-[400px] pt-[1rem] animate-fade-in-up' style={{animationDelay: '0.4s'}}>
              <h3 className='font-georgia font-normal text-3xl mb-2'>Where <span className='text-regular'>Love</span> Begins and Grows</h3>
              <p className='text-sm font-helvetica'>How we empower the bond between women and children through care, support, and lasting impact.</p>
            </div>
          </div>

          <div className='w-[424px] animate-fade-in-up' style={{animationDelay: '0.3s'}}>
            <h3 className='text-3xl font-georgia mb-4'>Get Involved</h3>
            <p className='text-sm mb-4'> Together, we can uplift voices, and build lasting legacies that empower women and transform generations.</p>


            <div 
  className="w-[424px] h-[423px] bg-cover bg-center bg-no-repeat relative rounded-2xl overflow-hidden animate-fade-in-up hover:scale-105 transition-transform duration-500 ease-out"
  style={{ backgroundImage: `url(${PlayCard})`, animationDelay: '0.5s' }}
>              


<div className="p-6 text-white">


<div className='w-full flex items-center justify-between px-2 mb-10'>
  <img src={bolb} alt="" className="animate-pulse-soft" />
    <img src={arrup} alt="" className="animate-bounce-soft" />

</div>

                <h1 className="text-2xl font-georgia text-white font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.7s'}}>Upcoming Events</h1>
                
                {/* Event Content */}
                <div className={`space-y-4 transition-all duration-300 w-fit ease-in-out ${
                  isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  <div className="flex items-center bg-[rgba(255,255,255,0.2)] p-2 rounded-full gap-3 transform transition-all duration-200 hover:translate-x-1 animate-fade-in-left" style={{animationDelay: '0.9s'}}>
                    <img src={video} alt="" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="text-lg font-bold transition-colors duration-200 text-white">{events[currentEvent].title}</p>
                  </div>

                  <div className="flex w-fit items-center gap-3 bg-[rgba(255,255,255,0.2)] p-2 rounded-full transform transition-all duration-200 hover:translate-x-1 animate-fade-in-left" style={{ transitionDelay: '50ms', animationDelay: '1.1s' }}>
                    <img src={calendar} alt="" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold  duration-200 text-white">{events[currentEvent].date}</p>
                  </div>

                  <div className="flex w-fit items-center gap-3 bg-[rgba(255,255,255,0.2)] p-2 rounded-full transform transition-all duration-200 hover:translate-x-1 animate-fade-in-left" style={{ transitionDelay: '100ms', animationDelay: '1.3s' }}>
                    <img src={time} alt="" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold duration-200 text-white">{events[currentEvent].time}</p>
                  </div>

                  <div className="flex w-fit items-center gap-3 bg-[rgba(255,255,255,0.2)] p-2 rounded-full transform transition-all duration-200 hover:translate-x-1 animate-fade-in-left" style={{ transitionDelay: '150ms', animationDelay: '1.5s' }}>
                    <img src={speaker} alt="" className="w-6 h-6  transition-transform duration-200 hover:scale-110" />
                    <p className="transition-colors font-bold  duration-200 text-white">{events[currentEvent].speaker}</p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-6 left-6 right-6 animate-fade-in-up" style={{animationDelay: '1.7s'}}>
                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={prevEvent}
                      disabled={isTransitioning}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 transform hover:scale-110 hover:-translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5 text-white transition-transform duration-200" />
                    </button>

                      {/* Dots Indicator */}
                  <div className="flex justify-center gap-2">
                    {events.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToEvent(index)}
                        disabled={isTransitioning}
                        className={`w-8 h-1 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed ${
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
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 transform hover:scale-110 hover:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5 text-white transition-transform duration-200" />
                    </button>
                  </div>

                
                </div>
              </div>
            </div>




          </div>



<div className='bg-white p-4 h-[375px] w-[374px] rounded-2xl animate-fade-in-right' style={{animationDelay: '0.6s'}}>

<div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
  <h3 className='font-georgia text-3xl mb-3'> Join Our Community</h3>
  <p className='font-helvetica text-sm'>Be part of a strong, supportive network where women and children thrive</p>
</div>

<div className='w-full flex items-center justify-center my-[2rem] animate-fade-in-up' style={{animationDelay: '1s'}}>
  <img src={circle} className='w-[150px] hover:scale-105 transition-transform duration-500 ease-out animate-pulse-soft' alt="" />
</div>




                         <button className='bg-primary mx-auto w-fit transition-all hover:bg-purple-500 hover:scale-105 hover:shadow-lg duration-300 rounded-full py-4 px-10 text-white flex items-center gap-2 justify-center group animate-fade-in-up transform hover:-translate-y-1' style={{animationDelay: '1.2s'}}>
                            <p className='text-white flex items-center gap-3 font-bold text-sm font-helvetica transition-all duration-300 group-hover:tracking-wide'><span> <img src={whatsapp} alt="" /></span> JOIN EELI COMMUNITY</p>
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