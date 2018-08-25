export const UPDATE_NAME = "UPDATE_NAME"
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT"
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const TOGGLE_FAVORITED = "TOGGLE_FAVORITED"

export function updateName(text){
    return {type: UPDATE_NAME, text}
}

export function addIngredient(ingredient){
    return {type: ADD_INGREDIENT, ingredient}
}

export function removeIngredient(ingredient){
    return {type: REMOVE_INGREDIENT, ingredient}
}

export function toggleCompleted(new_state){
    return {type: TOGGLE_COMPLETED, new_state}
}

export function toggleFavorited(new_state){
    return {type: TOGGLE_FAVORITED, new_state}
}