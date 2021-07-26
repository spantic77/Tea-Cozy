/* Mobile nav */

function openNav() {
  var x = document.getElementById("myTopnav");
  var ico = document.getElementById("mobNavIco");
  var mainNav = document.getElementById("mainNav");
  
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  if (mainNav.className === "main-nav") {
    mainNav.className += " responsive"
  } else {
    mainNav.className = "main-nav"
  }

  if (ico.classList.contains("ion-navicon-round")) {
    ico.className = "ion-close-round"
  } else {
    ico.className = "ion-navicon-round"
  }
}