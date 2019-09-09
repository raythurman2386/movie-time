import React from 'react'
import styled from 'styled-components'
import MovieSearch from './MovieSearch'

const SearchInput = props => {
  return (
    <form>
      <input
        type='search'
        className='search-input'
        name='movie-search'
        placeholder='...Search'
        value={props.title}
        onSubmit={MovieSearch}
      />
    </form>
  )
}

export default SearchInput

const searchInput = styled.input`
  margin: '0 .25rem';
  padding: '0.5rem';
  minwidth: '125px';
  border: '1px solid #eee';
  borderradius: '5px';
  transition: 'border-color .5s ease-out';
`
