import React from 'react'
import { motion } from 'framer-motion';
import {TiArrowForward} from "react-icons/ti"

function Qdesq() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.1}}
    className='w-full'
    >
        <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Project Engineer
        <span className='text-textGreen tracking-wide'>@Qdesq</span>
        </h3>
        <p className='text-sm mt-1 font-medium text-textDark'>April 2022 - present</p>
        <ul className='mt-6 flex flex-col gap-3'>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Learned to develop test plans, create and execute test
            cases, find and log bugs
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Built several test cases for several individual components and apis and used to run daily 
            tests with the help of a auto selenium based testing software like test-project 
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Gained immense experience on teamwork and collaboration skills.
          </li>
        </ul>
    </motion.div>
  )
}

export default Qdesq