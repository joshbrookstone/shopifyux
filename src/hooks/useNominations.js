import { useReducer } from "react";
import reducer, { NOMINATE, REMOVE, RESTART } from "../helpers/reducer";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  function nominateMovie(movie) {
    dispatch({ type: NOMINATE, movie: movie });
  }

  function removeNomination(id) {
    dispatch({ type: REMOVE, id });
  }

  function restartNominations() {
    dispatch({ type: RESTART, nominations });
  }

  return { nominations, nominateMovie, removeNomination, restartNominations };
}
