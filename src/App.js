import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
	<Router>
		<div className='App'>
			<header className='App-header'>
				<Link to='/'>
					<HeaderWrapper>Movie Time</HeaderWrapper>
				</Link>
			</header>
			<Switch>
				<Route exact path='/' component={MoviesList} />
				<Route path='/:id' component={MovieDetail} />
			</Switch>
		</div>
	</Router>
);

export default App;

const HeaderWrapper = styled.h1`
	margin: 0 auto;
	width: 25%;
	text-decoration: none;
	color: white;
	:hover {
		transform: scale(1.1);
		text-shadow: #999 0px 0px 15px;
	}
`;
