import React, {useState} from 'react'
const realizandoUnEventDefault = (e) =>{
    //lo que se resive desde el evento 'e' no son los eventos como tales del DOM son eventos que reac ofrece para poder manejar un estandar en los distintos navegadores
    e.preventDefault()
    //sin envargo si queremos usar los eventos por defecto de los navegadores usamos podemos usar el nativeEvent
    // console.log(e.nativeEvent)
}

const EventoDomEjemplo = () =>{
    return(
        <div>
            <a onClick={realizandoUnEventDefault} href="https://google.com">Google</a>
        </div>
    )
}

export default EventoDomEjemplo;