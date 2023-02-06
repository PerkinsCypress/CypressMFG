import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence, signInWithRedirect, inMemoryPersistence, onAuthStateChanged,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} 
from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getDatabase, onValue, ref, get, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

initializeApp({
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


// function writeUserData(users, email) {
//     const db = getDatabase();
//     const reference = ref(db, 'users/' + users);
//     set(reference, {
//         email: email,
//     });
// }
// writeUserData("Brad", "brad@email.com");

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

// //admin_logout
var isAdmin = sessionStorage.getItem('admin');
console.log(document.querySelector('#admin_btn').value)
if(isAdmin){
    showAdminLogout()
    // document.querySelector('#admin_btn').value = 'Logout';
} else{
    hideAdminLogout()
    // document.querySelector('#admin_btn').value = 'Login';
}

var isAdmin = sessionStorage.getItem('admin');
//Login Admin/ Logout
$('.admin_btn').on("click", adminLogin);
function adminLogin(){
    if(document.querySelector('#admin_btn').value == 'Logout'){
        adminLogout()  
    }else{
        var email = document.querySelector('.admin_email_tv').value;
        var pass = document.querySelector('.admin_pass_tv').value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('pass', pass);
            adminCheck(email);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
}

//Logout Admin
function adminLogout(){
    const confirm = window.confirm("Are you sure you want to Logout?");
    if(confirm){
        sessionStorage.setItem('admin', null);
        sessionStorage.setItem('adminName', null);
        sessionStorage.setItem('email', null);
        sessionStorage.setItem('img', null);
        location.reload();
        document.querySelector('#admin_btn').value = 'Login';
        console.log(isAdmin + " : adminLogout()");
       
    }else{
        // window.location.href = "index.html";
        // document.querySelector('#admin_btn').value = 'Logout';
    }
}

//Sign in automatically
if(sessionStorage.getItem('email') != null){
    var email = sessionStorage.getItem('email');
    var pass = sessionStorage.getItem('pass');
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        adminCheck(email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
//Check if user is admin / Switch to logout button/ hide forms
function adminCheck(adminEmail){
    const adminRef = ref(db, 'admins/');
    onValue(adminRef, function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var cd = childSnapshot.val();
        var childKey = childSnapshot.key;
        if(adminEmail == cd.email){
            sessionStorage.setItem('admin', true);
            sessionStorage.setItem('adminName', childKey);
            sessionStorage.setItem('email', cd.email);
            sessionStorage.setItem('img', cd.img);

            document.querySelector('#admin_btn').value = 'Logout';
            // var invisDiv = document.getElementsByClassName("admin_login");
            // for(var i = 0; i < invisDiv.length; i++){
            //     invisDiv[i].style.visibility = "hidden"; 
            //     invisDiv[i].style.display = "none"; 
            // }
            // $("#admin_name").text(cd.email)
        }
    });
    }, function (error) {
    console.log("Error: " + error.code);
    });
}

function showAdminLogout(){
    // $( ".admin_logout" ).show();
    document.querySelector('#admin_btn').value = 'Logout';
}

function hideAdminLogout(){
    // $(".admin_logout").hide();
    document.querySelector('#admin_btn').value = 'Login';
}



