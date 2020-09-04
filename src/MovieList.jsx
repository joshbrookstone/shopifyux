import React from "react";
import SingleMovie from "./SingleMovie";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
      <Grid container>
        <Paper elevation={0}>
          <ul>
            {movies.map((singleMovie, i) => {
              return (
                <Grid item xs={12}>
                  <SingleMovie
                    key={i}
                    movie={singleMovie}
                    is_disabled={movieNominated(singleMovie)} // boolean
                    setNominate={nominateMovie}
                    removeMovie={removeMovie}
                  />
                </Grid>
              );
            })}
          </ul>
        </Paper>
      </Grid>
    );
  }

  return <></>;
}
