import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Input from "./Input";
import useNominations from "./hooks/useNominations";
import NominatedMovies from "./NominatedMovies";
import Grid from "@material-ui/core/Grid";

export default function App() {
  const [movies, setMovies] = useState([]);
  const { nominations, nominateMovie, removeNomination } = useNominations();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Input setMovies={setMovies}></Input>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
          <h1 text-align="center">Movie List:</h1>
          <MovieList
            movies={movies}
            nominations={nominations}
            nominateMovie={nominateMovie}
          ></MovieList>
        </Grid>
        <Grid item xs={6}>
          <h1>Nominated Movies:</h1>
          <NominatedMovies
            movies={nominations}
            removeNomination={removeNomination}
          />
        </Grid>
      </Grid>
    </>
  );
}
