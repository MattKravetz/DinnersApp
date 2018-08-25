import { combineReducers } from "redux";
import userReducer from './user'

const dinnersApp = combineReducers({
    user: userReducer
})

export default dinnersApp