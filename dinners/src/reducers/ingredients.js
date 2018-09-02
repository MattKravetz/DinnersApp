import {
  UPDATE_INGREDIENT_NAME,
  TOGGLE_BOUGHT,
  ADD_INGREDIENT,
  UPDATE_UNIT_NAME
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
      return state.map(ing => {
        if (ing.id === action.id) {
          return {
            ...ing,
            bought: !ing.bought
          };
        } else {
          return ing;
        }
      });

    case ADD_INGREDIENT:
      return [
        ...state,
        {
          id: action.uuid,
          name: "",
          quantity: ""
        }
      ];
    case UPDATE_UNIT_NAME:
      return state.map(ing => {
        if (ing.id === action.id) {
          return { ...ing, unitName: action.name };
        } else {
          return ing;
        }
      });
    default:
      return state;
  }
}
