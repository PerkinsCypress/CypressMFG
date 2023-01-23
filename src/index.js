import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getDatabase, onValue, ref, get, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDTzAj3-59m-SkvQImmo3zm94tqTs08G4A",
    authDomain: "cypressmfg-2f8d1.firebaseapp.com",
    projectId: "cypressmfg-2f8d1",
    storageBucket: "cypressmfg-2f8d1.appspot.com",
    messagingSenderId: "802843874729",
    dataBaseURL: "https://cypressmfg-2f8d1-default-rtdb.firebaseio.com/",
    appId: "1:802843874729:web:93ec5eaa1345cd404ca0b8",
    measurementId: "G-EE3HJMY6V1"
});

function writePBISData(date, student, monAcedemic, monBehavior, tuesAcedemic, tuesBehavior,
    wedAcedemic, wedBehavior, thursAcedemic, thursBehavior, friAcedemic, friBehavior, totalAcedemic, totalBehavior) {
    const db = getDatabase();
    const reference = ref(db, 'pbis/' + date + "/" + student);
    set(reference, {
        monAcedemic: monAcedemic,
        monBehavior: monBehavior,
        tuesAcedemic: tuesAcedemic,
        tuesBehavior: tuesBehavior,
        wedAcedemic: wedAcedemic,
        wedBehavior: wedBehavior,
        thursAcedemic: thursAcedemic,
        thursBehavior: thursBehavior,
        friAcedemic: friAcedemic,
        friBehavior: friBehavior,
        totalAcedemic: totalAcedemic,
        totalBehavior: totalBehavior,
    });
}

let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
const dt = parseInt(cMonth + "1" + cDay + "" + cYear);
writePBISData(dt, "boomer", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
//const userRef = ref(db, 'users/')
// onValue(userRef, (snapshot) =>{
//     const data = snapshot.val();
//     console.log(data);
// });


const pbisRef = ref(db, 'pbis/')
onValue(pbisRef, function(snapshot) {
    studentsArray = snapshot.val();
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});



 var studentsArray = [["Brad","Perkins", 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ["Milo","Perkins", 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
                table = document.getElementById("pbis_table");
       


for(var i = 0; i < studentsArray.length; i++)
{
    // create a new row
    var newRow = table.insertRow(table.length);
    for(var j = 0; j < studentsArray[i].length; j++)
    {
        // create a new cell
        var cell = newRow.insertCell(j);
        
        // add value to the cell
        cell.innerHTML = studentsArray[i][j];
    }
}




// const auth = getAuth(firebaseApp);
// onAuthStateChanged(auth, user => {
    // console.log(user.size)
    // if(user != null){
    //     console.log("User In");
    // } else {
    //     console.log("NO User");
    // }
// }); 




// let data = ['Ram', 'Shyam', 'Sita', 'Gita' ];
// let list = document.getElementById("myList");
// data.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// })


