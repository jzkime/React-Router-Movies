import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const { movieID } = useParams();
  const { addToSavedList } = props;

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${movieID}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [movieID]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = id => {  
    addToSavedList(id)
   }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
        <MovieCard movie={movie} />

      <button onClick={() => saveMovie(movie.id)} className="save-button">Save</button>
    </div>
  );
}
