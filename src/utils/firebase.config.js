// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-d9310.firebaseapp.com",
  projectId: "react-firebase-d9310",
  storageBucket: "react-firebase-d9310.appspot.com",
  messagingSenderId: "1061726858347",
  appId: "1:1061726858347:web:3cc1532fb1d9b2a893d52e",
})

export const auth = app.auth()
export default app
