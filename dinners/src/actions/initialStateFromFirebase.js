import { database } from "../config/firebase";

export const INIT_FIREBASE_STATE_START = "INIT_FIREBASE_STATE_START";
export const INIT_FIREASE_STATE_SUCCESS = "INIT_FIREASE_STATE_SUCCESS";
export const INIT_FIREASE_STATE_FAILURE = "INIT_FIREASE_STATE_FAILURE";

export const initFirebaseStateStart = () => {
  return { type: INIT_FIREBASE_STATE_START };
};

export const initFirebaseSuccess = state => {
  return { type: INIT_FIREASE_STATE_SUCCESS, state };
};

export const initFirebaseFailure = error => {
  return { type: INIT_FIREASE_STATE_FAILURE, error };
};

export const getInitialState = () => dispatch => {
  dispatch(initFirebaseStateStart());
  database
    .ref("/")
    .once("value")
    .then(snapShot => {
      dispatch(initFirebaseSuccess(snapShot.val()));
    })
    .catch(e => dispatch(initFirebaseFailure(e)));
};
