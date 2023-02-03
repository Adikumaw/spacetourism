"use strict";

// DESTINATION HTML OBJECT LINKS------
var planetImage = document.getElementsByClassName("planet-image")[0];
if (planetImage === undefined) {
  // EXEPTION...
  console.log("cant find");
} else {
  // ADDING BORDER BOTTOM TO THE CURRENT NAVIGATION TAB----------
  var navName = document.getElementsByClassName("nav-wrapper")[0].children;
  navName[1].children[0].className = "nav-border";
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
