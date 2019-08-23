import { FETCH_SURVEYS } from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_SURVEYS:
      return {
        ...state,
        surveys: payload
      };

    default:
      return state;
  }
};
