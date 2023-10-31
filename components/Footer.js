import React from 'react'
// import {TbBrandGithub} from 'react-icons/tb';
// import { SlSocialYoutube, SlSocialFacebook,SlSocialInstagram} from 'react-icons/sl';
import {SlSocialGithub,SlSocialFacebook} from 'react-icons/sl'
import {CiLinkedin,CiInstagram} from 'react-icons/Ci'


function Footer() {
  return (
        <div className='hidden mdl:inline-flex xl:hidden items-center justify-center
        w-full py-6 gap-4'>
      <a href='https://github.com/AkkiPaul2000' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <SlSocialGithub />
          </span>
        </a>
        <a href='https://github.com/AkkiPaul2000' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <CiLinkedin />
          </span>
        </a>
        <a href='https://github.com/AkkiPaul2000' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <SlSocialFacebook />
          </span>
        </a>
        <a href='https://github.com/AkkiPaul2000' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <CiInstagram />
          
          </span>
        </a>
    </div>
  )
}

export default Footer