import React from "react";
import SingleMovie from "./SingleMovie";

export default function MovieList({
  movies,
  nominations,
  nominateMovie,
  removeMovie,
}) {
  const movieNominated = (movie) => {
    return !!nominations.find((n) => n.imdbID === movie.imdbID);
  };

  if (movies) {
    return (
      <ul>
        {movies.map((singleMovie, i) => {
          return (
            <SingleMovie
              key={i}
              movie={singleMovie}
              is_disabled={movieNominated(singleMovie)} // boolean
              setNominate={nominateMovie}
              removeMovie={removeMovie}
            />
          );
        })}
      </ul>
    );
  }

  return <div>please type a movie!</div>;
}
