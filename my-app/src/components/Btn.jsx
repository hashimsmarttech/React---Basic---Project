import React from 'react'

const Btn = () => {

  const handleClick = () =>{
    alert("Your Click!")
  }
  return (
    <>
    <div className='container'>
    <button onClick={handleClick}>Click!</button>
    </div>
   
    </>
  )
}

export default Btn