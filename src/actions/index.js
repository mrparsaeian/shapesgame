import AxioConnection from "../apis/api";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_MYROOM,
  FETCH_ACTIVE_USERS_IN_MYROOM,
  CREATE_USER,
  ADD_ME_TO_MYROOM,
  UPDATE_USERS_IN_MYROOM,
  INITIATE_SHAPEGAME,
  FETCH_ACTIVE_USERS_IN_MY_SESSION,
  UPDATE_TIMER,
} from "./types";

// export const updateTimer = (myTimerTime) => async (dispatch, getState) => {
//   console.log("start timer!")
//   console.log("going to update timer!");
//   const { userId } = getState().auth;
//   const usersessiontimertime = {
//     ...userId,
//     ...myTimerTime,
//   };
//   const response = await AxioConnection.post(
//     "/usersessiontimertimes",
//     usersessiontimertime
//   );
//   dispatch({ type: UPDATE_TIMER, payload: myTimerTime });
// };

export const updateTimer = (myTimerTime) => {
  return {
    type: UPDATE_TIMER,
    payload: myTimerTime,
  };
};
export const fetchActiveUsersInMySession = () => async (dispatch) => {
  const response = await AxioConnection.get("/activesession");
  dispatch({ type: FETCH_ACTIVE_USERS_IN_MY_SESSION, payload: response.data });
};

export const initiateShapeGame = (myRoomData) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await AxioConnection.post("/liverooms", {
    ...myRoomData.usersInMyRoom,
    userId,
  });

  dispatch({ type: INITIATE_SHAPEGAME, payload: response.data });
  history.push("/");
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await AxioConnection.get(`/activesession/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};
export const fetchActiveUsersInMyRoom = () => async (dispatch) => {
  const response = await AxioConnection.get("/activeusersinactiverooms");
  // .catch(function (error) {
  //   if (error.response) {
  //     // Request made and server responded
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  // });
  // ^ https://www.py4u.net/discuss/337219 for loading/spinner effect
  // ^ https://semantic-ui.com/elements/loader.html for loader ui effect
  dispatch({ type: FETCH_ACTIVE_USERS_IN_MYROOM, payload: response.data });
};

export const fetchMyRoom = () => async (dispatch) => {
  const response = await AxioConnection.get("/rooms");

  dispatch({ type: FETCH_MYROOM, payload: response.data });
};
export const updateUsersInMyRoom = (myRoom) => async (dispatch) => {
  const response = await AxioConnection.patch(`/rooms/${myRoom.id}`);

  dispatch({ type: UPDATE_USERS_IN_MYROOM, payload: myRoom });
};

export const addMeToMyRoom = (myRoomData) => async (dispatch, getState) => {
  // const response = await AxioConnection.patch(`/streams/${id}`, formValues);
  const { myUserId } = getState().auth;
  myRoomData.roommembersno += 1;
  myRoomData.members = [...myRoomData.members, myUserId];

  const response = await AxioConnection.patch(`/liverooms/${myRoomData.Id}/`, {
    myRoomData,
  });

  dispatch({ type: ADD_ME_TO_MYROOM, payload: myUserId });
  // history.push("/");
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const createUser = (userData) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await AxioConnection.post("/register", {
    ...userData,
    userId,
  });
  console.log(response.accessToken);
  dispatch({ type: CREATE_USER, payload: userData });
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await AxioConnection.post("/streams", {
    ...formValues,
    userId,
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  history.push("/");
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await AxioConnection.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await AxioConnection.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
