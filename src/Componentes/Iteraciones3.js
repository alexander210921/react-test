import { object } from 'prop-types'
import React, {useState} from 'react'
const EjemploIteraciones3 = ()=>{
    let [user,setUser] = useState ({name:'Gerardo perez',contry:'Guatemala',twitter:'@luxfenix',youtube:'tecs.ninja'})
    // const {user} = user
    let keysUser = Object.keys(user) // esto me devuelve los valores de las propiedad del objeto en forma de array [name,country,twitter,youtube]
    return(
        <div>
            {keysUser.map((kys)=>{
                return(
                    <li key={user.name}>
                    <p> <strong> {kys} </strong>: {user[kys]} </p>
                    </li>
                )
            })}
        </div>
    )
} 
export default EjemploIteraciones3;