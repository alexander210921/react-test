import React,{useState} from 'react'
// let productos = [
//     {
//         nombre: 'jeans',
//         precio: 12,
//         color: ['#467367', '#05fd88']
//     },
//     {
//         nombre: 'Sueter',
//         precio: 22,
//         color: ['#D35EFF', '#9956E8']
//     },
//     {
//         nombre: 'playeras',
//         precio: 45,
//         color: ['#D35EFF', '#9956E8']
//     }
// ]


const EjemploDeIteraciones2 =()=>{
    let [producto, setProducto] = useState([{nombre: 'jeans',precio: 12,color: ['#467367', '#05fd88']},{ nombre: 'Sueter',precio: 22,color: ['#D35EFF', '#9956E8']}])

    return(
        <div>
            <ul>
            {producto.map((product)=>{
                return(
                    <li>
                        {product.nombre}
                     <div>
                         {product.color.map((color)=>{
                             return(
                                <span style={
                                    {
                                        display: 'flex',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        borderBlockColor: 'black',
                                        border:'1px solid',
                                        width:'10px',
                                        height:'10px',
                                        background:`${color}`                                                                
                                    }
                                } >
                                </span>
                             )
                         })}
                      </div>   
                     </li>   
                )
            })}
             </ul>

         </div>   
    )
}
export default EjemploDeIteraciones2;
