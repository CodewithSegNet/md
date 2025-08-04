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

  const handleButtonClick = (price) => {
    setInputValue(price);
  };

  const amounts = ['$50', '$100', '$500', '$1000', '$10,000', '$50,000'];

  return (
    <section ref={sectionRef} id="services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
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
  );
}

export default Payment;