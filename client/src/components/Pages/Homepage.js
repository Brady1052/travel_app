import React from 'react'
import Images from './Images'
import heroImg from '../../img/hero-back1.jpeg'
import { motion } from "framer-motion"

export function Homepage() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        
        <div style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover'
            
        }}>
            
            <h1 className='title'>Travel App</h1>
            <motion.div
             className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 360 : 360
      }}
    >
            <Images />
            </motion.div>
            
        </div>
        

    )
}

export default Homepage
