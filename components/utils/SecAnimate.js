import React, { useEffect, useRef } from 'react'
import { easeIn, motion, useAnimation, useInView } from 'framer-motion' 

function SecAnimate({children}) {
    const ref=useRef(null)
    const inView=useInView(ref)
    // const {ref,inView}=useInView({threshold:0.2})
    const entrance=useAnimation()
    const emphasis=useAnimation()
    useEffect(()=>{
        if(inView){
            entrance.start("vis")
            emphasis.start("vis")
            console.log("viewed")
        }
    },[entrance,emphasis, inView])
    
    
  return (
    <>
    <motion.div 
        ref={ref}
        variants={{
            hid:{y:-100,opacity:0},
            vis:{y:0,opacity:1}
        }}
        initial="hid"
        animate={entrance}
        transition={{duration:0.7,delay:1.5}}
        >
            {children}
            <motion.div 
            ref={ref}
            variants={{
                hid:{left:0},
                vis:{left:"100%"},
            }}
            initial="hid"
            animate={emphasis}
            transition={{duration:0.7,ease:"easeIn"}}
            style={{
                position:"absolute",
                
                backgroundColor:"yellow",
                zIndex:20,
            }}></motion.div>  
        </motion.div>
        </>  
  )
}

export default SecAnimate