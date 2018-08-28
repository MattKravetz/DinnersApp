export const REMOVE_DINNER = "REMOVE_DINNER";
export const ADD_DINNER = "ADD_DINNER";
export const UPDATE_DINNER_NAME = "UPDATE_DINNER_NAME";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_INGREDIENT_QUANTITY = "UPDATE_INGREDIENT_QUANTITY";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const ADD_INGREDIENT_TO_DINNER = "ADD_INGREDIENT_TO_DINNER";

export function addDinner(uuid, name = "New Dinner") {
  return { type: ADD_DINNER, uuid, name };
}

export function removeDinner(uuid) {
  return { type: REMOVE_DINNER, uuid };
}

export function updateDinnerName(id, text) {
  return { type: UPDATE_DINNER_NAME, id, text };
}

export function addIngredientToDinner(id, ingredient_id) {
  return { type: ADD_INGREDIENT_TO_DINNER, id, ingredient_id };
}

export function removeIngredient(id, ingredient_id) {
  return { type: REMOVE_INGREDIENT, id, ingredient_id };
}

export function updateIngredientQuantity(id, ingredient_id, quantity) {
  return { type: UPDATE_INGREDIENT_QUANTITY, id, ingredient_id, quantity };
}

export function toggleCompleted(id, new_state) {
  return { type: TOGGLE_COMPLETED, id, new_state };
}
