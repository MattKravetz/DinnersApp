import {
  ADD_DINNER,
  UPDATE_DINNER_NAME,
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  TOGGLE_COMPLETED
} from "../actions/dinner";

import uuid from '../utils/uuid'

export default function dinnersReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_DINNER_NAME:
      return state.map(d => {
        if (d.id === action.id) {
          return {
            ...d,
            name: action.text
          };
        } else {
          return d;
        }
      });
    case ADD_DINNER:
      return [
        ...state,
        {
          id: uuid(),
          name: action.name,
          ingredients: []
        }
      ]

    case ADD_INGREDIENT:
      return state;
    case REMOVE_INGREDIENT:
      return state;
    case TOGGLE_COMPLETED:
      return state;

    default:
      return state;
  }
}
