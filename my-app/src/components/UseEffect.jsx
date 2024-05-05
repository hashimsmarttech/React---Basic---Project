import React, {useEffect, useState} from 'react'

const UseEffect = () => {

    const[curData , setData] = useState([])
    const getData = async() =>{ 
       let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        setData(await response.json())
    //    let data = await response.json();
    //    console.log(data);
    }

    useEffect(()=>{
        getData()
    })
   
  return (
    <>
     {curData.map((curElem) =>{
        return(
        <>
          <h1>Employee ID: {curElem.id}</h1>
          <h2>Employee Title:{curElem.title}</h2>
         </>
        )
     }) }
    </>
  )
}

export default UseEffect