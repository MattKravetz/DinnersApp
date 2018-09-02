import { database } from "../config/firebase";
export const UPDATE_INGREDIENT_NAME = "UPDATE_INGREDIENT_NAME";
export const TOGGLE_BOUGHT = "TOGGLE_BOUGHT";
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export function updateIngredientName(id, text) {
  const dbPath = { ["ingredients/" + id + "/name"]: text };
  database.ref().update(dbPath);
  return { type: UPDATE_INGREDIENT_NAME, id, text };
}

export function toggleBought(id) {
  //const dbPath = {["ingredients/" + id + "/bought"]: }
  //database.ref().update(dbPath)
  return { type: TOGGLE_BOUGHT, id };
}

export function addIngredient(uuid) {
  database.ref("ingredients/" + uuid).set({
    id: uuid,
    name: "",
    bought_dates: [],
    bought: false,
    unitName: ""
  });
  return { type: ADD_INGREDIENT, uuid };
}
