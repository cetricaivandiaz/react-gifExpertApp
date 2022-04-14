import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, SetInputValue] = useState('');

  const handleInputChange = ( e ) => {
    //console.log(e.target.value);
    SetInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Submit echo');
    if( inputValue ) {

      setCategories( cats => [inputValue, ...cats]);
      SetInputValue('');
    }
  }

  return (
        <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
          />
        </form>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}