import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'

const MovieSearch = props => {
  return (
    <MovieGrid>
      {props.movie &&
        props.movie.map(item => <Movie key={item.id} movie={item} />)}
    </MovieGrid>
  )
}

export default MovieSearch

const MovieGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 2rem;
`
