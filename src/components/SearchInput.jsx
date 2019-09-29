import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const SearchInput = ({ setMovie }) => {
  const [input, setInput] = useState('')

  // add a handle change for the search bar
  const handleChange = event => {
    const { value } = event.target
    setInput(value)
  }

  // add a handle submit for the form
  const handleSubmit = e => {
    e.preventDefault()
    axios
      // get data from the API
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=65e043c24785898be00b4abc12fcdaae&query=${input}`,
      )
      // set the results to state
      .then(res => {
        console.log(res.data.results, 'response')
        setMovie(res.data.results)
      })
      // catch errors
      .catch(err => console.log(err))
  }

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
