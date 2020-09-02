import React from "react";

export default function NominatedMovies({ movies }) {
  console.log(movies);
  return movies.map((movie, i) => {
    return (
      <li key={i}>
        {movie.Title}({movie.Year})
      </li>
    );
  });
}
