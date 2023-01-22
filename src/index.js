import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDTzAj3-59m-SkvQImmo3zm94tqTs08G4A",
    authDomain: "cypressmfg-2f8d1.firebaseapp.com",
    projectId: "cypressmfg-2f8d1",
    storageBucket: "cypressmfg-2f8d1.appspot.com",
    messagingSenderId: "802843874729",
    appId: "1:802843874729:web:93ec5eaa1345cd404ca0b8",
    measurementId: "G-EE3HJMY6V1"
});

const auth = getAuth(firebaseApp);

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase(app);
    const reference = ref(db, 'goals/' + userId);

    set(reference, {
        email: email,
        username: name,
    });

}


  

onAuthStateChanged(auth, user => {
    console.log(auth)
    if(user != null){
        console.log("User In");
    } else {
        console.log("NO User");
    }
}); 

