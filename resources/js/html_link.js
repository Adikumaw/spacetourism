"use strict";

// DESTINATION HTML OBJECT LINKS------
var planetImage = document.getElementsByClassName("planet-image")[0];
if (planetImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // ADDING BORDER BOTTOM TO THE CURRENT NAVIGATION TAB----------
  var navName = document.getElementsByClassName("nav-wrapper")[0].children;
  navName[1].children[0].className = "nav-border_a";
  // VARIABLE DECLARATIONS FOR ADDING CONTENT TO HTML........
  var contentHeading = document.getElementsByTagName("h1")[0];
  var contentdescription = document.getElementsByClassName(
    "content__description"
  )[0];
  var contentDistance = document.getElementsByClassName("content__distance")[0];
  var contentTravel = document.getElementsByClassName("content__travel")[0];
  // CONTENT LI ITEMS VARIABLE FOR BORDER BOTTOM....
  var planetName = document.getElementsByClassName("content")[0].children[0];
  // CALLING resources/js/node.js FOR DATA EXTRACTION....
  data_func(`destination`, `Moon`);
}

// CREW HTML OBJECT LINKS------
var crewMemberImage = document.getElementsByClassName("crew-member")[0];
if (crewMemberImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // navigation tag color fix
  var navName = document.getElementsByClassName("nav-wrapper")[0].children;
  navName[2].children[0].className = "nav-border_a";
  // dotColor color fix
  var dotColor = document.getElementsByClassName("dot-wrapper")[0].children;
  dotColor[0].className += " sticky-color";

  var contentRole = document.getElementsByClassName("role")[0];
  var contentHeading =
    document.getElementsByClassName("content")[0].children[2];
  var contentBio = document.getElementsByClassName("content__bio")[0];

  data_func(`crew`, `Douglas Hurley`);
}
// CREW HTML OBJECT LINKS------
var vehicleImage = document.getElementsByClassName("content-vehicle")[0];
if (vehicleImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // navigation tag color fix
  var navName = document.getElementsByClassName("nav-wrapper")[0].children;
  navName[3].children[0].className = "nav-border_a";
  // dotColor color fix
  var countingColor =
    document.getElementsByClassName("content-counting")[0].children;
  countingColor[0].className += " sticky-color";

  var contentName =
    document.getElementsByClassName("content")[0].children[1].children[1];

  var contentDescription = document.getElementsByClassName(
    "content-description"
  )[0];

  data_func(`technology`, `Launch vehicle`);
}
