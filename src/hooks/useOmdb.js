import { useEffect, useReducer } from "react";
import axios from "axios";

export default function useOmdb(props) {
  const { title } = props;

  const results = [];
  return axios
    .get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${title}`
    )
    .then(({ data }) => {
      for (const key in data) {
        results[key] = data[key];
      }
      return results;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
