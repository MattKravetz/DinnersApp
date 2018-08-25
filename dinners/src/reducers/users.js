import initialState from "./initial_state";
import { UPDATE_NAME } from "../actions/users";
import { ADD_DINNER, REMOVE_DINNER, ADD_FAVORITE } from "../actions/user";

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.text
        }
      };
    case ADD_DINNER:
      return {
        ...state,
        user: {
          ...state.user,
          dinners: state.user.dinners.concat(action.dinner)
        }
      };
    case REMOVE_DINNER:
      return {
        ...state,
        user: {
          ...state.user,
          dinners: state.user.dinners.map(d => d !== action.dinner)
        }
      };
    case ADD_FAVORITE:
      return {
          ...state,
          user: {
              ...state.user,
              favorites: state.user.favorites.concat(action.dinner)
          }
      };
    default:
      return state;
  }
}
