import React from "react";
import "./Header.css";
import movieReel from "../images/moviereel.png";

export default function (props) {
  return (
    <>
      <div className={"headerDiv"}>
        <header>The Shoppies</header>
        <img className={"movieReel"} src={movieReel} alt="movie_reel"></img>
      </div>
    </>
  );
}
