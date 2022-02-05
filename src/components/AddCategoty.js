import React, { useState } from 'react';
import PropTypes from 'prop-types';




export const AddCategoty = ( { setCategories }) => {

    const [inputValue, setinputValue] = useState('');//undefined

    const handleInputChange = (e) => {

        setinputValue( e.target.value);

    }

    const handleSumit = (e) => {

        e.preventDefault();

        if ( inputValue.trim().length > 2) {

        // console.log('Sumit hecho')
        // setCategories
        setCategories( cats => [inputValue, ...cats] );
        setinputValue('');
    }

    }

return (


    <form onSubmit={ handleSumit }>
    <input
        type="text"
        value={ inputValue }
        onChange={handleInputChange}
    />
    </form>

)
}


AddCategoty.prototype = {

    setCategories: PropTypes.func.isRequired

}
