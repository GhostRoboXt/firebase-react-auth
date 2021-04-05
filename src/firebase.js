import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBHWUQNLKlPe2CIHqbA4B5XD1t_HlgCbzE",
  authDomain: "auth-development-32715.firebaseapp.com",
  projectId: "auth-development-32715",
  storageBucket: "auth-development-32715.appspot.com",
  messagingSenderId: "386350779372",
  appId: "1:386350779372:web:5ef22d614d8e31d75a8ec9",
});

export const auth = app.auth();
export default app;
