import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    const saveMovie = movieList.find(movie => movie.id === id);
    if(saved.length === 0) return setSaved([saveMovie]);
    
    if(!saved.includes(saveMovie)){
      setSaved([...saved, saveMovie]);
    } else if(saved.length === 1) {
      return setSaved([]) 
    } else {
      const newSave = saved.filter(movie => movie !== saveMovie)
      setSaved([...newSave]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />

        <Route exact path='/'>
          <MovieList movies={movieList} />
        </Route>
        <Route path={`/movies/:movieID`}>
          <Movie movies={movieList} addToSavedList={addToSavedList} />
        </Route>

      </div>
  );
}
