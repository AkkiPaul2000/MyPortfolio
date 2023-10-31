import React from 'react'
import SectionTitle from './SectionTitle';

function Contact() {
  return (
          <section id='Contact' className='  max-w-container mx-auto py-10 xl:py-32
          flex flex-col gap-4 items-center justify-center'>
             <p className='font-titleFont text-lg text-textGreen
             font-semibold flex items-center tracking-wide '>
                04. What's Next?
              </p> 
              <h2 className='font-titleFont text-5xl font-semibold'>
                Get In Touch
              </h2>
              <p className='max-w-[600px] text-center text-textDark'>
                Well,right now very much looking forward to any new oppotunities,
                I m excited and hoping to get in touch with you soon.
              </p>
              <a href='mailto:skypaul2000@gmail.com'>
                <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm
                text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>Say Hello</button>
              </a>
          </section>
      )
}

export default Contact