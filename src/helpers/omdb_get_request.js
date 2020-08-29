const axios = require("axios");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

export const omdbGetRequest = (title) => {
  const results = [];
  return axios
    .get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&t=${title}`
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
};

// console.log(omdbGetRequest("war"));
