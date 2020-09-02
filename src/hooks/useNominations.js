import { useReducer } from "react";
import reducer, { NOMINATE, REMOVE } from "../helpers/reducer";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  function nominateMovie(movie) {
    dispatch({ type: NOMINATE, movie: movie });
  }

  function removeMovie(movie) {
    dispatch({ type: REMOVE, id: movie.id });
  }

  return { nominations, nominateMovie, removeMovie };
}
