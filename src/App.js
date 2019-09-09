import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import MoviesList from './components/MoviesList'
import MovieDetail from './components/MovieDetail'
import MovieSearch from './components/MovieSearch'
import SearchInput from './components/SearchInput'

import Logo from './images/movietime.svg'

const App = () => (
  <Router>
    <AppWrapper className='App'>
      <AppHeader className='App-header'>
        <Link to='/'>
          <HeaderWrapper src={Logo} alt='movie time' />
        </Link>
        <SearchInput />
      </AppHeader>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route path='/:id' component={MovieDetail} />
        <Route path='/search' component={MovieSearch} />
      </Switch>
    </AppWrapper>
  </Router>
)

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
