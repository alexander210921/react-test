import React, {useState} from 'react'



const EventListenerInput = ()=>{
    let [textDeInput,setTextDeInput] =  useState();
   const manejador = (evento)=>{    
    setTextDeInput(textDeInput = evento.target.value)
   } 
//    setTextDeInput(textDeInput = manejador. )
return(
    <div>
        <form > 
           <input type="text" onChange={manejador} ></input>
           <p style={{color : textDeInput}}>{textDeInput}</p>
        </form>    
     </div>   
)
}
export default EventListenerInput;