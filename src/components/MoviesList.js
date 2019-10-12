import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import { api_key } from '../private/private'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useAxios } from '../hooks/useAxios'

const MoviesList = () => {
  // hook for the movies
  const [page, setPage] = useLocalStorage(1)
  const { movies } = useAxios(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=${page}`,
  )

  return (
    <>
      <ButtonGrid>
        <Button onClick={() => (page === 1 ? setPage(1) : setPage(page - 1))}>
          Prev
        </Button>
        {page}
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </ButtonGrid>
      <MovieGrid>
        {movies && movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    </>
  )
}

export default MoviesList

const Button = styled.button`
  background-color: #111;
  border: none;
  cursor: pointer;
  padding: 5px 12px;
  font-size: 1.1rem;
  color: white;
  box-shadow: 0 0 15px black;
  :hover {
    box-shadow: 0 0 15px white;
    transform: scale(1.1);
  }
`

const ButtonGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  max-width: 1280px;
  margin: 2rem auto;
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
