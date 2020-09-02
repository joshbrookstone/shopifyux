import React, { useState } from "react";

export default function SingleMovie({
  id,
  entireMovie,
  title,
  year,
  poster,
  setNominate,
  removeMovie,
}) {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    // nominatedList.push(...nominatedList, title)

    setNominate(entireMovie);
    setDisabled(true);
  };

  return (
    <li>
      {title}({year})
      {poster !== "N/A" ? (
        <img src={poster} alt="Movie Poster"></img>
      ) : (
        <p>No poster</p>
      )}
      <button onClick={onClick} disabled={disabled}>
        Nominate
      </button>
    </li>
  );
}

// have an array in state for the nominated movies. the onclick will add the movie to the array.
//the nomination button will have to look and check the movietitle in the arrays to the movie titles rendeirng and if they are the same than setDisabled to true
/*

  useNominate hook:

const [nominatedMovies, dispatch] = useReducer(reducer, defaultState)

Map over all the movies now stored in the movielistAPI call, check their names, check if they match any name in our nominatedmovies array,
if so than add property disabled = true to movie object. which should disable our button

// hooks/useNominations.js

import reducer, {
  NOMINATE
} from "reducers/nominations";

const [ state, dispatch ] = useReducer(reducer, []);


dispatch({ type: NOMINATE, movie })


// reducer/nominations.js

export const NOMINATE = "NOMINATE";

export default function reducer(state, action) {
  if (action.type === NOMINATE) {
    const { movie } = action;
    return [...state, movie];
  }
  
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

*/
