import React from "react"
import UseDebounce from "../hooks/UseDebounce"

export default function InputComp(){
    const [filteredUser, setFilterdedUsers] = React.useState([])
    const [renderedUsers, setRenderedUsers] = React.useState([])
    const debounced = UseDebounce(filteredUser, 1000)
    React.useMemo(()=>{

        // setRenderedUsers(users.filter(user => user.name.includes(debounced) || user.username.includes(debounced) || user.email.includes(debounced)))
        console.log({renderedUsers})

    },[debounced])

    return (
        <input type='text' name='search' value={filteredUser} onChange={(e)=> setFilterdedUsers(e.target.value)}/> 
    )
};