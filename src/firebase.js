// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD1c8dp5Tbllh9zVKrhVJ5q95Ycb2bNeVI",
    authDomain: "whatsapp-clone-e2b3d.firebaseapp.com",
    projectId: "whatsapp-clone-e2b3d",
    storageBucket: "whatsapp-clone-e2b3d.appspot.com",
    messagingSenderId: "209402975250",
    appId: "1:209402975250:web:1231d9699761216dfa74cb",
    measurementId: "G-4KBQD6LLFS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;