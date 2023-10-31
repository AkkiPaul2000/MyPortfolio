import React from 'react'
import SectionTitle from './SectionTitle';

function Projects() {
  return (
    <section id='Projects' className='  max-w-container mx-auto py-24 lgl:px-20'>
      <SectionTitle title="Where I have built" titleNo="03" />
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a href="#" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank'>
              <div>
                <img src="/cryptoProject.png" alt="CryptoProject" title=""  layout="responsive" objectFit="contain"  
                className= 'w-full h-full object-contain'/>
              </div>
            </a>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-end text-right xl:-ml-16 z-10 '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide
          '>Featured Project</p>
          <h3 className='text-2xl font-bold'>CryptoXplorers</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An <span className='text-textGreen'> Crypto Analytic website</span> under contruction till now.
            It the statistic website to show all the current crypto coins 
            current market state.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>JavaScript</li>
            <li>React</li>
            <li>Material UI</li>
            <li>ChartJS</li>
            
          </ul>
        </div>
        </div>

        {/* Project1 ended */}

        <div className='flex flex-col xl:flex-row gap-6'>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-end text-left z-10 '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide
          '>Featured Project</p>
          <h3 className='text-2xl font-bold'>CryptoXplorers</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16'>
            An <span className='text-textGreen'> Crypto Analytic website</span> under contruction till now.
            It the statistic website to show all the current crypto coins 
            current market state.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>JavaScript</li>
            <li>React</li>
            <li>Material UI</li>
            <li>ChartJS</li>
          </ul>
        </div>
            <a href="#" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank'>
              <div>
                <img src="/cryptoProject.png" alt="CryptoProject" title=""  layout="responsive" objectFit="contain"  
                className= 'w-full h-full object-contain'/>
              </div>
            </a>
        
        </div>
        {/* Project2 Ended */}
        <div className='flex flex-col xl:flex-row gap-6'>
            <a href="#" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank'>
              <div>
                <img src="/cryptoProject.png" alt="CryptoProject" title=""  layout="responsive" objectFit="contain"  
                className= 'w-full h-full object-contain'/>
              </div>
            </a>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-end text-right xl:-ml-16 z-10 '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide
          '>Featured Project</p>
          <h3 className='text-2xl font-bold'>CryptoXplorers</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An <span className='text-textGreen'> Crypto Analytic website</span> under contruction till now.
            It the statistic website to show all the current crypto coins 
            current market state.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>JavaScript</li>
            <li>React</li>
            <li>Material UI</li>
            <li>ChartJS</li>
            
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects