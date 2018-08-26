export const ADD_DINNER = "ADD_DINNER"
export const UPDATE_DINNER_NAME = "UPDATE_DINNER_NAME"
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"

export function addDinner(name="New Dinner"){
    return {type: ADD_DINNER, name}
}

export function updateDinnerName(id, text){
    return {type: UPDATE_DINNER_NAME, id, text}
}

export function addIngredient(id, ingredient){
    return {type: ADD_INGREDIENT, id, ingredient}
}

export function removeIngredient(id, ingredient){
    return {type: REMOVE_INGREDIENT, id, ingredient}
}

export function toggleCompleted(id, new_state){
    return {type: TOGGLE_COMPLETED, id, new_state}
}
