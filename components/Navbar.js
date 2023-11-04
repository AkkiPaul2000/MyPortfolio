import { motion } from 'framer-motion'
import Image from 'next/image'
import button from 'next/link'
import React from 'react'

function Navbar() {
  
  const handleScroll = (ref) => {
    const anchor = document.querySelector(ref)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div
    className='w-full shadow-navbarShadow h-20 lg:h=[12vh] sticky top-0 z-50 px-4'
    style={{backgroundColor:"#000080"}}
    >
      <div className='max-w-container h-full mx-auto py-1 
      font-titleFont flex items-center justify-between'>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          <Image
          src="/logo.png" alt="logo" width={40} height={40}
          />
        </motion.div>
      <div className='hidden mdl:inline-flex items-center gap-7'>
        <ul className='flex text-[13px] gap-7'>
          <button 
          onClick={()=>handleScroll("#Home")}
          className='flex items-center gap-1 font-medium text-textDark
          hover:text-textGreen cursor-pointer duration-300 nav-link'
          >
          <motion.li
          initial={{y:-10,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.3}}
          >Home
          </motion.li></button>
          <button
          // href="#About"
          onClick={()=>handleScroll("#About")}
          className='flex items-center gap-1 font-medium text-textDark
          hover:text-textGreen cursor-pointer duration-300 nav-link'
          >
        
            
              <motion.li
              initial={{y:-10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.3,delay:0.2}}
              ><span>01.</span> About
              </motion.li>
            
          </button>
          <button 
          onClick={()=>handleScroll("#Experience")}

          className='flex items-center gap-1 font-medium text-textDark
          hover:text-textGreen cursor-pointer duration-300 nav-link'
          >
            
              <motion.li
              initial={{y:-10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.3,delay:0.4}}
              ><span>02.</span> Experience
              </motion.li>
            
          </button>
          <button
          onClick={()=>handleScroll("#Projects")}

          className='flex items-center gap-1 font-medium text-textDark
          hover:text-textGreen cursor-pointer duration-300 nav-link'
          >
        
              <motion.li
              initial={{y:-10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.3,delay:0.6}}
              ><span>03.</span> Projects
              </motion.li>
            
          </button>
          <button
          onClick={()=>handleScroll("#Contact")}
          className='flex items-center gap-1 font-medium text-textDark
          hover:text-textGreen cursor-pointer duration-300 nav-link'
          >
            
              <motion.li
              initial={{y:-10,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.3,delay:0.8}}
              ><span>04.</span> Contacts
              </motion.li>
            
          </button>
        </ul>
        <a href='/Resume.pdf' target="_blank">
        <motion.button
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.3}}
        className='px-4 py-2 rounded-md text-textGreen text-[13px] 
        border border-borderGreen hover:bg-hoverColor duration-300'
        >
          Resume
          </motion.button>
          </a>
      </div>
      </div>

    </div>
  )
}

export default Navbar