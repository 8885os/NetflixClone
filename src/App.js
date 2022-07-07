import Logged from "./components/Logged";
import { Routes, Route } from "react-router-dom";
import Notlogged from "./components/Notlogged";
import Signupform from "./components/Signupform";
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyD4m3Tb266ReusnGKAnKrcTRNle6S602SU",
    authDomain: "netflix-clone-61df7.firebaseapp.com",
    projectId: "netflix-clone-61df7",
    storageBucket: "netflix-clone-61df7.appspot.com",
    messagingSenderId: "930994341837",
    appId: "1:930994341837:web:6ccc70d901b00c247fa684",
    measurementId: "G-RDNSQ9S2YQ"
})

const auth = firebase.auth();
const firestore = firebase.firestore()

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notlogged />} />
                <Route path="/home" element={<Logged />} />
                <Route path="/signup" element={<Signupform />} />
            </Routes>
        </div>
    );
}

export default App;
