import { UPDATE_TIMER } from "../actions/types";
const INTIAL_STATE = {
  currentTimerTime: 30,
};

export default (state = INTIAL_STATE, action) => {
  console.log("this is timer reducer! before switch");
  console.log(action.type);

  switch (action.type) {
    case UPDATE_TIMER:
      console.log("this is timer reducer! after switch");
      return { ...state, currentTimerTime: action.payload };
    default:
      return state;
  }
};
