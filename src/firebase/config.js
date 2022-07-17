import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4m3Tb266ReusnGKAnKrcTRNle6S602SU",
    authDomain: "netflix-clone-61df7.firebaseapp.com",
    projectId: "netflix-clone-61df7",
    storageBucket: "netflix-clone-61df7.appspot.com",
    messagingSenderId: "930994341837",
    appId: "1:930994341837:web:6ccc70d901b00c247fa684",
    measurementId: "G-RDNSQ9S2YQ"
}

const Firebase = firebase.initializeApp(firebaseConfig)


export { Firebase }