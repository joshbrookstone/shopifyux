import axios from "axios";

export default function OmdbSearch(query, setMovies, setLoading) {
  return axios
    .get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
    )
    .then(({ data }) => {
      setMovies(data.Search);
      setLoading(true);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
