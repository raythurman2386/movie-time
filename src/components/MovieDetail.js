import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Poster } from './Movie'
import { useAxios } from '../hooks/useAxios'
import { api_key } from '../private/private'

const MovieDetail = props => {
  const { movie } = useAxios(
    `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${api_key}&language=en-US&append_to_response=videos`,
  )

  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
  const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
      <MovieInfo>
        <Link to='/'>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
        <div>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <h4>{movie.tagline}</h4>
          <p>{movie.overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  )
}

export default MovieDetail

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat center;
  background-size: cover;
`

const MovieInfo = styled.div`
  background: crimson;
  text-shadow: #999 0px 0px 15px;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1rem 5%;
  }
`
