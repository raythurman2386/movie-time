import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';

import Logo from './images/movietime.svg';

const App = () => (
	<Router>
		<AppWrapper className='App'>
			<AppHeader className='App-header'>
				<Link to='/'>
					<HeaderWrapper src={Logo} alt='movie time' />
				</Link>
			</AppHeader>
			<Switch>
				<Route exact path='/' component={MoviesList} />
				<Route path='/:id' component={MovieDetail} />
				{/* <Route path='/:id' component={PracticeHook} /> */}
			</Switch>
		</AppWrapper>
	</Router>
);

export default App;

const AppWrapper = styled.div`text-align: center;`;

const AppHeader = styled.header`
	background-color: #111;
	color: white;
	height: 6rem;
`;

const HeaderWrapper = styled.img`
	margin: 0 auto;
	padding-top: 1rem;
	width: 25%;
	text-decoration: none;
	color: white;
	:hover {
		transform: scale(1.1);
		text-shadow: #999 0px 0px 15px;
	}
	@media (max-width: 500px) {
		width: 100%;
	}
`;
