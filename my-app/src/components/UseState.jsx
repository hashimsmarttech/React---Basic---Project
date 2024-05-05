import React, {useState} from 'react'
                                    // UseState Hooks in React 
const UseState = () => {
         const [count, setCount] = useState(0);
         
    const handleClick= () =>{
       
         //UpdatedState ("Updated")

         setCount(count + 1)
    }
  return (
    <>
    
    <h1>Count: {count}</h1>

    <div className='container'>
    <button onClick={handleClick}>Update Value</button>
    </div>
      
    </>
  )
}

export default UseState