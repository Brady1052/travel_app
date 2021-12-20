import React from 'react'
import Images from './Images'
const Visited = () => {
    return (
        <div
            style={{
            backgroundImage: `url("https://media-exp1.licdn.com/dms/image/C4D1BAQGGdNo6IlDOCQ/company-background_10000/0/1519801807380?e=2159024400&v=beta&t=VWHuXHsmYAXZB4XQn7H63FLLvHjjMfs6CdxCh3HwcCM")`
        }}>
            <h1 className='title'>Places You Have Visited</h1>
            <Images />
        </div>
        
    )
}

export default Visited
