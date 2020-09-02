import React, { useEffect, useState } from "react";
import "./App.css";
import omdbGetRequest from "./helpers/omdb_get_request";
const axios = require("axios");

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    omdb("war");
  }, []);

  const omdb = (name) => {
    return axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${name}`
      )
      .then(({ data }) => {
        setData(data.Search);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  console.log(data);

  const listItems = data.map((data, i) => (
    <li key={i}>
      {data.Title}({data.Year})<img src={data.Poster} alt="Movie Poster"></img>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default App;
