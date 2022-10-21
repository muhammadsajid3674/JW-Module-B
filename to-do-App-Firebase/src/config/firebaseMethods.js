import app from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDoc, addDoc } from 'firebase/firestore';
import { getDatabase, onValue, ref, set } from "firebase/database";


const auth = getAuth(app)
const dataBase = getDatabase(app)

export function handleSignup(obj) {
    let { userName, email, password, contact } = obj;
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                // User Registered
                let user = userCredentials
                console.log(user);
                let reference = ref(dataBase, `user/${user.user.uid}`);
                set(reference, obj)
                .then(() => {
                    resolve("user is registered")
                }).catch((error) => {
                    reject(error)
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    });
};

export function handleLogIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

// export function handleGetDatabase() {
//     let reference = ref(dataBase, `user/`);
//     onValue(reference, (snapshot) => {
//         const data = snapshot.val()
//         console.log(data);
//     })
// };


// const collectionRef = collection(dataBase, 'user');
// export function sendDataFirestore(name, email, password) {
//     return addDoc(collectionRef, {
//         name: name,
//         email: email,
//     })
// }

export { dataBase }