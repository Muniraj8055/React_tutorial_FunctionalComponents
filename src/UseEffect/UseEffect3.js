import React, { useEffect, useState } from 'react'

function UseEffect3() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    const logMousePosition = (e) =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("UseEffect is called")
        window.addEventListener("mousemove", logMousePosition)
    },[])// If we give empty array then it will run effect only once
         // ComponetDidMount

  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default UseEffect3