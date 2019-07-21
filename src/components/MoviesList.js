import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie';

const MoviesList = () => {
	// movies hook for state
	const [ movies, setMovies ] = useState({
		movies : [],
	});

	// hook for api
	useEffect(() => {
		axios
			// get data from the API
			.get(
				'https://api.themoviedb.org/3/discover/movie?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1',
			)
			// set the results to state
			.then((response) => {
				console.log(response, 'response');
				setMovies({ movies: response.data.results });
			})
			// catch errors
			.catch((err) => console.log(err));
	}, []);

	console.log(movies, 'movie');

	return (
		<MovieGrid>
			{/* { Loop over data and display } */}
			{movies.movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
		</MovieGrid>
	);
};

export default MoviesList;

const MovieGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-row-gap: 2rem;
`;
