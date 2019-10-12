import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = (item, url) => {
  const [movies, setMovies] = useState([])

  // hook to grab the movies
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        // set the movies to state
        setMovies(res.data.results)
      })
      // error handling
      .catch(err => console.log(err.response))
  }, [item, url])

  return [movies, setMovies]
}
