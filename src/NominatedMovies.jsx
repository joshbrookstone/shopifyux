import React from "react";

export default function NominatedMovies({ movies, removeNomination }) {
  return movies.map((movie, i) => {
    return (
      <li key={i}>
        {movie.Title}({movie.Year})
        <button onClick={() => removeNomination(movie.imdbID)}>
          remove Movie
        </button>
      </li>
    );
  });
}
