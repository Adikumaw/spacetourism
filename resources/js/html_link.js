"use strict";

// DESTINATION HTML OBJECT LINKS------
var planetImage = document.getElementsByClassName("planet-image")[0];
if (planetImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // ADDING BORDER BOTTOM TO THE CURRENT NAVIGATION TAB----------
  // var navName = document.getElementsByClassName("nav-wrapper")[0].children;
  // navName[1].children[0].className = "nav-border_a";
  // VARIABLE DECLARATIONS FOR ADDING CONTENT TO HTML........
  var contentHeading = document.getElementsByTagName("h1")[0];
  var contentdescription = document.getElementsByClassName(
    "content_description"
  )[0];
  var contentDistance = document.getElementsByClassName(
    "content-detail_distance"
  )[0];
  var contentTravel = document.getElementsByClassName(
    "content-detail_travel"
  )[0];
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
  // dotColor color fix
  var dotColor = document.getElementsByClassName("dot-wrapper")[0].children;
  dotColor[0].className += " sticky-color";

  var contentRole = document.getElementsByClassName("content-main_role")[0];
  var contentHeading = document.getElementsByClassName(
    "content-main_heading"
  )[0];
  var contentBio = document.getElementsByClassName("content-main_bio")[0];

  data_func(`crew`, `Douglas Hurley`);
}
// CREW HTML OBJECT LINKS------
var vehicleImage = document.getElementsByClassName("vehicle")[0];
if (vehicleImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // dotColor color fix
  var countingColor =
    document.getElementsByClassName("content-counting")[0].children;
  countingColor[0].className += " sticky-color";

  var contentHeading = document.getElementsByClassName(
    "content-main_heading"
  )[0];

  var contentDescription = document.getElementsByClassName(
    "content-main_description"
  )[0];

  data_func(`technology`, `Launch vehicle`);
}
