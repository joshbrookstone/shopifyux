import React from "react";

export default function Input({ name, setName }) {
  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter a Movie Title"
      />
      <h1>Hello, {name}.</h1>
    </main>
  );
}
