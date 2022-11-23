// What does useEffect do?
// By using this Hook, you tell React that your component needs to do something 
// after render. React will remember the function you passed (we’ll refer to it as our“effect”), 
// and call it later after performing the DOM updates. In this effect, we set the document title, 
// but we could also perform data fetching or call some other imperative API.


import React,{useState, useEffect} from 'react'

function UseEffect1() {

const [count, setCount] = useState(0)

useEffect(()=>{
    document.title = `You clicked ${count} times` 
})

  return (
    <div>
       <button onClick={()=> setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default UseEffect1


//  1. When we use useEffect hook we are telling react that please execute the arrow function passed as an
//argument every time the component renders
// 2. It will run in first render and after every update