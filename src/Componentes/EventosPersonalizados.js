import React from 'react'
//Podemos crear un evento personalizado
//vamos a ver como es la comunicacion de un elementos hijo a un elemento padre a traves de los eventos personzalizados
import './Style/TarjetaFruta.css'
const Hijo = (props)=>{
  const  receptorDelEvento =()=>{        
    //  props.onSaludar
    }
    return(
        <div className='box red'>
            <h2>Hijo</h2>   
            <button onClick={receptorDelEvento} >Saludar</button>         
        </div>
    )
}
const Padre =(props)=>{
   const manejadorDelEvento = ()=>{
        alert('Message');
    }
    return(
        <>
        <div className='box blue'>
            <Hijo onSaludar={props.manejadorDelEvento} />
        </div>
        </>
    )
}
export default Padre;