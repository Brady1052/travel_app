import React from 'react'
import Images from './Images'
const Visited = () => {
    return (
        <div
            style={{
            backgroundImage: `url("https://images.pexels.com/photos/255464/pexels-photo-255464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")`
        }}>
            <h1 className='title'>Places You Have Visited</h1>
            <Images />
        </div>
        
    )
}

export default Visited
