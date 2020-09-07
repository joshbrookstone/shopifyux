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
import Switcher from "./components/Switcher";
import Explanation from "./components/Explanation";
// Material UI Components
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

//React Spring
import { useSpring, animated } from "react-spring";

export default function App() {
  const [movies, setMovies] = useState();
  const {
    nominations,
    nominateMovie,
    removeNomination,
    restartNominations,
  } = useNominations();
  const [loaded, setLoading] = useState();
  const [FullNominationList, setFullNominationList] = useState(false);
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const [displayToggle, setDisplayToggle] = useState({ checked: true });

  const props = useSpring({ opacity: FullNominationList ? 1 : 0 });
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
        <div className={"Squared-App"}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "20vh", flexWrap: "nowrap" }}
            className={"Input-Grid"}
            xs={6}
          >
            <Explanation displayToggle={displayToggle.checked} />
            <Grid item xs={4} style={{ flexBasis: " 23.333333%" }}>
              <Input
                setMovies={setMovies}
                setLoading={setLoading}
                setError={setError}
              ></Input>
            </Grid>
            <Grid item xs={8}>
              {FullNominationList && (
                <animated.div style={props}>
                  <h3 className={"Notification"}>Your list is finished</h3>
                  <h3>Click here to share your list!</h3>
                  <Socials />
                  <h3>
                    or click{" "}
                    <Button
                      style={{
                        color: "rgb(179 11 11 / 87%)",
                        fontWeight: "700",
                      }}
                      onClick={() => restartNominations(nominations)}
                    >
                      here
                    </Button>{" "}
                    to restart
                  </h3>
                </animated.div>
              )}
              {!FullNominationList && <></>}
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            direction={"column"}
            alignItems="center"
            justify="center"
            style={{
              minHeight: "40vh",
              flexWrap: "nowrap",
            }}
          >
            <Switcher
              setDisplayToggle={setDisplayToggle}
              displayToggle={displayToggle}
              className={"Switcher"}
            ></Switcher>
            <Grid
              container
              spacing={0}
              direction={displayToggle.checked ? "column" : "row"}
              alignItems="center"
              justify="center"
              placeContent="center"
              style={{ minHeight: "40vh", flexWrap: "nowrap" }}
            >
              <Grid item xs={6}>
                <h1 className={"List-Header"}>Movie List:</h1>
                <MovieList
                  loaded={loaded}
                  movies={movies}
                  nominations={nominations}
                  nominateMovie={nominateMovie}
                  error={error}
                  setName={setName}
                  setDate={setDate}
                  displayToggle={displayToggle.checked}
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
                  displayToggle={displayToggle.checked}
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <p
          className={"Movie-Info"}
          style={{
            visibility: name ? "visible" : "hidden",
            textAlign: "center",
          }}
        >
          {name ? name : "hidden"} {date ? date : ""}
        </p>
      </Container>
    </>
  );
}

//! need to bring back the button. than can make a toggle button that toggles state that either shows the button to nominate or the pictures
//! need to take photos and add to the readme
//! need to complete the application form tomorrow also
