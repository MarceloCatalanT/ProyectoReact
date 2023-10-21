import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWk1-DA1ILACk_jrMoixQjHKR5ERVY04",
  authDomain: "proyecto-react-af56c.firebaseapp.com",
  projectId: "proyecto-react-af56c",
  storageBucket: "proyecto-react-af56c.appspot.com",
  messagingSenderId: "1087356299975",
  appId: "1:1087356299975:web:552844a61b69db5bee6ce2"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
