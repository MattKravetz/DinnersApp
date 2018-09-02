import firebase from "firebase/app";
import 'firebase/database'

import { FirebaseConfig } from "./keys";

firebase.initializeApp(FirebaseConfig);

export const database = firebase.database();
