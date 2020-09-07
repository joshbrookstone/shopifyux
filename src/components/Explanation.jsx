import React from "react";

export default function Explanation({ displayToggle }) {
  return (
    <>
      <h3
        className={"Explain"}
        style={{ alignSelf: "start", fontSize: "0.8vw" }}
      >
        * Click on a {displayToggle === true ? "poster" : "button"} to nominate
        a movie
      </h3>
      <h3
        className={"Explain"}
        style={{ alignSelf: "start", paddingBottom: "81px", fontSize: "0.8vw" }}
      >
        * Click on a {displayToggle === true ? "poster" : "button"} from your
        nomination list to remove
      </h3>
      <h3 className={"How-To-Top"} style={{ fontSize: "0.8vw" }}>
        Search by keyword or phrase in list or poster view
      </h3>
      <h3>Search one or more times to build your list</h3>
    </>
  );
}
