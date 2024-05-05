import React, { useState} from 'react';

const SecondChanllenge = () => {
           const [value, setValue] = useState("Smart Tech Programming")
           const [isAlertShown, setIsAlertShown] = useState(false);
           const [count, setcount] = useState(0)
    const handleClick = () =>{
        setValue(`${value} is great Programming`)
         alert(`Update Value!`)
         setIsAlertShown(true);
    }
    const handleClick1 = () =>{ 
        setcount(count +1)
    }

  return (
    <>
    
    <h1>{value}</h1>
   
    <div className='container'>
    <button  onClick={handleClick} disabled={isAlertShown} >Update Value</button>
    </div>
    <h1>Count:{count}</h1>
    <div className='container'>
        <button  onClick={handleClick1}>Count Number</button>
    </div>
    </>
  )
}

export default SecondChanllenge