import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Movie from './Movie';
// import { Poster } from './Movie';
// import Overdrive from 'react-overdrive';

// const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
// const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieSearch = (props) => {
	// movies hook for state
	const [ movie, setMovie ] = useState({
		movie : [],
	});
	// console.log(props, 'props');
	// hook for api
	useEffect(() => {
		axios
			// get data from the API
			.get(
				'https://api.themoviedb.org/3/search/movie?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US&query=jack%20reacher&page=1&include_adult=false',
			)
			// set the results to state
			.then((res) => {
				console.log(res.data, 'response');
				setMovie({ movie: res.data });
			})
			// catch errors
			.catch((err) => console.log(err));
	}, []);

	// console.log(movie.movie, 'movie');
	// console.log(movie.movie.id, 'movie id');

	// set variable to remove redundancy
	const movieInfo = movie.movie;

	return (
		<MovieGrid>
			{/* { Loop over data and display } */}
			{/* {movies.movies.map((movie) => console.log(movie.id, 'inside'))}, */}
			{movieInfo.map((movie) => <Movie key={movie.id} movie={movie} />)}
		</MovieGrid>
	);
};

export default MovieSearch;

const MovieGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-row-gap: 2rem;
`;
