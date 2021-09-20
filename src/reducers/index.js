import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import myRoom from './roomReducer';
import mySessionReducer from './shapesGameReducer';
import timerReducer from "./timerReducer";



export default combineReducers({
  auth: authReducer,
  form: formReducer,
  activeUsersInMyRoom: myRoom,
  activeUsersInMySession: mySessionReducer,
  myRoom: myRoom,
  currentTimerTime: timerReducer
});
