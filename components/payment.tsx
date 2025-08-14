import { useState } from 'react';
import { useScrollAnimation } from '../utils/animation';
import desktop from '../assets/board.svg'
import dollar from '../assets/dollars.png'



const Payment = () => {
  const [inputValue, setInputValue] = useState('');
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [buttonsRef, areButtonsVisible] = useScrollAnimation({ threshold: 0.4 });
  const [inputRef, isInputVisible] = useScrollAnimation({ threshold: 0.5 });
  const [donateButtonRef, isDonateButtonVisible] = useScrollAnimation({ threshold: 0.6 });
  
  // Separate refs for mobile section
  const [mobileSectionRef, isMobileSectionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [mobileTitleRef, isMobileTitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [mobileButtonsRef, areMobileButtonsVisible] = useScrollAnimation({ threshold: 0.4 });
  const [mobileInputRef, isMobileInputVisible] = useScrollAnimation({ threshold: 0.5 });
  const [mobileDonateButtonRef, isMobileDonateButtonVisible] = useScrollAnimation({ threshold: 0.6 });

  const handleButtonClick = (price) => {
    setInputValue(price);
  };

  const amounts = ['$50', '$100', '$500', '$1000', '$10,000', '$50,000'];

  return (
   

    <>
    
     <section ref={sectionRef} id="services" className="hidden lg:block py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className=' rounded-2xl w-full' style={{
          backgroundImage: `url(${desktop})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

            <div ref={titleRef} className={`w-fit p-[5rem] rounded-2xl mx-auto text-center font-georgia text-[35px] mt-[5rem] transition-all duration-1000 ease-out ${
              isTitleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>

                <div className={`bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[8rem] mt-[2rem] transition-all duration-800 delay-300 ${
                  isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>

                <h3 className='text-white'>Help Us Uplift Women and Children. </h3>
                <h3 className=' text-white'>Make a Donation Today</h3>
                </div>

            </div>


            <div ref={buttonsRef} className='flex items-center justify-center mx-auto mt-[1rem] gap-5'>

              {amounts.map((amount, index) => (
                <button 
                  key={amount}
                  onClick={() => handleButtonClick(amount)} 
                  className={`bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg transform ${
                    areButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${inputValue === amount ? 'text-[#cb08f0] bg-white scale-105' : 'text-white hover:bg-[rgba(255,255,255,0.3)]'}`}
                  style={{ 
                    transitionDelay: areButtonsVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                    {amount}
                </button>
              ))}
                
            </div>



<div className='flex mx-auto items-center mt-[2rem] justify-center py-[2rem]  flex-col gap-[3rem]'>

            <div ref={inputRef} className={`relative transition-all duration-1000 ease-out ${
              isInputVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}>
              <input 
                className='w-fit py-[1.5rem] pl-[4rem] pr-[18rem] rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg' 
                type="text"
                placeholder="Enter amount"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center'>
                <span className='text-2xl'><img src={dollar} className='h-7 w-4' alt="" /></span>
                <div className='w-px bg-gray-300 h-8 ml-3'></div>
              </div>
            </div>

            <button ref={donateButtonRef} className={`py-[1rem] px-[2rem] bg-[rgba(70,18,118,1)] rounded-full text-white w-fit font-helvetica font-bold transition-all duration-1000 ease-out hover:bg-[rgba(70,18,118,0.9)] hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 ${
              isDonateButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              MAKE A DONATION NOW
            </button>
</div>
        </div>

      </div>
    </section>






 <section ref={mobileSectionRef} id="services" className="block lg:hidden py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className='rounded-2xl w-full min-h-full' style={{
          backgroundImage: `url(${desktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

            <div ref={mobileTitleRef} className={`w-fit p-[2rem] sm:p-[3rem] lg:p-[5rem] rounded-2xl mx-auto text-center font-georgia text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] mt-[2rem] sm:mt-[3rem] lg:mt-[5rem] transition-all duration-1000 ease-out ${
              isMobileTitleVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}>

                <div className={`bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[2rem] sm:px-[4rem] md:px-[6rem] lg:px-[8rem] mt-[1rem] sm:mt-[1.5rem] lg:mt-[2rem] transition-all duration-800 delay-300 ${
                  isMobileTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>

                <h3 className='text-white'>Help Us Uplift Women and Children. </h3>
                <h3 className=' text-white'>Make a Donation Today</h3>
                </div>

            </div>


            <div ref={mobileButtonsRef} className='flex flex-wrap items-center justify-center mx-auto mt-[1rem] gap-2 sm:gap-3 lg:gap-5 px-4'>

              {amounts.map((amount, index) => (
                <button 
                  key={amount}
                  onClick={() => handleButtonClick(amount)} 
                  className={`bg-[rgba(255,255,255,0.2)] rounded-2xl py-[0.5rem] px-[1.5rem] sm:py-[0.75rem] sm:px-[2rem] lg:py-[1rem] lg:px-[3rem] text-[18px] sm:text-[25px] lg:text-[35px] transition-all duration-700 ease-out hover:scale-105 hover:shadow-lg transform ${
                    areMobileButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${inputValue === amount ? 'text-[#cb08f0] bg-white scale-105' : 'text-white hover:bg-[rgba(255,255,255,0.3)]'}`}
                  style={{ 
                    transitionDelay: areMobileButtonsVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                    {amount}
                </button>
              ))}
                
            </div>



<div className='flex mx-auto items-center mt-[1rem] sm:mt-[1.5rem] lg:mt-[2rem] justify-center py-[1rem] sm:py-[1.5rem] lg:py-[2rem] flex-col gap-[1.5rem] sm:gap-[2rem] lg:gap-[3rem]'>

            <div ref={mobileInputRef} className={`relative transition-all duration-1000 ease-out w-full max-w-sm sm:max-w-md lg:max-w-lg ${
              isMobileInputVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}>
              <input 
                className='w-full py-[1rem] sm:py-[1.25rem] lg:py-[1.5rem] pl-[3rem] sm:pl-[3.5rem] lg:pl-[4rem] pr-[2rem] sm:pr-[4rem] lg:pr-[18rem] rounded-lg transition-all duration-300 focus:scale-105 focus:shadow-lg' 
                type="text"
                placeholder="Enter amount"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center'>
                <span className='text-2xl'><img src={dollar} className='h-5 w-3 sm:h-6 sm:w-3.5 lg:h-7 lg:w-4' alt="" /></span>
                <div className='w-px bg-gray-300 h-6 sm:h-7 lg:h-8 ml-2 sm:ml-2.5 lg:ml-3'></div>
              </div>
            </div>

            <button ref={mobileDonateButtonRef} className={`py-[0.75rem] px-[1.5rem] sm:py-[0.875rem] sm:px-[1.75rem] lg:py-[1rem] lg:px-[2rem] bg-[rgba(70,18,118,1)] rounded-full text-white w-fit font-helvetica font-bold text-sm sm:text-base lg:text-lg transition-all duration-1000 ease-out hover:bg-[rgba(70,18,118,0.9)] hover:scale-105 hover:shadow-xl transform hover:-translate-y-1 ${
              isMobileDonateButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              MAKE A DONATION NOW
            </button>
</div>
        </div>

      </div>
    </section>
    
    
    </>
  );
}

export default Payment;