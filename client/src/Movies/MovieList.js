import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => ( <MovieDetails key={movie.id} movie={movie} />))}
    </div>
  );
}

function MovieDetails(props) {
  const { id } = props.movie;

  return (
    <Link to={`movies/${id}`}>
      <MovieCard movie={props.movie}/>
    </Link>
  );
}
