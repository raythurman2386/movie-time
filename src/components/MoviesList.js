/* eslint react/no-did-mount-set-state: 0 */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import axios from 'axios'

const MoviesList = () => {
  // hook for the movies
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  // hook to grab the movies
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}`,
      )
      .then(res => {
        // set the movies to state
        setMovies(res.data.results)
      })
      // error handling
      .catch(err => console.log(err.response))
  }, [page])

  if (!movies) {
    return <div>Loading movies...</div>
  }

  return (
    <>
      <ButtonGrid>
        <button onClick={() => setPage(page - 1)}>Previous</button>
        {page}
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </ButtonGrid>
      <MovieGrid>
        {movies && movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    </>
  )
}

export default MoviesList

const ButtonGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
`

const MovieGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-row-gap: 2rem;
`
