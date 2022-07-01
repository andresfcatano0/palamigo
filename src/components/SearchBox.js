import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div className='pa2'>
      <input 
        className='pa3 ba b-purple bg-lightest-purple'
        type="search" 
        placeholder='Seach friends' 
        onChange= {searchChange}
      />
    </div>
  );
}




export default SearchBox; 