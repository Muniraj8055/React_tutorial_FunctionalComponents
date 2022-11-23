//useContext by using regular concept

import React from 'react'
import { RoleContext, UserContext } from '../App'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
           { user=>{
                    return(
                        <RoleContext.Consumer>
                            {
                                role=>{
                                    return(
                                        <div>
                                            User name is {user}, His role is {role}
                                        </div>
                                    )
                                }
                            }
                        </RoleContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>

    </div>
  )
}

export default ComponentF