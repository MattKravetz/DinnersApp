import { INIT_FIREASE_STATE_SUCCESS } from "../actions/initialStateFromFirebase";

export default function firebaseReducer(state = {}, action) {
  switch (action.type) {
    case INIT_FIREASE_STATE_SUCCESS:
      return {
        ...action.state,
        user: {
          ...action.state.user,
          dinners: Object.values(action.state.user.dinners),
          favorites: Object.values(action.state.user.favorites)
        },
        dinners: Object.values(action.state.dinners).map(d => {
          return {
            ...d,
            ingredients: Object.values(d.ingredients) || []
          };
        }),
        ingredients: Object.values(action.state.ingredients),
        loading: false
      };
    default:
      return state;
  }
}
