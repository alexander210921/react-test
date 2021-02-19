//Esta se ejecuta despues de haber renderizado nuesto nuestas etiquetas 
//normalmente lo usamos para podeder realiar peticiones HTTP o añadir los escuchadores de evento
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HTTPSTest = ()=>{
    let [photo,setPhoto] = useState([]);

    useEffect (()=> {
        console.log('realizando la peticion')
        const url = 'https://jsonplaceholder.typicode.com/photos';
        axios.get(url).then((respuesta)=>{
            setPhoto(respuesta.data)
        })
    },[]);
    return(
        <>
        <h1>Hooks uso de useEffect</h1>
         <ul>
           {photo.filter(photoItm=>photoItm.id<=10).map(photosfiltered =>(
               <>
               <li key={photosfiltered.id}  >
                   {photosfiltered.title}
                   <img src = {photosfiltered.thumbnailUrl}/>
               </li>
               </>
           ))}           
         </ul>
         </>   
    )
}

const EjemploDeComponentDidMount =(props)=>{
    return (
        <>
        <h2> {props.nombre} </h2>
        <HTTPSTest  />
        </>
    ) 
}
export default EjemploDeComponentDidMount;