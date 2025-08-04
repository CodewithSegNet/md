import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../utils/animation';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.3 });
  const [faqItemsRef, areFaqItemsVisible] = useScrollAnimation({ threshold: 0.3 });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "1. What does EELI stand for?",
      answer: "EELI stands for Empowerment Elevation Legacy International, a non-profit dedicated to empowering and supporting women and children."
    },
    {
      question: "2. How can I get involved with EELI?",
      answer: "Getting started with EELI is simple! Just sign up for an account, complete the onboarding process, and you'll have access to all our features. Our support team is available 24/7 to help you through the setup process."
    },
    {
      question: "3. Who can benefit from EELI's programs?",
      answer: "We offer flexible pricing plans to suit different needs and budgets. Our plans range from basic free tiers to premium enterprise solutions. Contact our sales team for detailed pricing information and custom packages."
    },
    {
      question: "4. Where does EELI operate?",
      answer: "Absolutely! Security is our top priority. We use industry-standard encryption, regular security audits, and comply with all major data protection regulations including GDPR and CCPA."
    }
  ];

  return (
    <div ref={sectionRef} className="py-16 lg:py-[10rem] relative bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Header Section - becomes sticky when scrolling */}
          <div className="w-1/3 relative">            
            <div className="sticky top-8">
              <div ref={headerRef} className={`flex text-left gap-7 flex-col mx-auto transition-all duration-1000 ease-out ${
                isHeaderVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <p className='bg-[rgba(203,8,240,0.1)] shadow-md rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Common Questions</p>
                
                <div className={`transition-all duration-800 delay-300 ${
                  isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <h3 className='font-normal text-[37px] font-georgia leading-11'>Your Questions <br /> Answered</h3>
                  <p className='font-normal text-md font-helvetica'>Everything You Need to Know About <br /> EELI</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Questions Section - always scrollable */}
          <div className="w-2/3 ml-auto">
            <div ref={faqItemsRef} className="">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`border-b-2 py-7 overflow-hidden transition-all duration-800 ease-out ${
                    areFaqItemsVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  } ${
                    openItems[index] 
                      ? 'bg-[rgba(203,8,240,0.1)] rounded-2xl' 
                      : 'hover:bg-[rgba(203,8,240,0.05)] rounded-2xl'
                  }`}
                  style={{ 
                    transitionDelay: areFaqItemsVisible ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200 hover:scale-[1.02] transform"
                  >
                    <h3 className="text-lg font-georgia font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems[index] ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 transition-transform duration-300 hover:scale-110" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 hover:scale-110" />
                      )}
                    </div>
                  </button>
                  
                  {openItems[index] && (
                    <div className="px-6 pb-4 animate-fade-in-down">
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

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FAQSection;