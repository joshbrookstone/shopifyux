import React from "react";
import Slider from "./NetflixSlider";
import SingleNomination from "./SingleNomination";
import "./NominatedMovies.css";

export default function NominatedMovies({
  movies,
  removeNomination,
  nominations,
  setName,
  setDate,
  displayToggle,
}) {
  const onClick = (movie) => {
    removeNomination(movie.imdbID);
    setName("");
    setDate("");
  };
  if (nominations.length > 0 && displayToggle === true)
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

  if (nominations.length > 0 && displayToggle === false)
    return (
      <div className="app">
        {movies.map((movie) => (
          <SingleNomination
            movie={movie}
            key={movie.id}
            onClick={() => onClick(movie)}
          >
            item1
          </SingleNomination>
        ))}
      </div>
    );
  return (
    <h3 className={"Nominated-Filler"}>
      Your nominated movies will appear here
    </h3>
  );
}
