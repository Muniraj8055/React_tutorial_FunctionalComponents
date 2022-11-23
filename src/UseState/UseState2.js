import React, { useState } from 'react'

function UseState2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const IncrementFIve = ()=>{

        for(let i = 0; i<5 ; i++){
        setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <h2>Count : {count}</h2>
        <br></br>
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        <button onClick={IncrementFIve}>Increment 5</button>
    </div>
  )
}

export default UseState2