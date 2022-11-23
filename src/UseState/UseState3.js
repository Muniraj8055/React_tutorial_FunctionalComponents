//useState with Objects

import React,{useState} from 'react'

function UseState3() {

    const [name, setName] = useState({firstName:'', lastName:''})

  return (
    <div>
        <input type='text'
         value={name.firstName}
         onChange={e=> setName({ ...name,firstName: e.target.value})} />

        <input type='text' 
        value={name.lastName}
        onChange={e=> setName({ ...name,lastName: e.target.value})} />

        <h2>Your firstName is - {name.firstName}</h2>
        <h2>Your lastName is - {name.lastName}</h2>

    </div>
  )
}

export default UseState3