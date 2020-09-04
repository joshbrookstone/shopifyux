import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";

import "./NominatedMovies.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NominatedMovies({
  movies,
  removeNomination,
  nominations,
}) {
  const classes = useStyles();

  if (nominations.length > 0)
    return (
      <Grid container className={"Nominated-Movie-List"}>
        <ul>
          {movies.map((movie, i) => {
            return (
              <Grid item xs={12}>
                <li key={i} className={"Nominated-Movie"}>
                  {movie.Title}({movie.Year})
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => removeNomination(movie.imdbID)}
                  >
                    Remove
                  </Button>
                </li>
              </Grid>
            );
          })}
        </ul>
      </Grid>
    );

  return <></>;
}
