import React from 'react'
import {SlSocialGithub,SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram} from 'react-icons/sl'


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
        <a href='https://www.linkedin.com/in/akash-paul-6a715a1b2/' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <SlSocialLinkedin />
          </span>
        </a>
        <a href='https://www.facebook.com/akkipaul2000' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <SlSocialFacebook />
          </span>
        </a>
        <a href='https://www.instagram.com/__akki__2000/' target='_blank'>
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300
          '>
            <SlSocialInstagram />
          
          </span>
        </a>
    </div>
  )
}

export default Footer