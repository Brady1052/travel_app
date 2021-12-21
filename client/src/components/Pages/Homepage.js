import React from 'react'
import Images from './Images'
import heroImg from '../../img/hero-back1.jpeg'
import { motion } from "framer-motion"

export function Homepage() {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <motion.div
             className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 180 : 360
      }}
    >
        <div style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover'
            
        }}>
            
            <h1 className='title'>Travel App</h1>
        <Images />   
        </div>
        </motion.div>

    )
}

export default Homepage
