import React from "react";

export default function Explanation({ displayToggle }) {
  if (displayToggle === true) {
    return (
      <>
        <h3 className={"Explain"} style={{ alignSelf: "start" }}>
          Click a poster from the movie list to nominate a film
        </h3>
        <h3
          className={"Explain"}
          style={{ alignSelf: "start", paddingBottom: "81px" }}
        >
          Click a poster from the nomination list to un-nominate
        </h3>
      </>
    );
  }
  return (
    <>
      <h3 className={"Explain"} style={{ alignSelf: "start" }}>
        Click the nominate button from the movie list to nominate a film
      </h3>
      <h3
        className={"Explain"}
        style={{ alignSelf: "start", paddingBottom: "81px" }}
      >
        Click a remove button from the nomination list to un-nominate
      </h3>
    </>
  );
}
