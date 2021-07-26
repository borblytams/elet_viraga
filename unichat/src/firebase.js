import firebase from 'firebase/app';
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDlaj1BzkbR1A7zpcov5huHWx9IVvQkqe8",
  authDomain: "chat-engine-7ef76.firebaseapp.com",
  projectId: "chat-engine-7ef76",
  storageBucket: "chat-engine-7ef76.appspot.com",
  messagingSenderId: "514926250966",
  appId: "1:514926250966:web:d5b53984e0cdac68aa3277",
  measurementId: "G-BMGJW1QZC0"
}).auth();