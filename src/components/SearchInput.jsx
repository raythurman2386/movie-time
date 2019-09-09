import React from 'react'
import styled from 'styled-components'
import MovieSearch from './MovieSearch'

const SearchInput = props => {
  return (
    <form>
      <Input
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

const Input = styled.input`
  margin: 0 0.25rem;
  padding: 0.5rem;
  min-width: 125px;
  border: 1px solid #eee;
  border-radius: 5px;
  transition: border-color 0.5s ease-out;
`
