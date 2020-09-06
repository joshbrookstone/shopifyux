import React from "react";
import Slider from "./NetflixSlider";

import "./NominatedMovies.css";

export default function NominatedMovies({
  movies,
  removeNomination,
  nominations,
  setName,
  setDate,
}) {
  const onClick = (movie) => {
    removeNomination(movie.imdbID);
    setName("");
    setDate("");
  };
  if (nominations.length > 0)
    return (
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item
              movie={movie}
              key={movie.id}
              onClick={() => onClick(movie)}
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
