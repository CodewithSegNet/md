import { useState } from 'react';
import desktop from '../assets/board.svg'
import dollar from '../assets/dollars.png'



const Payment = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (price) => {
    setInputValue(price);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className=' rounded-2xl w-full' style={{
          backgroundImage: `url(${desktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

            <div className='w-fit p-[5rem] rounded-2xl mx-auto text-center font-georgia text-[35px] mt-[5rem]'>

                <div className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[8rem] mt-[2rem]'>

                <h3 className='text-white'>Help Us Uplift Women and Children. </h3>
                <h3 className=' text-white'>Make a Donation Today</h3>
                </div>

            </div>


            <div className='flex items-center justify-center mx-auto mt-[1rem] gap-5'>

<button onClick={() => handleButtonClick('$50')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $50
</button>

<button onClick={() => handleButtonClick('$100')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $100
</button>

<button onClick={() => handleButtonClick('$500')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $500
</button>

<button onClick={() => handleButtonClick('$1000')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $1000
</button>

<button onClick={() => handleButtonClick('$10,000')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $10,000
</button>

<button onClick={() => handleButtonClick('$50,000')} className='bg-[rgba(255,255,255,0.2)] rounded-2xl py-[1rem] px-[3rem] text-[35px] text-white'>
    $50,000
</button>

                
            </div>



<div className='flex mx-auto items-center mt-[2rem] justify-center py-[2rem]  flex-col gap-[3rem]'>

            <div className='relative'>
              <input 
                className='w-fit py-[1.5rem] pl-[4rem] pr-[18rem]' 
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
<button className='py-[1rem] px-[2rem] bg-[rgba(70,18,118,1)] rounded-full text-white w-fit font-helvetica font-bold'>MAKE A DONATION NOW</button>
</div>
        </div>

      </div>
    </section>
  );
}

export default Payment;