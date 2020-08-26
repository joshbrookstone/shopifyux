import React, { useEffect } from "react";
import "./App.css";

function App() {
  const axios = require("axios");
  let request = axios.get(
    "http://www.omdbapi.com/?i=tt3896198&apikey=4d268215&t=war"
  );
  require("dotenv").config();
  console.log(request);

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
  //   axios.get(apiUrl).then((repos) => {
  //     const allRepos = repos.data;
  //     setAppState({ loading: false, repos: allRepos });
  //   });
  // }, [setAppState]);

  return (
    <div className="App">
      <header>
        {request[0].data.map((x) => (
          <h1>x</h1>
        ))}
      </header>
    </div>
  );
}

export default App;
