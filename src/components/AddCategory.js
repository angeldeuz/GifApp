import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        // evita que se recarge toda la pagina lo cual es un evento muy antiguo que ya no se usa
        e.preventDefault();
        //.trim borra los espacios que puede tener antes o despues el string
        if ( inputValue.trim().length > 2) {
            // lo paso usando el callback para tomar el estado aterior de setCategories del otro componente y no tener que pasar categories como argumento en el componente
            setCategories( cast => [inputValue, ...cast]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}