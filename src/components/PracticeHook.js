import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Poster } from './Movie';
import Overdrive from 'react-overdrive';
import axios from 'axios';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieDetail = () => {
	const [ movie, setMovie ] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${movie.id}?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US`,
			)
			.then((res) => setMovie(res.data))
			.catch((err) => console.log(err));
	});

	console.log(movie);

	return (
		<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
			<MovieInfo>
				<Link to='/'>
					<Overdrive id={movie.id}>
						<Poster
							src={`${POSTER_PATH}${movie.poster_path}`}
							alt={movie.title}
						/>
					</Overdrive>
				</Link>
				<div>
					<h1>{movie.title}</h1>
					<h3>{movie.release_date}</h3>
					<p>{movie.overview}</p>
				</div>
			</MovieInfo>
		</MovieWrapper>
	);
};
export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${(props) => props.backdrop}) no-repeat center;
	background-size: cover;
`;

const MovieInfo = styled.div`
	background: crimson;
	text-shadow: #999 0px 0px 15px;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
	@media (max-width: 500px) {
		flex-direction: column;
		padding: 1rem 5%;
	}
`;
