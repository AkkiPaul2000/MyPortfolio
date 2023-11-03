import React from 'react'
import {motion} from 'framer-motion'

function Banner() {
  return (
    <section id="Home"
    className='min-h-screen max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col 
    gap-4 lgl:gap-8 mdl:px-10 xl:px-4'
    
    >
        <motion.h3
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.6}}
        className='text-2xl lgl:text-3xl font-titlefont tracking-wide text-textGreen'>
            Hi, My name is
        </motion.h3>
        <motion.h1
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='text-4xl lgl:text-6xl font-titlefont font-semibold flex flex-col'>
            Akash Paul.{" "}
            <span className='text-textDark mt-2 lgl:mt-4'>I build things with web.</span>
            </motion.h1>
        <motion.p
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='text-base md:max-w-[650px] text-textDark font-medium'
        >
            
            I am a web developer with 2+years of experience in react. I have a
            strong foundation in front-end & back-end development and skilled
            in creating user-friendly and web responsive applications using react
            and its ecosystem.
            
            {" "}
        </motion.p>
        <motion.button 
        initial={{y:10,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.9}}
        className='w-52 h-14 border text-sm font-titleFont  border-textGreen rounded-md text-textGreen
        tracking-wide hover:bg-hoverColor duration-300
        '>Check out my Project!</motion.button>
    </section>
  )
}

export default Banner