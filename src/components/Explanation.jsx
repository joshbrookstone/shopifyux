import React from "react";

export default function Explanation({ displayToggle }) {
  if (displayToggle === true) {
    return (
      <>
        <h3 className={"Explain"} style={{ alignSelf: "start" }}>
          Click on a poster to nominate a movie
        </h3>
        <h3
          className={"Explain"}
          style={{ alignSelf: "start", paddingBottom: "81px" }}
        >
          Click on a poster from your nomination list to remove
        </h3>
        <h3 className={"How-To-Top"} style={{ marginBottom: 0 }}>
          Search by keyword or phrase in list or poster view
        </h3>
        <h3>Search one or more times to build your list</h3>
      </>
    );
  }
  return (
    <>
      <h3 className={"Explain"} style={{ alignSelf: "start" }}>
        Click on a nominate button to nominate a movie
      </h3>
      <h3
        className={"Explain"}
        style={{ alignSelf: "start", paddingBottom: "81px" }}
      >
        Click on the remove button from your nomination list to remove
      </h3>
      <h3 className={"How-To-Top"} style={{ marginBottom: 0 }}>
        Search by keyword or phrase in list or poster view
      </h3>
      <h3 className={"How-To-Bottom"}>
        Search one or more times to build your list
      </h3>
    </>
  );
}
