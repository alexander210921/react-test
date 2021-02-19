import React from 'react';
import TargetFruit from './TarjetaFrutas';
const App1 = ()=>{
    let nombre = "piña"
    return(        
        <>
        <TargetFruit name={`${nombre}`} details={'Esto es un detalle'} price={12} ></TargetFruit>
        <TargetFruit name={`Pera`} details={'Esto es un detalle'} price={5}></TargetFruit>
        </>
    )
}
export default App1;