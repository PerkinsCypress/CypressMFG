/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      console.log(x.className)
    } else {
      x.className = "topnav";
      console.log(x.className)
    }
  }