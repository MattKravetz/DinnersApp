import * as firebase from "firebase";

import { FirebaseConfig } from "./keys";

firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();

// todo: use thunk, make this an action creator, 
// dispatch in index.js before initializing the provier.  
// Remove the inital state param from store instantiation
export const getInitialState = () => {    
    const state = database
    .ref("/")
    .once("value")
    .then(snapShot => snapShot.val());
  return state;
};
