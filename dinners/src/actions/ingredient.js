import { database } from "../config/firebase";

export const UPDATE_INGREDIENT_NAME = "UPDATE_INGREDIENT_NAME";
export const TOGGLE_BOUGHT = "TOGGLE_BOUGHT";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const UPDATE_UNIT_NAME = "UPDATE_UNIT_NAME";

export function updateIngredientName(id, text) {
  const dbPath = { ["ingredients/" + id + "/name"]: text };
  database.ref().update(dbPath);
  return { type: UPDATE_INGREDIENT_NAME, id, text };
}

export function toggleBought(id) {
  const boughtPath = "ingredients/" + id + "/bought";
  database
    .ref(boughtPath)
    .once("value")
    .then(snapshot => {
      database.ref().update({ [boughtPath]: !snapshot.val() });
    });
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

export function updateUnitName(id, name) {
  const unitNamePath = { ["ingredients/" + id + "/unitName"]: name };
  database.ref().update(unitNamePath);
  return { type: UPDATE_UNIT_NAME, id, name };
}
