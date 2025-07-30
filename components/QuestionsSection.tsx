import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const questionsRef = useRef(null);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && questionsRef.current && headerRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const questionsBottom = questionsRef.current.getBoundingClientRect().bottom;
        const headerHeight = headerRef.current.offsetHeight;
        
        // Fix header when section reaches top of viewport
        // Unfix when questions section bottom is above the header bottom position
        if (sectionTop <= 0 && questionsBottom > (headerHeight + 32)) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData = [
    {
      question: "1. What does EELI stand for?",
      answer: "EELI stands for Empowerment Elevation Legacy International, a non-profit dedicated to empowering and supporting women and children."
    },
    {
      question: "2. How can I get involved with EELI?",
      answer: "Getting started with EELI is simple! Just sign up for an account, complete the onboarding process, and you'll have access to all our features. Our support team is available 24/7 to help you through the setup process."
    },
    {
      question: "3. Who can benefit from EELI’s programs?",
      answer: "We offer flexible pricing plans to suit different needs and budgets. Our plans range from basic free tiers to premium enterprise solutions. Contact our sales team for detailed pricing information and custom packages."
    },
    {
      question: "4. Where does EELI operate?",
      answer: "Absolutely! Security is our top priority. We use industry-standard encryption, regular security audits, and comply with all major data protection regulations including GDPR and CCPA."
    }
  ];

  return (
    <div ref={sectionRef} className="py-16 lg:py-24 relative bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Header Section - becomes fixed when scrolling */}
          <div className="w-1/3 relative">            
            <div 
              ref={headerRef}
              className={`transition-all duration-300 ${
                isFixed 
                  ? 'fixed z-10' 
                  : 'relative'
              }`}
              style={isFixed ? { 
                top: '2rem',
                left: `${sectionRef.current?.getBoundingClientRect().left + 16}px`,
                width: 'calc((100vw - 2rem) * 0.33 - 1rem)'
              } : {}}
            >
              <div className='flex text-left gap-7 flex-col mx-auto'>
                <p className='bg-[rgba(203,8,240,0.1)] shadow-md rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Common Questions</p>
                
                <div>
                  <h3 className='font-normal text-[37px] font-georgia leading-11'>Your Questions <br /> Answered</h3>
                  <p className='font-normal text-md font-helvetica'>Everything You Need to Know About <br /> EELI</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Questions Section - always scrollable */}
          <div ref={questionsRef} className="w-2/3 ml-auto">
            <div className="">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`border-b-2 py-7 overflow-hidden transition-colors duration-200 ${
                    openItems[index] 
                      ? 'bg-[rgba(203,8,240,0.1)] rounded-2xl' 
                      : 'hover:bg-[rgba(203,8,240,0.05)] rounded-2xl'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200"
                  >
                    <h3 className="text-lg font-georgia font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems[index] ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {openItems[index] && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-helvetica text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;