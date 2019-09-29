import React from 'react'
import styled from 'styled-components'

const SearchInput = ({ handleChange, handleSubmit, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='input'
        placeholder='...Search'
        value={input}
        onChange={e => handleChange(e)}
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
