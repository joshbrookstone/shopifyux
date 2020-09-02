import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Input from "./Input";
import useNominations from "./hooks/useNominations";
import NominatedMovies from "./NominatedMovies";

export default function App() {
  const [movies, setMovies] = useState([]);
  const { nominations, nominateMovie, removeNomination } = useNominations();

  return (
    <>
      <Input setMovies={setMovies}></Input>
      <MovieList
        movies={movies}
        nominations={nominations}
        nominateMovie={nominateMovie}
      ></MovieList>
      <NominatedMovies
        movies={nominations}
        removeNomination={removeNomination}
      />
    </>
  );
}
