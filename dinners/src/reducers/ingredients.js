import {
  UPDATE_INGREDIENT_NAME,
  TOGGLE_BOUGHT
} from "../actions/ingredient";

export default function ingredientsReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_INGREDIENT_NAME:
      return state.map(ing => {
        if (ing.id === action.id) {
          return {
            ...ing,
            name: action.text
          };
        } else {
          return ing;
        }
      });

    case TOGGLE_BOUGHT:
      return state;

    default:
      return state;
  }
}
