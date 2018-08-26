import {
  UPDATE_NAME,
  ADD_DINNER,
  REMOVE_DINNER,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "../actions/user";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.text
      };

    case ADD_DINNER:
      return {
        ...state,
        dinners: [...state.dinners, { id: action.dinner, dates: [action.date] }]
        // todo: combine dinners instead of just adding a new one
      };

    case REMOVE_DINNER:
      return {
        ...state.user,
        dinners: state.dinners.filter(d => d !== action.dinner)
      };
    case ADD_FAVORITE:
      if (state.favorites.map(e => e.id).includes(action.dinner)) {
        return state;
      }

      return {
        ...state,
        favorites: [
          ...state.favorites,
          { id: action.dinner, favorited_date: action.date }
        ]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(d => d.id !== action.dinner)
      };

    default:
      return state;
  }
}
