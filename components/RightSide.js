import React from 'react'

function RightSide() {
  return (
    <div className='w-full h-full flex flex-col items-center 
    justify-end gap-0 text-textLight'>
        <a href='mailto:skypaul2000@gmail.com'>
          <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>email me</p>
        </a>
        <span className='w-[2px] h-32 bg-white inline-flex'></span>
    </div>
  )
}

export default RightSide