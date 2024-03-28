import React from 'react'
import SectionTitle from './SectionTitle';

function Projects() {
  return (
    <section id='Projects' className='max-w-containerSmall min-h-screen mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
      <SectionTitle title="What I have built" titleNo="03" />
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a href="https://crypto-xplorers-port.vercel.app/" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank'>
              <div>
                <img src="/cryptoProject.png" alt="CryptoXplorers" title=""  layout="responsive" objectFit="contain"  
                className= 'w-full h-full object-contain'/>
              </div>
            </a>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-end text-right xl:-mlr16 z-10 '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide
          '>Featured Project</p>
          <h3 className='text-2xl font-bold'>CryptoXplorers</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An <span className='text-textGreen'> Crypto Analytic website</span> for the cryptic investors
            to get a breif statiscal visual understanding about their preffered coin and other coins in the market right now.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>JavaScript</li>
            <li>React</li>
            <li>Material UI</li>
            <li>ChartJS</li>
            <li>Vercel</li> 
          </ul>
        </div>
        </div>

        {/* Project1 ended */}

        <div className='flex flex-col xl:flex-row gap-6 ' >
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 items-start 
        text-left z-8 items-start text-left z-10  '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide'>Featured Project</p>
           <h3 className='text-2xl font-bold'>BookStore</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An <span className='text-textGreen'> Store Website</span> where any seller can update their items into our database
            to display their items with breif description and quantity for their customer.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>Next JS</li>
            
            <li>TailWind CSS</li>
            <li>FireStore</li>
          </ul>
        </div>
            <a href="https://book-store-tawny.vercel.app/" className='w-full xl:w-1/2 h-auto relative group  mt-[30px]'
            target='_blank'>
              <div  >
                <img src="/BookStore.PNG" alt="BookStore" title="" layout="responsive" objectFit="contain"  
                 className= 'w-full h-full object-contain mr-16' />
              </div>
            </a>
        
        </div>
        {/* Test */}
        {/* <div className='flex flex-col xl:flex-row gap-6 '>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-start text-left xl:-mr-16 z-10 '>
           <p className='font-titleFont text-textGreen
          text-sm tracking-wide'>Featured Project</p>
           <h3 className='text-2xl font-bold'>BookStore</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            An <span className='text-textGreen'> Store Website</span> where any seller can update their items into our database
            to display their items with breif description and quantity for their customer.
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          <li>JavaScript</li>
            <li>React</li>
            <li>Material UI</li>
            <li>ChartJS</li>
          </ul>
        </div>
        <a href="https://book-store-tawny.vercel.app/" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank'>
              <div >
                <img src="/BookStore.PNG" alt="BookStore" title="" layout="responsive" objectFit="contain"  
                 className= 'w-full h-full object-contain mr-16' />
              </div>
            </a>
        
        </div> */}
        {/* Project2 Ended */}
        <div className='flex flex-col xl:flex-row gap-6 items-center'>
            <a href="https://pokedex-ten-blond.vercel.app/pokemon/1" className='w-full xl:w-1/2 h-auto relative group  mt-[20px] '
            target='_blank'>
              <div>
                <img src="/Pokedex.PNG" alt="Pokedex" title=""  layout="responsive" objectFit="contain"  
                className= 'w-full h-full object-contain'/>
              </div>
            </a>
        <div className='w-full xl:w-1/2 flex flex-col lgl:justify-between gap-6 
        items-end text-right xl:-mlr16 z-10 '>
          <p className='font-titleFont text-textGreen
          text-sm tracking-wide
          '>Featured Project</p>
          <h3 className='text-2xl font-bold'>Pokedex</h3>
          <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            A <span className='text-textGreen'> Poket monster analytical website</span> to get a breif description
            and their stats to compare it with other monsters as well.
            
            <span style={{color:'red',display:'inline-block',width:"100%"}}>The website is heavy asset loaded so on deployment it might crash on loading details 
            Follow <a href="https://github.com/AkkiPaul2000/pokedex" className='w-full xl:w-1/2 h-auto relative group '
            target='_blank' style={{color:'blue'}}>HERE</a> to got to its github repo.</span>
          </p>
          <ul className='text-xs md:text-sm font-titleFont tracking-wide
          flex gap-2 md:gap-5 justify-between text-textDark'>
          
            <li>TypeScript</li>
            <li>SCSS</li>
            <li>Redux</li>
            <li>FireStore</li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects