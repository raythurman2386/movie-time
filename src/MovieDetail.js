import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Poster } from './Movie';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
	state = {
		movie : {},
	};

	async componentDidMount() {
		try {
			const result = await fetch(
				`https://api.themoviedb.org/3/movie/${this.props.match.params
					.id}?api_key=3e11806009cadfb91187ad7b65b9dc21&language=en-US`,
			);
			const movie = await result.json();

			this.setState({
				movie : movie,
			});
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { movie } = this.state;
		return (
			<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
				<MovieInfo>
					<Overdrive id={movie.id}>
						<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
					</Overdrive>
					<div>
						<h1>{movie.title}</h1>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background: url(${(props) => props.backdrop}) no-repeat;
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
	media(max-width: 500px) {
		flex-direction: column;
	}
`;
