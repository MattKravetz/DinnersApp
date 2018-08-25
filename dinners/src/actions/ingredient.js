export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_QUANTITY = "UPDATE_QUANTITY"
export const TOGGLE_BOUGHT = "TOGGLE_BOUGHT"

export function updateName(text){
    return {type: UPDATE_NAME, text}
}

export function udpateQuantity(quantity){
    return {type: UPDATE_QUANTITY, quantity}
}

export function toggleBought(new_state){
    return {type: TOGGLE_BOUGHT, new_state}
}