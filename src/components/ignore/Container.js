









import React, { useState } from 'react'
import Box from './Box'
import Button from './Button'

const Container = () => {
  const[width, setWidth] = useState(100);

  return (
    <div className='container'>
      <p>Container</p>
        <Box width = {width}/>
        <Button setWidth ={setWidth}/>
    </div>
  )
}

export default Container
