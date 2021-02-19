import React from 'react'
import ReactDOM from 'react-dom'

// al momento de usar el reacDom.render declaramos la raiz de su contenedor por defecto es root pero gracias a los portals podemos cambiar ese comportamiento
// actuan como si estuviesen dentro del arbol de react  donde podemos pasarle props y esos componentes se siguen comportando como si estuviera dentro del nodo principal
// por ejemplo lo podemos usar cuando queremos crear algun tipo de ventana flotante que no tiene mucho sentido colocarlo dentro del nodo principla
const PortalModal = (props)=>{
    return ReactDOM.createPortal((
        <h1 >Esto es un portal {props.children} </h1>
        
    ),document.getElementById('modal-root'))
}
export default PortalModal;
