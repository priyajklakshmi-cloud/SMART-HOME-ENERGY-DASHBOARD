// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    push,
    get,
    update,
    remove,
    onValue
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDD4GRVgv0ffyAzY-Y2SvYbk_uZ31TUg30",
    authDomain: "smart-home-energy-dashbo-1aae4.firebaseapp.com",
    projectId: "smart-home-energy-dashbo-1aae4",
    storageBucket: "smart-home-energy-dashbo-1aae4.firebasestorage.app",
    messagingSenderId: "630510517668",
    appId: "1:630510517668:web:d31d156841577cc8a21531",
    measurementId: "G-H4T911T56W"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export {
    app,
    auth,
    database,

    ref,
    set,
    push,
    get,
    update,
    remove,
    onValue,

    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};