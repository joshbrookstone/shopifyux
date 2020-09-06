import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import Slider from "./NetflixSlider";

import "./NominatedMovies.css";

export default function NominatedMovies({
  movies,
  removeNomination,
  nominations,
  setName,
  setDate,
}) {
  if (nominations.length > 0)
    return (
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item
              movie={movie}
              key={movie.id}
              onClick={() => removeNomination(movie.imdbID)}
              setName={setName}
              setDate={setDate}
            >
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );

  return (
    <h3 className={"Nominated-Filler"}>
      Your nominated movies will appear here
    </h3>
  );
}
