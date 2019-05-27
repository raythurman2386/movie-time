import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
	{
		id    : 1,
		title : 'Star Wars',
		desc  : 'Movie about a man and his father',
	},
	{
		id    : 2,
		title : 'Spider Man',
	},
	{
		id    : 3,
		title : 'Iron Man',
	},
];

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
				</header>
				{movies.map((movie) => <Movie key={movie.id} movie={movie} desc={movie.desc} />)}
			</div>
		);
	}
}

export default App;
