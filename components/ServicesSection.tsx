import desktop from '../assets/Desktop.png'
import desktop1 from '../assets/Desktop1.png'
import desktop2 from '../assets/Desktop2.png'




export function ServicesSection() {

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">


   <div className='space-y-12'>

<div className='flex text-center gap-7 flex-col justify-center mx-auto'>
  <p className='bg-[rgba(203,8,240,0.1)] shadow-md mx-auto rounded-full w-fit px-3 py-1 text-md font-normal text-[rgba(26,26,26,1)]'>Why We Stand Out</p>

  <h3 className='font-normal text-[35px] font-georgia'>What Makes Us Best</h3>
</div>


<div className='flex justify-center gap-9 mx-auto'>

  <div>
<img src={desktop} alt="" />

  </div>


    <div className='mt-[4rem]'>
    <img src={desktop1} alt="" />

  </div>


    <div>
    <img src={desktop2} alt="" />

  </div>





</div>
</div>

       
      </div>
    </section>
  );
}