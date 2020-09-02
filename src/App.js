import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Input from "./Input";
refactimport useNominations from "./hooks/useNominations";
import NominatedMovies from "./NominatedMovies";

export default function App() {
  const [movies, setMovies] = useState([]);
  const { nominations, nominateMovie, removeMovie } = useNominations();

  const setMoviesData = (movies) => {
    const annotatedMovies = movies.map()
  }

  return (
    <>
      <Input setMovies={setMovies}></Input>
      <MovieList
        movies={movies}
        nominateMovie={nominateMovie}
        removeMovie={removeMovie}
      ></MovieList>
      <NominatedMovies movies={nominations} />
    </>
  );
}
