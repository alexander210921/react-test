import React, { useState } from 'react'

import './Style/TarjetaFruta.css'



// function Agregar(){
//     const [cantidad,setCantidad] = useState(0);
//     setCantidad(cantidad+1)
// }

const Target = (props)=>{
    let [cantidad,setCantidad] = useState(0);
    let[total,setTotal] =useState(0);
    const Agregar=()=> { 
        if(cantidad==0){
            setCantidad(cantidad=1);
            setTotal(props.price);
        }else{
            setCantidad(cantidad = cantidad+1)   
            setTotal(total = props.price*cantidad)                     
        }                                 
    }
    function Quitar() {
        if(cantidad>0){
            return setCantidad(cantidad-1)
        }        
    }
    function Limpiar() {
         return(
            setCantidad(cantidad=0),
            setTotal(total=0)
         )   
    }
    const classNameContainer = cantidad>0? 'card-fruit-container':'card-fruit-container-active';
    return(
        <>
        <div className={classNameContainer}>
            <h3>{props.name}</h3>
            <p>{props.details}</p>
            <p>{props.price}</p>
            <p>Cantidad: {cantidad}</p>

            <p>Total: Q {total}</p>

            <p></p>
            <div>
            <button onClick={Agregar}>Agregar</button>
            <button onClick={Quitar} >Quitar</button>
            <button onClick={Limpiar}>Limpiar</button>
            </div>            
        </div>
        </>
    )
}
export default Target;