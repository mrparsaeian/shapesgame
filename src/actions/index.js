import AxioConnection from "../apis/streams";
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
  CREATE_USER,
  INITIATE_SHAPEGAME,
  ADD_ME_TO_MYROOM,
  UPDATE_USERS_IN_MYROOM
} from "./types";
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
  const response = await AxioConnection.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};
export const fetchStreams = () => async (dispatch) => {
  const response = await AxioConnection.get("/streams");
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
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchMyRoom = () => async (dispatch) => {
  const response = await AxioConnection.get("/rooms");

  dispatch({ type: FETCH_MYROOM, payload: response.data });
};
export const updateUsersInMyRoom = (myRoom) => async (dispatch) => {
  const response = await AxioConnection.patch(`/rooms/${myRoom.id}`);

  dispatch({ type: UPDATE_USERS_IN_MYROOM, payload: myRoom} );
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