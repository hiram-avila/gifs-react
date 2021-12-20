import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategoriess} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue( e.target.value )
    }
    
    const onSubmit = (e) => {
        e.preventDefault(); 
        setCategoriess( cats => [ inputValue ])
        setInputValue('')
    }

    return (
       <form onSubmit={ onSubmit }> 
           <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                />
        </form>  
    )
}

AddCategory.propTypes = {
    setCategoriess:PropTypes.func.isRequired
}
