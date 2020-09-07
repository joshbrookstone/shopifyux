import React from "react";
import "./Header.css";
import movieReel from "../images/moviereel.png";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { ListSubheader } from "@material-ui/core";

export default function (props) {
  return (
    <>
      <AppBar
        className={"Appbar-Test"}
        position="fixed"
        style={{ backgroundColor: "#22272c" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <header>The Shoppies</header>

          <img className={"movieReel"} src={movieReel} alt="movie_reel"></img>
        </Toolbar>
        <ListSubheader
          className={"Nominate-Statement"}
          style={{ backgroundColor: "#524a22" }}
        >
          <h3 className={"Nominate-Statement"}>
            Nominate your five favorite movies for the shoppies award!
          </h3>
        </ListSubheader>
      </AppBar>
      {/* <div className={"headerDiv"}>
        <div className={"headerText"}>
          <header>The Shoppies</header>
          <h3 className={"Nominate-Statement"}>
            Nominate your five favorite movies for the shoppies award!
          </h3>
        </div>

        <img className={"movieReel"} src={movieReel} alt="movie_reel"></img>
      </div> */}
    </>
  );
}
