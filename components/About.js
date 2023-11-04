import React from 'react'
import SectionTitle from './SectionTitle';
import Image from 'next/image'
import { AiFillThunderbolt } from "react-icons/ai";
import {motion} from 'framer-motion'


function About() {
  return (
    <section
    id="About"
    className='max-w-containerSmall min-h-screen mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      
        <SectionTitle title="About me" titleNo="01" />
        <div className='flex flex-col lgl:flex-row gap-16'>
          <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 '>
            <p>
              Hello! My name is Akash Paul and I enjoy creating things that live on internet.
              My interest in web development started back in 2017 when I started exploring 
              some famous applications and through some of their open community source code, I
              found the front-end part to be more fascinating, hence went ahead with experimenting 
              and exploring the UI which taught me a lot about how HTML and CSS communicate between each other!
            </p>
            <p>
              Fast-forward to today after completing my B-Tech and after going through several ins and outs of web-app development
              I had the privilege of working as a project dev 
              in a multinational company also known as Wipro.
              <span className='text-textGreen'>
                 A MNC's Employee, A Curious Explorer and a Passionate Developer.
              </span>
              
            </p>
            <p className='text-textGreen'>
              Still interested and looking for some better opportunities to find a perfect fit for me and my capabilities.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className='max-w-[450px] font-titleFont text-sm grid grid-cols-2 gap-2 mt-6'>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                Javascript[ES6]
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                ReactJS
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                HTML
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                CSS
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                NextJS
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                Flutter
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                Figma
              </li>
              <li className='flex gap-2 items-center'>
                <span className='text-textGreen'><AiFillThunderbolt/></span>
                Git
              </li>
            </ul>
          </div>
          <div className='w-100 lgl:w-1/3 h-80 relative group'>
            <div className='absolute w-100 h-80 -left-6 -top-6 rounded-lg'>
              <div className='w-100 h-full relative z-20 flex pl-6 lgl:pl-0'>
                <img src="/profileImg.jpeg" alt="" title=""  layout="responsive" objectFit="contain"  className= 'rounded-lg h-full object-cover z-20'/>
                <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 z-30
                rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                <div className='hidden lgl:inline-flex w-full h-80 items-center absolute -z-5
                border-2 border-textGreen rounded-md group-hover:translate-x-10 -top-30 -left-30
                group-hover:translate-y-10 transition-transform duration-300
                '></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About