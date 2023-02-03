"use strict";

function data_func(type, name) {
  fetch("./resources/data/data.json")
    .then((res) => res.json())
    .then((data) => {
      // do stuff with the data
      var myData = data;

      var arrDataDest = myData.destinations;
      var arrDataCrew = myData.crew;
      var arrDataTech = myData.technology;

      if (type === "destination") {
        for (let i = 0; i < arrDataDest.length; i++) {
          //  BORDER BOTTOM ADDER TO CURRENT PLANET TAB........
          if (arrDataDest[i].name === name) {
            for (let i = 0; i < planetName.children.length; i++) {
              if (planetName.children[i].innerHTML === name) {
                planetName.children[i].className = "border-bottom";
              } else {
                planetName.children[i].className = "";
              }
            }
            // CONTENT EXTRACTING AND APPLYING......
            planetImage.innerHTML = `<img src="${arrDataDest[i].images.png}" alt="planet">`;

            contentHeading.innerText = arrDataDest[i].name;

            contentdescription.innerText = arrDataDest[i].description;

            contentDistance.children[1].innerText = arrDataDest[i].distance;

            contentTravel.children[1].innerText = arrDataDest[i].travel;
          }
        }
      } else if (type === "crew") {
        for (let i = 0; i < arrDataCrew.length; i++) {
          if (arrDataCrew[i].name === name) {
            console.log(arrDataCrew[i]);
          }
        }
      } else if (type === "technology") {
        for (let i = 0; i < arrDataTech.length; i++) {
          if (arrDataTech[i].name === name) {
            console.log(arrDataTech[i]);
          }
        }
      }

      // for (var i = 0; i < arrDataDest.length; i++) {
      //   console.log(arrDataDest[i].name);
      //   console.log(arrDataDest[i].description);
      //   console.log(arrDataDest[i].distance);
      // }

      // for (var i = 0; i < arrDataTech.length; i++) {
      //   console.log(arrDataTech[i].name);
      //   console.log(arrDataTech[i].images);
      //   console.log(arrDataTech[i].description);
      // }

      // for (var i = 0; i < arrDataCrew.length; i++) {
      //   console.log(arrDataCrew[i].name);
      //   console.log(arrDataCrew[i].role);
      //   console.log(arrDataCrew[i].bio);
      // }
    });
}
