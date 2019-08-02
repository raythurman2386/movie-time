import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie';

const MoviesList = () => {
	// movies hook for state
	const [ movies, setMovies ] = useState({
		movies : [],


export default MoviesList;

const MovieGrid = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-row-gap: 2rem;
`;
