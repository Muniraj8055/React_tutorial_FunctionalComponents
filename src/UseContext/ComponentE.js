//useContext by using hook


import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,RoleContext} from '../App'

function ComponentE() {

    const user = useContext(UserContext)
    const role = useContext(RoleContext)

  return (
    <div>
        {user} is a {role}
    </div>
  )
}

export default ComponentE