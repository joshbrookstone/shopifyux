export const NOMINATE = "NOMINATE";
export const REMOVE = "REMOVE";
export const RESTART = "RESTART";

export default function reducer(state, action) {
  if (action.type === NOMINATE) {
    const { movie } = action;
    return [...state, movie];
  }

  if (action.type === REMOVE) {
    const { id } = action;

    return state.filter((movie) => movie.imdbID !== id);
  }

  if (action.type === RESTART) {
    return [];
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}
