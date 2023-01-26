import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, signInWithRedirect, inMemoryPersistence, onAuthStateChanged,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} 
from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getDatabase, onValue, ref, get, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

var firebaseApp = initializeApp({
    apiKey: "AIzaSyDTzAj3-59m-SkvQImmo3zm94tqTs08G4A",
    authDomain: "cypressmfg-2f8d1.firebaseapp.com",
    projectId: "cypressmfg-2f8d1",
    storageBucket: "cypressmfg-2f8d1.appspot.com",
    messagingSenderId: "802843874729",
    dataBaseURL: "https://cypressmfg-2f8d1-default-rtdb.firebaseio.com/",
    appId: "1:802843874729:web:93ec5eaa1345cd404ca0b8",
    measurementId: "G-EE3HJMY6V1"
});

//WRITE PBIS DATA
function writePBISData(date, firstName, lastName, monAcademic, monBehavior, tuesAcademic, tuesBehavior,
    wedAcademic, wedBehavior, thursAcademic, thursBehavior, friAcademic, friBehavior, totalAcademic, totalBehavior) {
    const db = getDatabase();
    const reference = ref(db, 'pbis/' + date + "/" + firstName + " " + lastName);
    set(reference, {
        firstName: firstName,
        lastName: lastName,
        monAcademic: monAcademic,
        monBehavior: monBehavior,
        tuesAcademic: tuesAcademic,
        tuesBehavior: tuesBehavior,
        wedAcademic: wedAcademic,
        wedBehavior: wedBehavior,
        thursAcademic: thursAcademic,
        thursBehavior: thursBehavior,
        friAcademic: friAcademic,
        friBehavior: friBehavior,
        totalAcademic: totalAcademic,
        totalBehavior: totalBehavior,
    });
}
const dt = getNumDate();
writePBISData(1232023, "Zy", "Currie", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Clayton", "Thompson", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Cameron ", "Hager", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Anthony", "Greene", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Jay'quan", "Nall", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Gavin ", "Bekeleski", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Kameron", "Crespo", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "AJ", "Sampsel", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Anthony", "Stollings", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Jyden", "Diehl", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Zane", "Wynn", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "David ", "Salser", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Jazmire", "Irby", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
writePBISData(1232023, "Jah'lea", "Yelton", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);


// function writeUserData(users, email, username) {
//     const db = getDatabase();
//     const reference = ref(db, 'users/' + users);
//     set(reference, {
//         username: username,
//         email: email,
//     });
// }
// writeUserData("Brad2", "boomer", "brad@email.com");

const db = getDatabase();
const userRef = ref(db, 'users/')
onValue(userRef, (snapshot) =>{
    const data = snapshot.val();
    //c onsole.log(data);
});


const pbisRef = ref(db, 'pbis/' + 1232023);
onValue(pbisRef, function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var cd = childSnapshot.val();
        studentObj.push([cd.firstName, cd.lastName, cd.monAcademic, cd.monBehavior, cd.tuesAcademic, cd.tuesBehavior, cd.wedAcademic, cd.wedBehavior, 
            cd.thursAcademic, cd.thursBehavior, cd.friAcademic, cd.friBehavior, cd.totalAcademic, cd.totalBehavior]);

    });
    
    var table = document.getElementById("pbis_table");           
    for(var i = 0; i < studentObj.length; i++){
        // create a new row
        var newRow = table.insertRow(table.length);
        for(var j = 0; j < studentObj[i].length; j++){
            // create a new cell
            var cell = newRow.insertCell(j);
            // add value to the cell
            cell.innerHTML = studentObj[i][j];
        }
    }
}, function (error) {
   console.log("Error: " + error.code);

});

var studentObj = [];

function getNumDate() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    const dt = parseInt(cMonth + "" + cDay + "" + cYear);
    return dt;
}


document.querySelector('.admin_btn').addEventListener("click", adminLogin);
function adminLogin(){
    ////var emailValue = document.getElementById("adminEmail").value;
    var email = document.querySelector('.admin_email_tv').value;
    var pass = document.querySelector('.admin_pass_tv').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.uid)
        alert("Welcome Back!");

        window.name = "Bla bla bla";
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}



