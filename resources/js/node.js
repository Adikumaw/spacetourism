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
                planetName.children[i].className = "sticky-color";
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
            crewMemberImage.innerHTML = `<img src ="${arrDataCrew[i].images.png}" alt="crew_member_image"/>`;
            contentRole.innerText = arrDataCrew[i].role;
            contentHeading.innerText = arrDataCrew[i].name;
            contentBio.innerText = arrDataCrew[i].bio;
          }
        }
      } else if (type === "technology") {
        for (let i = 0; i < arrDataTech.length; i++) {
          if (arrDataTech[i].name === name) {
            contentHeading.innerText = arrDataTech[i].name;
            contentDescription.innerText = arrDataTech[i].description;
            vehicleImage.innerHTML = `<img class="vehicle_port" src="${arrDataTech[i].images.portrait}" alt="vehicle_image">
            <img class="vehicle_land" src="${arrDataTech[i].images.landscape}" alt="vehicle_image">`;
          }
        }
      }
    });
}
