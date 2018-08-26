export const UPDATE_INGREDIENT_NAME = "UPDATE_INGREDIENT_NAME"
export const UPDATE_QUANTITY = "UPDATE_QUANTITY"
export const TOGGLE_BOUGHT = "TOGGLE_BOUGHT"
export const ADD_INGREDIENT = "ADD_INGREDIENT"

export function updateIngredientName(id, text){
    return {type: UPDATE_INGREDIENT_NAME, id, text}
}

export function udpateQuantity(quantity){
    return {type: UPDATE_QUANTITY, quantity}
}

export function toggleBought(new_state){
    return {type: TOGGLE_BOUGHT, new_state}
}

export function addIngredient(uuid){
    return { type: ADD_INGREDIENT, uuid }
}
