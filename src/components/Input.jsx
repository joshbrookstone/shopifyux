import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import TextField from "@material-ui/core/TextField";
import OmdbSearch from "../helpers/OmdbSearch";
import "./Input.css";

export default function Input({ setMovies, setLoading, setError }) {
  const [inputName, setInputName] = useState("");

  const onChange = (e) => {
    setLoading(false);
    setInputName(e.target.value);
  };

  const updateQuery = () => {
    // A search query api call.
    OmdbSearch(inputName, setMovies, setLoading, setError);
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
      InputLabelProps={{ style: { fontSize: 20 } }}
      fullWidth
      label="Search Omdb and nominate a movie!"
      value={inputName}
      onChange={onChange}
      placeholder="Enter a Movie Title"
    />
  );
}
