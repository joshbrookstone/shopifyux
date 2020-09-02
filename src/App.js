import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Input from "./Input";

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  console.log("this is data", data);
  return (
    <>
      <MovieList data={data} setData={setData} name={name}></MovieList>
      <Input name={name} setName={setName}></Input>
    </>
  );
}
