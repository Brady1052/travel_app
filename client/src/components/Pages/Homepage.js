import React from 'react'
import Images from './Images'
import heroImg from '../../img/hero-back1.jpeg'

const Homepage = () => {
    return (
        <div style={{
            backgroundImage: `url(${heroImg})`,
            overflow: 'hidden'
            
        }}>
            <h1 className='title'>Travel App</h1>
            <Images />
        </div>

    )
}

export default Homepage
