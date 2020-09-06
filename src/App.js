import React, { useState, useEffect } from "react";

// CSS
import "./App.css";

//Hooks
import useNominations from "./hooks/useNominations";

// React Components
import NominatedMovies from "./components/NominatedMovies";
import MovieList from "./components/MovieList";
import Input from "./components/Input";
import Header from "./components/Header";
import Socials from "./components/Socials";
// Material UI Components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function App() {
  const [movies, setMovies] = useState();
  const { nominations, nominateMovie, removeNomination } = useNominations();
  const [loaded, setLoading] = useState();
  const [FullNominationList, setFullNominationList] = useState(false);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const isNominationListFull = () => {
      nominations.length === 5
        ? setFullNominationList(true)
        : setFullNominationList(false);
    };
    isNominationListFull();
  }, [nominations]);

  useEffect(() => {
    const data = localStorage.getItem("my-nominations");
    if (data) {
      const parsedData = JSON.parse(data);
      parsedData.forEach((x) => nominateMovie(x));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-nominations", JSON.stringify(nominations));
  });

  return (
    <>
      <Container className={"Main-Container"} maxWidth="xl">
        <Header />
        <h3 className={"Nominate-Statement"}>
          Nominate your five favorite movies for the shoppies award!
        </h3>
        <h3>Search for a movie and than click the poster to nominate it!</h3>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "20vh" }}
        >
          <Grid item xs={12}>
            <Input
              setMovies={setMovies}
              setLoading={setLoading}
              setError={setError}
            ></Input>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "40vh" }}
        >
          <Grid item xs={6}>
            <h1 className={"List-Header"}>Movie List:</h1>
            <h3>
              Info: {name ? name : ""} {date ? date : ""}
            </h3>
            <MovieList
              loaded={loaded}
              movies={movies}
              nominations={nominations}
              nominateMovie={nominateMovie}
              error={error}
              setName={setName}
              setDate={setDate}
            ></MovieList>
          </Grid>
          <Grid item xs={6}>
            <h1 className={"List-Header"}>Nominated Movies:</h1>
            <NominatedMovies
              movies={nominations}
              removeNomination={removeNomination}
              nominations={nominations}
              setName={setName}
              setDate={setDate}
            />
          </Grid>
        </Grid>
        {FullNominationList && (
          <>
            <h3 className={"Notification"}>Your list is finished</h3>
            <h3>Click here to share your list!</h3>
            <Socials />
          </>
        )}
      </Container>
    </>
  );
}

//! ask alvin about flexboxing issue, as well as getting the actual share url
