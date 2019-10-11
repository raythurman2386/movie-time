import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'
import MovieSearch from './components/MovieSearch'
import SearchInput from './components/SearchInput'

import Logo from './images/movietime.svg'

const App = () => {
  // movies hook for search
  const [movie, setMovie] = useState([])

  return (
    <AppWrapper className='App'>
      <AppHeader className='App-header'>
        <Link to='/'>
          <HeaderWrapper src={Logo} alt='movie time' />
        </Link>
        <SearchInput movie={movie} setMovie={setMovie} />
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
