import React, { useEffect, useState } from "react";
import "./App.css";
import { omdbGetRequest } from "./helpers/omdb_get_request";

function App() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  // const omdb = omdbGetRequest(title);
  useEffect(() => {
    setData(() => omdbGetRequest("war"));
  }, [title]);
  console.log(data);

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
