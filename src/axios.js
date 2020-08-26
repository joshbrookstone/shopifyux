const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env);
// axios
//   .get(
//     `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&t=war`
//   )
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
