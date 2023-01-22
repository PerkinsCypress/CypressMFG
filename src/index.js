import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getDatabase, onChildChanged, onValue, ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

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



function writePBISData(date, student, acedemic, behavior, other) {
    const db = getDatabase();
    const reference = ref(db, 'pbis/' + date + "/" + student);
    set(reference, {
        acedemic: acedemic,
        behavior: behavior,
        other: other,
    });
}

let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
const dt = parseInt(cMonth + "1" + cDay + "" + cYear);
writePBISData(dt, "boomer", 1, 1, 1);





function writeUserData(users, email, username) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + users);
    set(reference, {
        username: username,
        email: email,
    });
}
writeUserData("Brad2", "boomer", "brad@email.com");



const db = getDatabase();
const userRef = ref(db, 'users/')
onValue(userRef, (snapshot) =>{
    const data = snapshot.val();
    // console.log(data);
});

var studentsArray = [];

const pbisRef = ref(db, "pbis/");
onValue(pbisRef, (snapshot) =>{
    const data = snapshot.val();
    
    //parse date into array
    studentsArray = Object.values(snapshot.val()).map(function(obj) {
        return obj.data;
      });

      console.log(data)

    

});





     

// var studentsArray = [["Brad","Perkins", 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//                 ],
//                 table = document.getElementById("pbis_table");
       
const table = document.getElementById("pbis_table");

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




const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
    // console.log(user.size)
    // if(user != null){
    //     console.log("User In");
    // } else {
    //     console.log("NO User");
    // }
}); 




// let data = ['Ram', 'Shyam', 'Sita', 'Gita' ];
// let list = document.getElementById("myList");
// data.forEach((item)=>{
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// })


