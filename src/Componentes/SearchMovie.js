import React, { useState } from 'react'
import Axios from 'axios'

const Movie = ()=>{

}

const MovieApp=()=>{
    let [movie,setMovie] = useState({});
    const handleSubmit =(event)=>{
        event.preventDefault()
        const title = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=fce3ecc9'+ '&t=' +title;
        Axios.get(url).then(respuesta =>{
            setMovie(respuesta.data)
            console.log(movie)
        });
        // alert(title)
    }
    return(
        <>
        <h1>
            Ejemplo de buscados de peliculas
        </h1>
        <form onSubmit = {handleSubmit} >
            <input type='text' placeholder='Nombre de la pelicula' />
            <button>
                Buscar
            </button>
            <div>
                <h2> {movie.Title} </h2>
                <p>
                    {movie.Plot}                    
                </p>
                <figure>
                    <img src ={movie.Poster}/>
                </figure>
            </div>
        </form>
        </>
    )
}
export default MovieApp;
