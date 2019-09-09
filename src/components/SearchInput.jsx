import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MovieSearch from './MovieSearch'
import axios from 'axios'

const SearchInput = props => {
  // movies hook for state
  const [movie, setMovie] = useState([])
  // console.log(props, 'props');
  // hook for api
  useEffect(() => {
    axios
      // get data from the API
      .get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          api_key: '3e11806009cadfb91187ad7b65b9dc21',
          language: 'en_US',
          query: 'Jack Reacher',
        },
      })
      // set the results to state
      .then(res => {
        console.log(res.data.results, 'response')
        setMovie({ movie: res.data })
      })
      // catch errors
      .catch(err => console.log(err))
  }, [])

  return (
    <form>
      <Input
        type='search'
        className='search-input'
        name='movie-search'
        placeholder='...Search'
        value={movie.title}
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
