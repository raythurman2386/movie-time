import React, { PureComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie';

// class MoviesList extends PureComponent {
// 	state = {
// 		movies : [],
// 	};

// 	async componentDidMount() {
// 		try {
// 			const result = await fetch(
// 				'https://api.themoviedb.org/3/discover/movie?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1',
// 			);
// 			const movies = await result.json();

// 			this.setState({
// 				movies : movies.results,
// 			});
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	}

// 	render() {
// 		console.log(this.state.movies);
// 		return (
// 			<MovieGrid>
// 				{this.state.movies.map((movie) => (
// 					<Movie key={movie.id} movie={movie} />
// 				))}
// 			</MovieGrid>
// 		);
// 	}
// }

// Emplementing Hook

const MoviesList = () => {
	// movies hook for state
	const [ movies, setMovies ] = useState({});

	// hook for api
	useEffect(() => {
		axios
			// get data from the API
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1',
			)
			// set the results to state
			.then((result) => {
				const movies = result.json();
				setMovies(movies.results);
			})
			// catch errors
			.catch((err) => console.log(err));
	}, []);

	console.log(movies);

	return (
		<MovieGrid>
			{/* { Loop over data and display } */}
			{movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
		</MovieGrid>
	);
};

export default MoviesList;

const MovieGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fill);
	grid-row-gap: 2rem;
`;
