import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 

function SecAnimate({children}) {
    const ref=useRef(null)
    const inView=useInView(ref,{once:true})
    const animate=useAnimation()
    useEffect(()=>{
        if(inView){
            animate.start("vis")
            console.log("viewed")
        }
    },[inView])
    
    
  return (
    <motion.div 
    ref={ref}
    variants={{
        hid:{y:-100,opacity:0},
        vis:{y:0,opacity:1}
    }}
    initial="hid"
    animate={animate}
    transition={{duration:0.7,delay:1.5}}
        >
            {children}
    </motion.div>
  )
}

export default SecAnimate