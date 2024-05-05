import React from 'react'

const Test = () => {
    let name = "Smart Tech"
    let mystyle = {
        color: "red"
    }
  return (
    <div>
        <h1 style={mystyle}> Name:{name}</h1>
        </div>
  )
}

export default Test