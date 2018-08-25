export const UPDATE_NAME = "UPDATE_NAME"
export const ADD_DINNER = "ADD_DINNER"
export const REMOVE_DINNER = "REMOVE_DINNER"
export const ADD_FAVORITE = "ADD_FAVORITES"

export function updateName(text) {
    return {type: UPDATE_NAME, text}
}

export function addDinner(dinner){
    return {type: ADD_DINNER, dinner}
}

export function removeDinner(dinner){
    return {type: REMOVE_DINNER, dinner}
}

export function addFavorite(dinner){
    return {type: ADD_FAVORITE, dinner}
}