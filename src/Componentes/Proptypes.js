//Los propTypes especifican el tipo los datos de entrada que queremos pueda que queramos recibir un entero y se ingresa un estring, esto no dara algun tipo de error, pero con las prop types nos dará un tipado fuerte
import React from 'react'
import PropTypes from 'prop-types';

const PropTest=(props)=>{

    const  {name,bio,email} = props;

    return(
        <>  
        <div>
            <h1>{name}</h1>
            <p>
                {bio}
            </p>
            <a href={`mailto:${email}`}>
                {email}
            </a>
        </div>
        </>
    )
}
PropTest.propTypes ={
    name:PropTypes.string
}
PropTest.defaultProps ={
    name:'nombre por defecto'
}

export default PropTest;
