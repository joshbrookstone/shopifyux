import React, { useState } from "react";
import { debounce } from "lodash";
const axios = require("axios");

export default function Input({ setMovies }) {
  const [inputName, setInputName] = useState("");

  //! debouncer is returning all queries not just the last one
  const searchAPI = debounce((query) => {
    return axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
      )
      .then(({ data }) => {
        setMovies(data.Search);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, 1000);

  const handleOnChange = (event) => {
    setInputName(event.target.value);
    searchAPI(event.target.value);
  };

  return (
    <input
      value={inputName}
      onChange={handleOnChange}
      placeholder="Please enter a Movie Title"
    />
  );
}
