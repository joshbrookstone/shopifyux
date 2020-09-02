import React, { useEffect } from "react";
const axios = require("axios");

export default function MovieList({ data, setData, name }) {
  useEffect(() => {
    const omdb = (name) => {
      console.log("inside omdb useffect");
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

    omdb(name);
  }, [name, setData]);

  if (data) {
    const listItems = data.map((data, i) => (
      <li key={i}>
        {data.Title}({data.Year})
        {data.Poster !== "N/A" ? (
          <img src={data.Poster} alt="Movie Poster"></img>
        ) : (
          <p>No poster in the database</p>
        )}
      </li>
    ));

    return data.length > 1 ? <ul>{listItems}</ul> : <></>;
  } else {
    return <div>please enter a movie name</div>;
  }
}
