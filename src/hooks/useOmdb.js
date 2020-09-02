import { useEffect, useReducer } from "react";
import axios from "axios";

export default function useOmdb(name) {
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

  return omdb(name);
}
