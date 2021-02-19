import React, { useEffect, useState } from 'react'
import axios from "axios"
const EjemploApi1 = () => {
    let [users, setUser] = useState([]);
    let [cargandoMessague, setMessague] = useState(true);
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users").then(respuesta => {
            setUser(respuesta.data)

        }).catch(error => {
        })

    }, []);

    console.log(users)
    return (
        <>
            <h1>Mi lista de usuarios</h1>
            <ul>
                {users.map((user, index) => {
                    return (
                        <li key={index.toString()}>
                            {user.name} - <a href ={`http://${user.website}`}> website</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
export default EjemploApi1;