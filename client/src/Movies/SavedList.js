import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory();

  const routeToMovies = () => {
      history.push("/")
    }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`${movie.id}`} key={movie.id} > 
          <span className="saved-movie" >{movie.title}</span>
        </NavLink>
      ))}
      <button className="home-button" onClick={routeToMovies}> Home </button>
    </div>
  );
}
