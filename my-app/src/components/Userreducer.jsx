import React, {useReducer, useState} from 'react'

const Userreducer = () => {

    const reducer = (state,action) =>{
        if(action.type === "Increment"){
            return state + 1 
        }else if(action.type === "Decrement"){
            return state - 1 
        }
        console.log(state, action);
        return state;

    }
    // const[count, setcount] = useState(0)
    const [state,dispatch]=useReducer(reducer ,0) 
  return (
    <>
    <p>Count: {state}</p>
  {/* <p>Count: {count}</p> */}
  {/* <button onClick={() =>{ setcount ( count + 1 )}}>Increment</button>
  <button onClick={() =>{ setcount ( count - 1 )}}>Decrement</button> */}

<button onClick={() =>{ dispatch ( {type : "Increment"} )}}>Increment</button>
  <button onClick={() =>{ dispatch ( {type : "Decrement"})}}>Decrement</button> 
    </>
  )
}

export default Userreducer