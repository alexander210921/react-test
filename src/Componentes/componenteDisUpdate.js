import React, { Component, useEffect, useRef, useState } from 'react'
import axios from 'axios'

// function AxiosPeticion(props) {
//     axios.get(url).then(response =>  {
//         setUser(response.data)
//         // responseApi = response.data;
//         console.log(response.data)            
//     })
// }



const UserDetails=(props)=>{
    let [user,setUser] = useState({})
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/users/'+props.userID;
        axios.get(url).then(response =>  {      
            console.log(response.data)
            setUser(response.data)            
        });
        // console.log(prevProps,prevState)
    },[]);

    return(
        <>
        <h1>User Details</h1>
        {/* <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}  </p> */}
        <pre>
            {JSON.stringify(user,null,4)}
        </pre>
        </>
    )
}





const AppDidUpdate =()=>{
    let [id,setId] = useState(3);
    const handleClick =()=>{
        setId(id+1)
        console.log(id)
    }
    
    return(
        
        <div>
            <h1>Componentes Did Update</h1>
            <button onClick={handleClick}> Aumentar</button>
            <UserDetails userID={id}/>
        </div>
    )
}

export default AppDidUpdate;