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
      rectangleContent1.classList.toggle("go-down1-rectangle");

      elypse.classList.toggle("go-rest-down");
      cube.classList.toggle("go-rest-down");
      polygon.classList.toggle("go-rest-down");

      setTimeout(() => {
        rectangleContent2.classList.toggle("go-down2-rectangle");
      }, 500);

      booleanRectangle = 1;
      onlyOne = 1;
    }

    buttonRectangle.classList.toggle("rotateButton");

  } else if (onlyOne == 1 && booleanRectangle == 1) {

    const valueLado = document.getElementById('rectangle-lado').value = undefined;
    const valueBase = document.getElementById('rectangle-base').value = undefined;
    const resultPerimeter = document.getElementById('rectangle-result-perimeter').innerText = '';
    const resultArea = document.getElementById('rectangle-result-area').innerText = '';

    rectangleContent2.classList.toggle("go-down2-rectangle");

      setTimeout(() => {
        rectangleContent1.classList.toggle("go-down1-rectangle");

        elypse.classList.toggle("go-rest-down");
        cube.classList.toggle("go-rest-down");
        polygon.classList.toggle("go-rest-down");
      }, 500);

      booleanRectangle = 0;
      onlyOne = 0;
      buttonRectangle.classList.toggle("rotateButton");

  } else {
      const title = document.getElementById('rectangle-title');
      title.innerText = 'Cierre la otra calculadora';
      title.classList.toggle('color-red');

      setTimeout(() => {
        title.innerText = 'Calculadora de Rectángulos';
        title.classList.toggle('color-red');

      }, 1500);
  }

 
});

buttonElypse.addEventListener("click", () => {
    if(onlyOne == 0){
        if (booleanElypse == 0) {
            elypseContent1.classList.toggle("go-down1-elypse");
        
            cube.classList.toggle("go-rest-down");
            polygon.classList.toggle("go-rest-down");
        
            setTimeout(() => {
              elypseContent2.classList.toggle("go-down2-elypse");
            }, 500);
        
            booleanElypse = 1;
            onlyOne = 1;
        }

        buttonElypse.classList.toggle("rotateButton");

    } else if(onlyOne == 1 && booleanElypse == 1){

      const elypseRadio = document.getElementById('elypse-radio').value = undefined;

      const resultPerimeter = document.getElementById('elypse-result-perimeter').innerText = '';
      const resultArea = document.getElementById('elypse-result-area').innerText = '';
      const resultDiametro = document.getElementById('elypse-result-diametro').innerText = '';

        elypseContent2.classList.toggle("go-down2-elypse");
        
            setTimeout(() => {
              elypseContent1.classList.toggle("go-down1-elypse");
        
              cube.classList.toggle("go-rest-down");
              polygon.classList.toggle("go-rest-down");
            }, 500);
        
            booleanElypse = 0;
            onlyOne = 0;
            buttonElypse.classList.toggle("rotateButton");

    } else {
        const title = document.getElementById('elypse-title');
        title.innerText = 'Cierre la otra calculadora';
        title.classList.toggle('color-red');

        setTimeout(() => {
            title.innerText = 'Calculadora de Circunferencias';
            title.classList.toggle('color-red');

        }, 1500);
    }
  
});

buttonPolygon.addEventListener("click", () => {
  if(onlyOne == 0){
      if (booleanPolygon == 0) {
          polygonContent1.classList.toggle("go-down1-polygon");
      
          cube.classList.toggle("go-rest-down");
      
          setTimeout(() => {
            polygonContent2.classList.toggle("go-down2-polygon");
          }, 500);
      
          booleanPolygon = 1;
          onlyOne = 1;
      }

      buttonPolygon.classList.toggle("rotateButton");

  } else if(onlyOne == 1 && booleanPolygon == 1){

    const polygonLado = document.getElementById('polygon-lado').value = undefined;
    const polygonBase = document.getElementById('polygon-base').value = undefined;

    const resultPerimeter = document.getElementById('polygon-result-perimeter').innerText = '';
    const resultHigh = document.getElementById('polygon-result-high').innerText = '';
    const resultArea = document.getElementById('polygon-result-area').innerText = '';
    
      polygonContent2.classList.toggle("go-down2-polygon");
      
          setTimeout(() => {
            polygonContent1.classList.toggle("go-down1-polygon");
      
            cube.classList.toggle("go-rest-down");
          }, 500);
      
          booleanPolygon = 0;
          onlyOne = 0;
          buttonPolygon.classList.toggle("rotateButton");

  } else {
      const title = document.getElementById('polygon-title');
      title.innerText = 'Cierre la otra calculadora';
      title.classList.toggle('color-red');

      setTimeout(() => {
          title.innerText = 'Calculadora de Triángulos';
          title.classList.toggle('color-red');

      }, 1500);
  }

});

buttonCube.addEventListener("click", () => {
  if (onlyOne == 0) {

    if (booleanCube == 0) {
      cubeContent1.classList.toggle("go-down1-cube");

      setTimeout(() => {
        cubeContent2.classList.toggle("go-down2-cube");
      }, 500);

      booleanCube = 1;
      onlyOne = 1;
    }

    buttonCube.classList.toggle("rotateButton");

  } else if (onlyOne == 1 && booleanCube == 1) {

    document.getElementById('cube-lado').value = undefined;
    document.getElementById('cube-result-perimeter').innerText = '';
    document.getElementById('cube-result-area').innerText = '';

    cubeContent2.classList.toggle("go-down2-cube");

      setTimeout(() => {
        cubeContent1.classList.toggle("go-down1-cube");

      }, 500);

      booleanCube = 0;
      onlyOne = 0;
      buttonCube.classList.toggle("rotateButton");

  } else {
      const title = document.getElementById('cube-title');
      title.innerText = 'Cierre la otra calculadora';
      title.classList.toggle('color-red');

      setTimeout(() => {
        title.innerText = 'Calculadora de Cuadrados';
        title.classList.toggle('color-red');

      }, 1500);
  }

 
});
