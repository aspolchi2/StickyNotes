import React from 'react'
import {MdSearch} from "react-icons/md"

const Search = ({handleSearch}) => {
  return (
    <div className='search'> 
    // this is a search icon with reac-icon library 
    <MdSearch  className='search-icon' size='1.4em'/>
    //this is a input tag for the search
    <input type='text' placeholder='Search here...'
        onChange={(e) => handleSearch(e.target.value)}
    />
    
    </div>
  )
}

export default Search