import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import LeftArrow from "../assets/left.svg";
import RightArrow from "../assets/right.svg";
import { useScrollAnimation } from '../utils/animation';
import rec from "../assets/Rectangle3.png";
import cone from "../assets/cone.svg";
import dot from "../assets/dot.svg";
import event from "../assets/event.svg";
import mic from "../assets/micro.svg";
import calendar from "../assets/calendar.svg";
import time from "../assets/time.svg";
import speaker from "../assets/picktime.svg";

const FourthLayer = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [imagesRef, areImagesVisible] = useScrollAnimation({ threshold: 0.3 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCenterCardVisible, setIsCenterCardVisible] = useState(true);
  const [showArchives, setShowArchives] = useState(false);
  const [showCurrentPrograms, setShowCurrentPrograms] = useState(false);

  const events = [
    {
      id: 1,
      title: "Trusting the Process in Motherhood",
      date: "Saturday, June 21, 2025",
      time: "2:00 PM - 4:00 PM",
      speaker: "Pastor Dayo Ogunsanya",
      description: "Join us for an honest and uplifting conversation about the journey of motherhood. This virtual event will explore how to embrace growth, handle challenges, and find strength in every season of parenting."
    },
    {
      id: 2,
      title: "Building Stronger Family Bonds",
      date: "Sunday, July 15, 2025", 
      time: "10:00 AM - 12:00 PM",
      speaker: "Dr. Sarah Johnson",
      description: "Discover practical strategies for creating lasting family bonds and establishing healthy communication patterns that will strengthen your family relationships."
    },
    {
      id: 3,
      title: "Women in Leadership Conference",
      date: "Friday, August 9, 2025",
      time: "6:00 PM - 8:00 PM", 
      speaker: "Minister Grace Adebayo",
      description: "An inspiring session focused on developing leadership skills, building confidence, and creating positive impact in your community and workplace."
    },
    {
      id: 4,
      title: "Financial Stewardship Workshop",
      date: "Saturday, December 15, 2024",
      time: "3:00 PM - 5:00 PM",
      speaker: "Pastor Michael Thompson",
      description: "Learn biblical principles of financial stewardship and practical budgeting strategies to secure your family's financial future."
    },
    {
      id: 5,
      title: "Marriage Enrichment Seminar",
      date: "Sunday, November 10, 2024",
      time: "1:00 PM - 4:00 PM",
      speaker: "Rev. Dr. Patricia Williams",
      description: "Strengthen your marriage through communication exercises, conflict resolution techniques, and spiritual growth practices for couples."
    }
  ];

  const isEventPassed = (dateString) => {
    const eventDate = new Date(dateString);
    const currentDate = new Date();
    return eventDate < currentDate;
  };

  const currentPrograms = [
    {
      id: 1,
      title: "Weekly Prayer Meeting",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      speaker: "Pastor David Johnson",
      description: "Join us for powerful prayer sessions where we come together to seek God's guidance and blessings for our community and families."
    },
    {
      id: 2,
      title: "Sunday Bible Study",
      date: "Every Sunday",
      time: "9:00 AM - 10:30 AM",
      speaker: "Minister Sarah Thompson",
      description: "Dive deep into God's word with our interactive Bible study sessions designed to strengthen your faith and understanding."
    },
    {
      id: 3,
      title: "Youth Empowerment Program",
      date: "Every Saturday",
      time: "3:00 PM - 5:00 PM",
      speaker: "Pastor Grace Adebayo",
      description: "Mentoring and empowering the next generation through faith-based activities, leadership training, and community service."
    },
    {
      id: 4,
      title: "Women's Fellowship Circle",
      date: "First Friday of Month",
      time: "6:00 PM - 8:00 PM",
      speaker: "Elder Patricia Williams",
      description: "A supportive community for women to share experiences, pray together, and grow in faith while building lasting friendships."
    }
  ];

  const filteredData = showCurrentPrograms 
    ? currentPrograms
    : events.filter(event => isEventPassed(event.date));

  const transitionToEvent = (newIndex) => {
    if (newIndex === currentEvent || isTransitioning || filteredData.length === 0) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentEvent(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const nextEvent = () => {
    if (filteredData.length === 0) return;
    const nextIndex = (currentEvent + 1) % filteredData.length;
    transitionToEvent(nextIndex);
  };

  const prevEvent = () => {
    if (filteredData.length === 0) return;
    const prevIndex = (currentEvent - 1 + filteredData.length) % filteredData.length;
    transitionToEvent(prevIndex);
  };

  const getPrevIndex = () => {
    if (filteredData.length === 0) return 0;
    return (currentEvent - 1 + filteredData.length) % filteredData.length;
  };

  const getNextIndex = () => {
    if (filteredData.length === 0) return 0;
    return (currentEvent + 1) % filteredData.length;
  };

  const switchMode = (mode) => {
    if (mode === 'current') {
      setShowCurrentPrograms(true);
      setShowArchives(false);
    } else {
      setShowArchives(true);
      setShowCurrentPrograms(false);
    }
    setCurrentEvent(0);
  };

  return (

    <section className="bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">

  <motion.section className="max-w-screen-2xl mx-auto py-[56px] md:py-[66px]  px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className='max-w-screen-2xl mt-[3rem] pb-[6rem] mx-auto'>
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
            <p className='bg-[rgba(203,8,240,0.1)] shadow-md mx-auto rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Announcements</p>
            <h3 className='font-normal text-[25px] md:text-[35px] font-georgia'>Stay Connected with EELI</h3>
            <p className='text-xs'>Get the latest updates on our programs, events, and community initiatives—so you never miss a chance to make an impact.</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 pb-[6rem] gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <img src={cone} alt="" />
          <h2 className="text-[24px] md:text-[32px] font-normal font-helvetica">
            {showCurrentPrograms ? 'Current Programs' : 'Archives'}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button onClick={() => switchMode('current')} className={`font-normal underline font-helvetica transition-colors text-sm md:text-base ${showCurrentPrograms ? 'text-purple-600' : 'hover:text-purple-600'}`}>
            Current Programs
          </button>
          <button onClick={() => switchMode('archives')} className={`font-normal underline font-helvetica transition-colors text-sm md:text-base ${showArchives ? 'text-purple-600' : 'hover:text-purple-600'}`}>
            Archives
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6 lg:gap-8 overflow-hidden px-4 md:px-0 relative">
        {filteredData.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {showCurrentPrograms ? 'No current programs found.' : 'No archived events found.'}
            </p>
          </div>
        ) : (
          <>
            {/* Left Card */}
            <div className="flex flex-col h-auto justify-center items-center order-2 lg:order-1">
              <div className="hidden md:flex lg:flex mb-4">
                <div className="bg-pink-100 w-[240px] md:w-[260px] lg:w-[285px] rounded-[12.41px] flex flex-col justify-center items-start p-3 md:p-4">
                  <div className="flex items-start justify-start mb-4">
                      <button className={`flex gap-1 rounded-full py-2 px-4 ${showCurrentPrograms ? 'bg-[rgba(255,40,5,1)] text-white' : 'bg-green-500 text-white'}`}> 
                      <img src={dot} alt="" />
                      <p className="font-bold text-xs text-white">{showCurrentPrograms ? 'Upcoming' : 'Concluded'}</p>
                    </button>
                  </div>
                  <div className="text-left space-y-2">
                    <h3 className="font-bold text-xs md:text-sm">{filteredData[getPrevIndex()]?.title}</h3>
                    <div className="space-y-1">
                      <div>
                        <p className="text-gray-600 text-[10px] md:text-xs mb-2 md:mb-3">{filteredData[getPrevIndex()]?.description}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full">
                        <img src={calendar} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getPrevIndex()]?.date}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full">
                        <img src={speaker} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getPrevIndex()]?.time}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full">
                        <img src={mic} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getPrevIndex()]?.speaker}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end w-full my-5 gap-2">
                <button onClick={prevEvent}>
                  <img src={LeftArrow} loading="eager" alt="Previous" className="md:w-8  lg:w-9 lg:h-9 hover:scale-105 duration-200" />
                </button>
                <button onClick={nextEvent}>
                  <img src={RightArrow} loading="eager" alt="Next" className="md:w-8 lg:w-9 lg:h-9 hover:scale-105 duration-200" />
                </button>
              </div>
            </div>

            {/* Center Card */}
            <div className="bg-white w-full max-w-[902px] h-auto flex flex-col justify-start items-center rounded-[12.41px] overflow-hidden relative p-4 md:p-6 lg:p-8 order-1 lg:order-2">
              <div className="flex-1 flex justify-start items-center relative overflow-hidden w-full">
                <AnimatePresence custom={direction} mode="wait">
                  <div className="w-full">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full mb-4 md:mb-6 gap-3 md:gap-0">
                      <button className={`flex gap-1 rounded-full py-2 px-4 md:py-3 md:px-7 ${showCurrentPrograms ? 'bg-[rgba(255,40,5,1)] text-white' : 'bg-green-500 text-white'}`}>
                        <img src={dot} alt="" />
                        <p className="font-bold text-xs md:text-sm text-white">{showCurrentPrograms ? 'Upcoming' : 'Concluded'}</p>
                      </button>
                      <button className="flex gap-1 rounded-full py-2 px-4 md:py-3 md:px-7 bg-[rgba(70,18,118,1)] text-white">
                        <img src={event} alt="" />
                        <p className="font-bold text-xs md:text-sm text-white">{showCurrentPrograms ? 'JOIN PROGRAM' : 'VIEW EVENT'}</p>
                      </button>
                    </div>
                    <div className="text-left space-y-4 md:space-y-6">
                      <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{filteredData[currentEvent]?.title}</h1>
                        <p className="text-gray-600 text-sm md:text-base">{filteredData[currentEvent]?.description}</p>
                      </div>
                      <div className={`space-y-3 md:space-y-4 transition-all duration-300 w-fit ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
               
                        <div className="flex items-center gap-2 md:gap-3 bg-[rgba(203,8,240,0.1)] p-2 w-fit rounded-full">
                          <img src={calendar} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                          <p className="font-bold text-black text-sm md:text-base">{filteredData[currentEvent]?.date}</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-[rgba(203,8,240,0.1)] w-fit p-2 rounded-full">
                          <img src={speaker} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                          <p className="font-bold text-black text-sm md:text-base">{filteredData[currentEvent]?.time}</p>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 bg-[rgba(203,8,240,0.1)] w-fit p-2 rounded-full">
                          <img src={mic} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                          <p className="font-bold text-black text-sm md:text-base">{filteredData[currentEvent]?.speaker}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden md:flex lg:flex flex-col h-auto justify-center items-center order-3">
              <div className="mb-4">
                <div className="bg-pink-100 w-[240px] md:w-[260px] lg:w-[285px] rounded-[12.41px] flex flex-col justify-center items-start p-3 md:p-4">
                  <div className="flex items-start justify-start mb-4">
                    <button className={`flex gap-1 rounded-full py-2 px-4 ${showCurrentPrograms ? 'bg-[rgba(255,40,5,1)] text-white' : 'bg-green-500 text-white'}`}>
                      <img src={dot} alt="" />
                      <p className="font-bold text-xs text-white">{showCurrentPrograms ? 'Upcoming' : 'Concluded'}</p>
                    </button>
                  </div>
                  <div className="text-left space-y-2">
                    <h3 className="font-bold text-xs md:text-sm">{filteredData[getNextIndex()]?.title}</h3>
                    <div className="space-y-1">
                      <div>
                        <p className="text-gray-600 text-[10px] md:text-xs mb-2 md:mb-3">{filteredData[getNextIndex()]?.description}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] text-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full">
                        <img src={calendar} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getNextIndex()]?.date}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full">
                        <img src={speaker} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getNextIndex()]?.time}</p>
                      </div>
                      <div className="flex items-center gap-1 md:gap-2 justify-start bg-[rgba(203,8,240,0.1)] p-1.5 md:p-2 w-fit rounded-full shadow-sm">
                        <img src={mic} alt="" className="w-3 h-3 md:w-4 md:h-4" />
                        <p className="text-[10px] md:text-xs">{filteredData[getNextIndex()]?.speaker}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.section>
    </section>
  
  );
};

export default FourthLayer;