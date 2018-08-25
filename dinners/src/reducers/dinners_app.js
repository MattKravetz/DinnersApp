import { combineReducers } from "redux";
import userReducer from './user'
import ingredientsReducer from './ingredients'
import dinnersReducer from './dinners'

const dinnersApp = combineReducers({
    user: userReducer,
    dinners: dinnersReducer,
    ingredients: ingredientsReducer,

})

export default dinnersApp