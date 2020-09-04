import React, { useState } from "react";

// CSS
import "./App.css";

//Hooks
import useNominations from "./hooks/useNominations";

// React Components
import NominatedMovies from "./NominatedMovies";
import MovieList from "./MovieList";
import Input from "./Input";
import Header from "./Header";
// Material UI Components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function App() {
  const [movies, setMovies] = useState([]);
  const { nominations, nominateMovie, removeNomination } = useNominations();

  return (
    <>
      <Container className={"Main-Container"} maxWidth="lg">
        <Header />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "20vh" }}
        >
          <Grid item xs={12}>
            <Input setMovies={setMovies}></Input>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "40vh" }}
        >
          <Grid item xs={6}>
            <h1 className={"List-Header"}>Movie List:</h1>
            <MovieList
              movies={movies}
              nominations={nominations}
              nominateMovie={nominateMovie}
            ></MovieList>
          </Grid>
          <Grid item xs={6}>
            <h1 className={"List-Header"}>Nominated Movies:</h1>
            <NominatedMovies
              movies={nominations}
              removeNomination={removeNomination}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
