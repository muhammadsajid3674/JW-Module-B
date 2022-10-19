import app, { dataBase } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDoc, addDoc } from 'firebase/firestore';


const auth = getAuth()
export function handleSignup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
};

export function handleLogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
} 

const collectionRef = collection(dataBase, 'user');
export function sendDataFirestore(name, email, password) {
    return addDoc(collectionRef, {
        name: name,
        email: email,
    })
}