// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Navbar from './../components/Navbar';
import LeftSide from './../components/LeftSide';
import RightSide from './../components/RightSide';
import {motion} from 'framer-motion'
import Banner from '@/components/Banner';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from './../components/Contact';
import Footer from './../components/Footer';
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className="font-bodyFont w-full h-screen bg-bodyColor text-textLight
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-textDark scrollbar-track-textDark/60 ">  
      <Navbar/>
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <motion.div
        initial={{y:0,opacity:0}}
        animate={{y:10,opacity:1}}
        transition={{duration:0.5,delay:1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <LeftSide/>
        </motion.div>
        <div className='h-[88vh] mx-auto p-4'>
          <Banner/>
          <About/>
          <Experience />
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
        className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <RightSide/>
        </motion.div>
      </div>
    </main>
  )
}
