//implementacion de iteraciones con listas
const frutas = ['sandia','pera','uvas']
const ComponenteDeListadoDeFrutas = ()=>{
    return(
        <div>
            <h2>Mi listado de frutas</h2>
            <ul>
                {frutas.map((frutas)=>{
                    return (
                        <li>{frutas}</li>
                    )
                })}
             </ul>   
        </div>    
    )
}
export default ComponenteDeListadoDeFrutas;
