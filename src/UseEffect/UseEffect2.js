import React,{useState, useEffect} from 'react'

function UseEffect2() {

const [count, setCount] = useState(0)
const [name, setName] =  useState('')

useEffect(()=>{
    console.log('UseEffect - Updating document title')
    document.title = `You clicked ${count} times` 
},[count]) //It will act as componentDidUpdate

  return (
    <div>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
       <button onClick={()=> setCount(count+1)}>Click {count}</button>
    </div>
  )
}

export default UseEffect2

