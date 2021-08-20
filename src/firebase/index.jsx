import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAHIBEOFMfi9ie1vlEpGZsTkIAomXIVhmg",
    authDomain: "cantopia-8cc1e.firebaseapp.com",
    projectId: "cantopia-8cc1e",
    storageBucket: "cantopia-8cc1e.appspot.com",
    messagingSenderId: "192443563797",
    appId: "1:192443563797:web:7cb361523a4d3977a7331c"
});

export const getFirestore = () => {
    return firebase.firestore(app);
}

  