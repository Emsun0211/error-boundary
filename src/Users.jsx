import React from 'react'


function Users() {

    const [users, setUsers] = React.useState([])
    

    




    React.useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setUsers(data)
        })
    },[])

    // const handleFetchUsers = ()=> {
    //   fetch('https://jsonplaceholder.typicode.com/usersss')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data)
    //       setUsers(data)
    //     })
    // }
  return (
    <section style={{display: 'flex',  gap: "2rem", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{display: 'flex',  gap: "2rem", flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {users && users?.map((user, id) =><div key={id} className='user__card'>
        <h2>{user?.name}</h2>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
      </div>) }

    </div>

    {/* <button style={{back ground: 'blue', color: 'white'}} onClick={handleFetchUsers}>Fetch Users</button> */}
    </section>
  )
}

export default Users