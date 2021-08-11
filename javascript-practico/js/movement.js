const buttonRectangle = document.getElementById("rectangle-button");
const rectangleContent1 = document.getElementById("rectangleContent1");
const rectangleContent2 = document.getElementById("rectangleContent2");

const buttonElypse = document.getElementById("elypse-button");
const elypseContent1 = document.getElementById("elypseContent1");
const elypseContent2 = document.getElementById("elypseContent2");

const buttonPolygon = document.getElementById("polygon-button");
const polygonContent1 = document.getElementById("polygonContent1");
const polygonContent2 = document.getElementById("polygonContent2");

const buttonCube = document.getElementById("cube-button");
const cubeContent1 = document.getElementById("cubeContent1");
const cubeContent2 = document.getElementById("cubeContent2");

const elypse = document.getElementById("elypse");
const polygon = document.getElementById("polygon");
const cube = document.getElementById("cube");

let booleanRectangle = 0;
let booleanElypse = 0;
let booleanPolygon = 0;
let booleanCube = 0;
let onlyOne = 0;

buttonRectangle.addEventListener("click", () => {
  if (onlyOne == 0) {
    if (booleanRectangle == 0) {

      openRectangle();
    }


  } else if (onlyOne == 1 && booleanRectangle == 1) {
    
    closeRectangle();

  } else {
    if (booleanElypse == 1) {

      closeElypse();

      setTimeout(() => {

        openRectangle();
      }, 500);

    } else if (booleanPolygon == 1) {
      closePolygon();

      setTimeout(() => {

        openRectangle();
      }, 500);
    } else if (booleanCube == 1) {

      closeCube();

      setTimeout(() => {

        openRectangle();
      }, 500);

    }
  }
});

buttonElypse.addEventListener("click", () => {
  if (onlyOne == 0) {
    if (booleanElypse == 0) {

      openElypse();
    }

  } else if (onlyOne == 1 && booleanElypse == 1) {

    closeElypse();
  } else {
    if(booleanRectangle == 1){

      closeRectangle();

      setTimeout(() => {

        openElypse();
      }, 500);
    } else if (booleanPolygon == 1) {

      closePolygon();

      setTimeout(() => {

        openElypse();
      }, 500);
    } else if (booleanCube == 1) {

       closeCube();

       setTimeout(() => {

        openElypse();
      }, 500);
    }
  }
});

buttonPolygon.addEventListener("click", () => {
  if (onlyOne == 0) {
    if (booleanPolygon == 0) {

      openPolygon();
    }

  } else if (onlyOne == 1 && booleanPolygon == 1) {

    closePolygon();
  } else {
    if(booleanRectangle == 1) {

      closeRectangle();

      setTimeout(() => {

        openPolygon();
      }, 500);
    } else if (booleanElypse == 1) {

      closeElypse();

      setTimeout(() => {

        openPolygon();
      }, 500);
    } else if ( booleanCube == 1) {

      closeCube();

      setTimeout(() => {

        openPolygon();
      }, 500);
    }
  }
});

buttonCube.addEventListener("click", () => {
  if (onlyOne == 0) {
    if (booleanCube == 0) {

      openCube();
    }

  } else if (onlyOne == 1 && booleanCube == 1) {

    closeCube();
  } else {
    if(booleanRectangle == 1) {

      closeRectangle();

      setTimeout(() => {

        openCube();
      }, 500);
    } else if (booleanElypse == 1) {

      closeElypse();

      setTimeout(() => {

        openCube();
      }, 500);
    } else if (booleanPolygon == 1) {

      closePolygon();

      setTimeout(() => {

        openCube();
      }, 500);
      
    }
  }
});
