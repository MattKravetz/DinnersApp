import { database } from "../config/firebase";

export const UPDATE_NAME = "UPDATE_NAME";
export const ADD_DINNER = "ADD_DINNER";
export const REMOVE_DINNER_FROM_USER = "REMOVE_DINNER_FROM_USER";
export const ADD_DINNER_TO_USER = "ADD_DINNER_TO_USER";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function updateName(text) {
  return { type: UPDATE_NAME, text };
}

export function addDinnerToUser(dinner) {
  const date = new Date();
  const today = date.toLocaleDateString();
  database.ref("user/dinners/" + dinner).set({ id: dinner, dates: [today] });
  return { type: ADD_DINNER_TO_USER, dinner, today };
}

export function removeDinnerFromUser(dinner) {
  return { type: REMOVE_DINNER_FROM_USER, dinner };
}

export function addFavorite(dinner, date) {
  return { type: ADD_FAVORITE, dinner, date };
}

export function removeFavorite(dinner) {
  return { type: REMOVE_FAVORITE, dinner };
}
