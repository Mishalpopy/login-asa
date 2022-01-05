// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCYlxYkgc0ZPr6u9bxzkN6VzHi8LNvPTmA',
    authDomain: 'olibsio.firebaseapp.com',
    databaseURL: 'https://olibsio.firebaseio.com',
    projectId: 'olibsio',
    storageBucket: 'olibsio.appspot.com',
    messagingSenderId: '176660994968',
    appId: '1:176660994968:web:4da91d36c69b74e60aa9ed',
    measurementId: 'G-E43J0M01M0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login() {


}

const signIn = () => {

    var userEmail = document.getElementById("email_field").value;
    var userPasswrd = document.getElementById("password_field").value;
    console.log(userEmail + userPasswrd);
    return signInWithEmailAndPassword(auth, userEmail, userPasswrd).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
    });
};

let isAuthenticated = false;

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User logged in', user.uid);
        isAuthenticated = true;
    }

    console.log('User not logged in');
});