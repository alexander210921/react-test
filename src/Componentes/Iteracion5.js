
//Pasar datos al iterar listas con React
import React,{useState} from 'react'
const EjemploDeIteraciones5 =()=>{
    let[fruit,setFruit] = useState([
        {name:'Fresa',price: 5.4},
        {name:'Manzana',price: 3.2},
        {name:'Sandia',price: 1.2},
        {name:'Pera',price: 4.12},
        {name:'Limon',price: 7.21}
    ]);
    const select = ()=>{
        alert('as');
    }
    return(
        <ul>
            {fruit.map((fruitItem)=>{
                return(
                    <li key ={fruitItem.name} onClick ={select}>
                        {fruitItem.name} - Q {fruitItem.price}
                    </li>    
                )
            })}
        </ul>   
    )
}
export default EjemploDeIteraciones5;