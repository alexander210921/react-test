import React, { useRef } from 'react'

const Header = () =>{
    return(
        <h1>Soy el header</h1>
    )

}

const EjemploRef = ()=>{
    const entrada = useRef()
    const focus = ()=> entrada.current.focus();
    const blur = ()=> entrada.current.blur();
    return(
        <>
        <Header />
        <input type = "text" ref ={entrada}></input>
        <button onClick={focus}>Focus</button>
        <button onClick={blur} >Blur</button>
        </>
    )
}
export default EjemploRef;