import React from "react";

export default function SingleMovie({ movie, is_disabled, setNominate }) {
  const onClick = () => {
    setNominate(movie);
  };

  return (
    <li>
      {movie.Title}({movie.Year})
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt="Movie Poster"></img>
      ) : (
        <p>No poster</p>
      )}
      <button onClick={onClick} disabled={is_disabled}>
        Nominate
      </button>
    </li>
  );
}
