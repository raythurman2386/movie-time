import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'
import MovieSearch from './components/MovieSearch'
import SearchInput from './components/SearchInput'

import Logo from './images/movietime.svg'

const App = () => {
  // movies hook for state
  const [movie, setMovie] = useState([])
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
      .get('https://api.themoviedb.org/3/search/movie?', {
        params: {
          api_key: '3e11806009cadfb91187ad7b65b9dc21',
          language: 'en_US',
          query: `${input}`,
        },
      })
      // set the results to state
      .then(res => {
        console.log(res.data.results, 'response')
        setMovie(res.data.results)
      })
      // catch errors
      .catch(err => console.log(err))
  }

  return (
    <Router>
      <AppWrapper className='App'>
        <AppHeader className='App-header'>
          <Link to='/'>
            <HeaderWrapper src={Logo} alt='movie time' />
          </Link>
          <SearchInput
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            input={input}
          />
        </AppHeader>
        <Switch>
          <Route exact path='/' render={props => <MoviesList {...props} />} />
          <Route path='/:id' render={props => <MovieDetail {...props} />} />
          <Route
            path='/search'
            render={props => <MovieSearch {...props} movie={movie} />}
          />
        </Switch>
      </AppWrapper>
    </Router>
  )
}

export default App

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #111;
  color: white;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const HeaderWrapper = styled.img`
  margin: auto;
  text-decoration: none;
  width: 240px;
  color: white;
  :hover {
    transform: scale(1.1);
    text-shadow: #999 0px 0px 15px;
  }
`
