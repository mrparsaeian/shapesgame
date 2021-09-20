import { UPDATE_TIMER } from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TIMER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
