import React from 'react'
import Images from './Images'
import { motion } from "framer-motion"
const Visited = () => {
  
        const [isActive, setIsActive] = React.useState(false);
    return (
        <div
            style={{
            backgroundImage: `url("https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM")`
        }}>
            <h1 className='title'>Places You Have Visited</h1>
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

export default Visited
