import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./SingleMovie.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SingleMovie({ movie, is_disabled, setNominate }) {
  const classes = useStyles();

  const onClick = () => {
    setNominate(movie);
  };

  return (
    <li className={"Single-Movie"}>
      {movie.Title}({movie.Year})
      {movie.Poster !== "N/A" ? (
        <img className={"Poster"} src={movie.Poster} alt="Movie Poster"></img>
      ) : (
        <p>No poster</p>
      )}
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<FavoriteBorderIcon />}
        onClick={onClick}
        disabled={is_disabled}
      >
        Nominate
      </Button>
    </li>
  );
}
