// Hay dos formas en la que podemos acceder a los valores de los inputs existen dos formas para hacerlo. Con inputs Controlados y con no controlados
import React,{useRef} from 'react'

const InputNoControlado = ()=>{
    let nombre = useRef();
    let email = useRef(); 
    const handleClick = ()=>{
        const nombreInput = nombre.current.value 
        const emailInput = email.current.value 
        console.log(nombreInput,emailInput)

    }
    return(
        <div>
            <input type='text' ref={nombre} />
            <input type='text' ref={email} />
            <button onClick={handleClick} >Enviar</button>
         </div>   
    )
}

const EjemploFormularios1 = ()=>{
    return(
        <div>
            <h1>Inputs No controlados Refs</h1>
            <InputNoControlado />
        </div>
    )
}
export default EjemploFormularios1;

