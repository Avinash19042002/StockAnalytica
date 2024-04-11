import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBvgBIFX_uv_CwfL_LvfsFN_isXAUehVzc",
    authDomain: "stockanalytica-8ea8d.firebaseapp.com",
    projectId: "stockanalytica-8ea8d",
    storageBucket: "stockanalytica-8ea8d.appspot.com",
    messagingSenderId: "1059825004111",
    appId: "1:1059825004111:web:e3f83a887e9163148bc43a",
    measurementId: "G-NB2H70WKHC"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
}

export function auth(email, pw) {
    console.log("hello");
    let username = localStorage.getItem("user");
    return firebaseAuth()
        .createUserWithEmailAndPassword(email, pw)
        .then(function(newUser) {
            db.collection("users")
                .doc(newUser.user.uid)
                .set({
                    email,
                    username,
                    funds: "100000",
                    currentfunds: "100000",
                    positions: "0",
                    admin: false,
                    watchlist: [],
                })
                .catch(function(error) {
                    console.error("Error writing document: ", error);
                });
            return firebase.auth().currentUser.updateProfile({
                displayName: username,
            });
        });
}

export function logout() {
    return firebaseAuth().signOut();
}

export function login(email, pw) {
    return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email);
}