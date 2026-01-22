import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVab5zDqFERZ52FF-HFOPOw3MY7U2eauA",
    authDomain: "motoshop-c7335.firebaseapp.com",
    projectId: "motoshop-c7335",
    storageBucket: "motoshop-c7335.firebasestorage.app",
    messagingSenderId: "1045277472543",
    appId: "1:1045277472543:web:7094e0e5a1f52ec715222a",
    measurementId: "G-MXEDY1P9LQ"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos para usarla en tus componentes
export const db = getFirestore(app);