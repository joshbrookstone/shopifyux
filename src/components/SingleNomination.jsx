import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "./SingleMovie.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SingleNomination({ movie, is_disabled, onClick }) {
  const classes = useStyles();

  return (
    <li className={"Single-Movie"}>
      <h3 className={"Movie-Info"}>
        {movie.Title}({movie.Year})
      </h3>
      <Button
        variant="outlined"
        color="green"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={onClick}
        disabled={is_disabled}
      >
        Remove
      </Button>
    </li>
  );
}
