import React from 'react'

const Button = ({setWidth}) => {

  const increaseWidth =() =>{
    setWidth(200)
  }




  return (
    <button className='button'
    onClick={increaseWidth}
    >
        increase Width
    </button>
  )
}

export default Button
