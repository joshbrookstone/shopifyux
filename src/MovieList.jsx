import React from "react";
import SingleMovie from "./SingleMovie";

export default function MovieList({ movies, nominateMovie, removeMovie }) {
  if (movies) {
    return (
      <ul>
        {movies.map((singleMovie, i) => {
          return (
            <SingleMovie
              entireMovie={singleMovie}
              key={i}
              id={singleMovie.imdbID}
              title={singleMovie.Title}
              year={singleMovie.Year}
              poster={singleMovie.Poster}
              is_disabled={singleMovie.is_disabled} // boolean
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
