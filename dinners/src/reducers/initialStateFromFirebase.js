import { INIT_FIREASE_STATE_SUCCESS } from "../actions/initialStateFromFirebase";

export default function firebaseReducer(state = {}, action) {
  switch (action.type) {
    case INIT_FIREASE_STATE_SUCCESS:
      return { ...action.state, loading: false };
    default:
      return state;
  }
}
