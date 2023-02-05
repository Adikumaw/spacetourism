"use strict";

function navigation() {
  var navBar = document.getElementsByClassName("nav-wrapper")[0];
  var btnOpen = document.getElementsByClassName("button__open")[0];
  var btnClose = document.getElementsByClassName("button__close")[0];
  if (navBar.className === "nav-wrapper") {
    navBar.className += " nav-block";
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
  } else {
    navBar.className = "nav-wrapper";
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
  }
}

function subPage(type, name) {
  console.log(`${type} , ${name} .`);
  data_func(type, name);
}
function dotColorFunc(num) {
  for (let i = 0; i < dotColor.length; i++) {
    if (i == num) {
      dotColor[i].className += " sticky-color";
    } else {
      dotColor[i].className = "dot";
    }
  }
}
function countColorFunc(num) {
  for (let i = 0; i < countingColor.length; i++) {
    if (i == num) {
      countingColor[i].className += " sticky-color";
    } else {
      countingColor[i].className = "counting__count";
    }
  }
}
