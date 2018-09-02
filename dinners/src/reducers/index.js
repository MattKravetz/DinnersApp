import { combineReducers } from "redux";
import userReducer from "./user";
import ingredientsReducer from "./ingredients";
import dinnersReducer from "./dinners";
import firebaseReducer from "./initialStateFromFirebase";

const combinedReducers = combineReducers({
  user: userReducer,
  dinners: dinnersReducer,
  ingredients: ingredientsReducer,
  loading: (state = {}) => state
});

const dinnersApp = (state, action) => {
  const intermediateState = combinedReducers(state, action);
  const finalState = firebaseReducer(intermediateState, action);
  return finalState;
};

export default dinnersApp;
