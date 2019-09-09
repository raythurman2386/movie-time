import React from 'react'
import styled from 'styled-components'

// import { Link } from 'react-router-dom';
import Movie from './Movie'

const MovieSearch = props => {
  return (
    <MovieGrid>
      {/* { Loop over data and display } */}
      {/* {movies.movies.map((movie) => console.log(movie.id, 'inside'))}, */}
      {props.movie.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
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
