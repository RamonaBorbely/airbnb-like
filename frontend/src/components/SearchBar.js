import React from 'react'
import { IoSearchCircleSharp } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <div className='search-header '>
        <p>Anywhere</p>
        <p>Any week</p>
        <p className='add-guests'>Add guests</p>
        <IoSearchCircleSharp className='search-icon'/>

    </div>
  )
}

export default SearchBar
