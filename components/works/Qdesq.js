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
            Write modern,effective,breif maintainable codes for my internal projects and clients
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Work with a variety of different languages,platforms,frameworks and content
            management systems such as JavaScript,TypeScript,NextJS,React
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Communicate with multi disciplinary teams of engineers designers,
            producers and client on a daily basis.
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Used to work on UI..............
          </li>
          <li className='text-base flex gap-2 text-textDark'>
            <span className='text-textGreen mt-1'><TiArrowForward/></span>
            Used to work on UI..............
          </li>
        </ul>
    </motion.div>
  )
}

export default Qdesq