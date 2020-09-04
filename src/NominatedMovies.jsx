import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function NominatedMovies({ movies, removeNomination }) {
  const classes = useStyles();

  return movies.map((movie, i) => {
    return (
      <li key={i}>
        {movie.Title}({movie.Year})
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => removeNomination(movie.imdbID)}
        >
          Remove
        </Button>
      </li>
    );
  });
}
