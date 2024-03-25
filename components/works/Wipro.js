import React from 'react'
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"

function Wipro() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Project Engineer
        <span className='text-textGreen tracking-wide'>@Wipro</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>April 2022 - present</p>
        <ul className='mt-6 flex flex-col gap-3'>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Designed and developed user interface components of an
            analytical website using React.js.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Implemented several libraries like Chart JS,Framer Js and
            Material UI or ShadCN to enhance user Experience.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Built reusable components and front-end libraries for future use.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Created lots of customized hooks for api calls.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Used firebase as an cloud messaging platform to notify client apps.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Paired with other developers to fix and sort out different
            bugs and unimportant rerenders throughout the website.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Learned SSR framework like NextJS , to reduce api response
            time and increase the Seo as well as the efficiency of the project
          </li>
        </ul>
    </motion.div>
  )
}

export default Wipro