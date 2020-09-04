import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import TextField from "@material-ui/core/TextField";
import "./Input.css";

const axios = require("axios");

export default function Input({ setMovies }) {
  const [inputName, setInputName] = useState("");

  const searchAPI = (query) => {
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
  };

  const onChange = (e) => {
    setInputName(e.target.value);
  };

  const updateQuery = () => {
    // A search query api call.
    searchAPI(inputName);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [inputName]);

  useEffect(() => {
    delayedQuery();

    // Cancel previous debounce calls during useEffect cleanup.
    return delayedQuery.cancel;
  }, [inputName, delayedQuery]);

  return (
    <TextField
      inputProps={{ style: { fontSize: 40 } }}
      InputLabelProps={{ style: { fontSize: 40 } }}
      fullWidth
      label="Omdb Nominator"
      value={inputName}
      onChange={onChange}
      placeholder="Please enter a Movie Title"
    />
  );
}
