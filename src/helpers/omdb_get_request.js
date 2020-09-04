const axios = require("axios");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

export default function searchAPI(query) {
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
}
