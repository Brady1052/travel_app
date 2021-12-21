import React from 'react'
import Images from './Images'
import heroImg from '../../img/hero-back1.jpeg'
import { Fade } from 'react-awesome-reveal'

const Homepage = () => {
    return (
        <Fade>
        <div style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover'
            
        }}>
            
            <h1 className='title'>Travel App</h1>
            <Images />
            
        </div>
        </Fade>

    )
}

export default Homepage
