import React from "react";
import SingleMovie from "./SingleMovie";
import Grid from "@material-ui/core/Grid";
import Spinner from "./Spinner";
import "./MovieList.css";

export default function MovieList({
  movies,
  nominations,
  nominateMovie,
  removeMovie,
  loaded,
  error,
}) {
  console.log(movies);
  const movieNominated = (movie) => {
    return !!nominations.find((n) => n.imdbID === movie.imdbID);
  };

  const allNominationsSet = () => {
    return nominations.length === 5;
  };

  if (movies && loaded) {
    return (
      <Grid
        container
        className={("Movie-List", "fade-in")}
        style={{ placeContent: "center" }}
      >
        <ul>
          {movies.map((singleMovie, i) => {
            return (
              <Grid item xs={12}>
                <SingleMovie
                  key={i}
                  movie={singleMovie}
                  is_disabled={
                    movieNominated(singleMovie) || allNominationsSet()
                  } // boolean
                  setNominate={nominateMovie}
                  removeMovie={removeMovie}
                />
              </Grid>
            );
          })}
        </ul>
      </Grid>
    );
  }
  if (!loaded) {
    return <Spinner />;
  }

  if (error) {
    return <h3>sorry something went wrong! please try again</h3>;
  }
  return <h3 className={"Movie-Filler"}>Omdb Movies will appear here</h3>;
}
