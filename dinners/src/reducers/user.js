import { UPDATE_NAME, ADD_DINNER, REMOVE_DINNER, ADD_FAVORITE } from "../actions/user";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
          ...state,
          name: action.text
        }
      
    case ADD_DINNER:
      return {
          ...state,
          dinners: state.dinners.concat(action.dinner)
        }
      
    case REMOVE_DINNER:
      return {
          ...state.user,
          dinners: state.dinners.map(d => d !== action.dinner)
        }
    case ADD_FAVORITE:
      return {
              ...state,
              favorites: state.favorites.concat(action.dinner)
          }
    default:
      return state;
  }
}
