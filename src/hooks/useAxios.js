import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = url => {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setMovies(res.data.results)
        setMovie(res.data)
      })
      .catch(err => console.log(err.response))
  }, [url])

  return { movies, movie }
}
