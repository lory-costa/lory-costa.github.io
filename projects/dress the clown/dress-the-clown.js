// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let dressHeads = document.getElementById("head");
let headIndex = 0;

let dressBody = document.getElementById("body");
let bodyIndex = 0;

let dressShoes = document.getElementById("shoes");
let shoesIndex = 0;

let allClownParts = document.getElementsByClassName("dress-an-image");
let clothingIndex = 0;

function selectBodyPart(direction) {
  if (direction === "up" && clothingIndex > 0) {
    clothingIndex--;
  }
  if (direction === "down" && clothingIndex < 2) {
    clothingIndex++;
  }
}

function changeClothes(direction) {
  switch (clothingIndex) {
    case 0: // head
      if (direction === "right" && headIndex <= 4) {
        headIndex++;
      }
      if (direction === "left" && headIndex >= 1) {
        headIndex--;
      }
      dressHeads.src = "./images/head" + headIndex + ".png";
      break;
    case 1: // body
      if (direction === "right" && bodyIndex <= 4) {
        bodyIndex++;
      }
      if (direction === "left" && bodyIndex >= 1) {
        bodyIndex--;
      }
      dressBody.src = "./images/body" + bodyIndex + ".png";
      break;
    case 2: // shoes
      if (direction === "right" && shoesIndex <= 4) {
        shoesIndex++;
      }
      if (direction === "left" && shoesIndex >= 1) {
        shoesIndex--;
      }
      dressShoes.src = "./images/shoes" + shoesIndex + ".png";
      break;
    default:
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    changeClothes("right");
  }
  if (e.code === "ArrowLeft") {
    changeClothes("left");
  }
  if (e.code === "ArrowUp") {
    selectBodyPart("up");
  }
  if (e.code === "ArrowDown") {
    selectBodyPart("down");
  }
});
