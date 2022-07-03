import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
      <input 
        className='pa3 mb3 ba tc '
        type="search" 
        placeholder='Seach friends' 
        onChange= {searchChange}
      />
    </div>
  );
}




export default SearchBox; 