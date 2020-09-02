import { useReducer } from "react";
import reducer, { NOMINATE, REMOVE } from "../helpers/reducer";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  function nominateMovie(movie) {
    dispatch({ type: NOMINATE, movie: movie });
  }

  function removeNomination(id) {
    dispatch({ type: REMOVE, id });
  }

  return { nominations, nominateMovie, removeNomination };
}
