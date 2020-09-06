import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Mark from "./Mark";
import "./Item.scss";

const Item = ({ movie, is_disabled, onClick, setName, setDate }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.imdbID;
      const onMouseEnter = (movie) => {
        setName(movie.Title);
        setDate(movie.Year);
      };

      const onMouseLeave = (movie) => {
        setName("");
        setDate("");
      };

      return (
        <>
          <div
            onMouseEnter={() => onMouseEnter(movie)}
            onMouseLeave={() => onMouseLeave(movie)}
            ref={elementRef}
            className={cx("item")}
            onClick={onClick}
            disabled={is_disabled}
            style={{
              opacity: is_disabled ? 0.2 : 1,
              cursor: is_disabled ? null : "pointer",
            }}
          >
            <img src={movie.Poster} alt="" />
            {isActive && <Mark />}
          </div>
        </>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
