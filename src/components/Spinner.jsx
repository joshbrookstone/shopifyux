import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

export default function (props) {
  return (
    <Loader
      className={"Loader"}
      type="Grid"
      color="#d1c499"
      height={150}
      width={150}
    />
  );
}
