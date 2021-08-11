const openRectangle = () => {
    rectangleContent1.classList.toggle("go-down1-rectangle");

      elypse.classList.toggle("go-rest-down");
      cube.classList.toggle("go-rest-down");
      polygon.classList.toggle("go-rest-down");

      setTimeout(() => {
        rectangleContent2.classList.toggle("go-down2-rectangle");
      }, 500);

      booleanRectangle = 1;
      onlyOne = 1;

    buttonRectangle.classList.toggle("rotateButton");
};

const closeRectangle = () => {
    const valueLado = (document.getElementById("rectangle-lado").value =
      undefined);
    const valueBase = (document.getElementById("rectangle-base").value =
      undefined);
    const resultPerimeter = (document.getElementById(
      "rectangle-result-perimeter"
    ).innerText = "");
    const resultArea = (document.getElementById(
      "rectangle-result-area"
    ).innerText = "");

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
}

const openElypse = () => {
    elypseContent1.classList.toggle("go-down1-elypse");

      cube.classList.toggle("go-rest-down");
      polygon.classList.toggle("go-rest-down");

      setTimeout(() => {
        elypseContent2.classList.toggle("go-down2-elypse");
      }, 500);

      booleanElypse = 1;
      onlyOne = 1;

      buttonElypse.classList.toggle("rotateButton");
}

const closeElypse = () => {
    const elypseRadio = (document.getElementById("elypse-radio").value =
      undefined);

    const resultPerimeter = (document.getElementById(
      "elypse-result-perimeter"
    ).innerText = "");
    const resultArea = (document.getElementById(
      "elypse-result-area"
    ).innerText = "");
    const resultDiametro = (document.getElementById(
      "elypse-result-diametro"
    ).innerText = "");

    elypseContent2.classList.toggle("go-down2-elypse");

    setTimeout(() => {
      elypseContent1.classList.toggle("go-down1-elypse");

      cube.classList.toggle("go-rest-down");
      polygon.classList.toggle("go-rest-down");
    }, 500);

    booleanElypse = 0;
    onlyOne = 0;
    buttonElypse.classList.toggle("rotateButton");
};

const openPolygon = () => {
    polygonContent1.classList.toggle("go-down1-polygon");

      cube.classList.toggle("go-rest-down");

      setTimeout(() => {
        polygonContent2.classList.toggle("go-down2-polygon");
      }, 500);

      booleanPolygon = 1;
      onlyOne = 1;

      buttonPolygon.classList.toggle("rotateButton");
};

const closePolygon = () => {
    const polygonLado = (document.getElementById("polygon-lado").value =
      undefined);
    const polygonBase = (document.getElementById("polygon-base").value =
      undefined);

    const resultPerimeter = (document.getElementById(
      "polygon-result-perimeter"
    ).innerText = "");
    const resultHigh = (document.getElementById(
      "polygon-result-high"
    ).innerText = "");
    const resultArea = (document.getElementById(
      "polygon-result-area"
    ).innerText = "");

    polygonContent2.classList.toggle("go-down2-polygon");

    setTimeout(() => {
      polygonContent1.classList.toggle("go-down1-polygon");

      cube.classList.toggle("go-rest-down");
    }, 500);

    booleanPolygon = 0;
    onlyOne = 0;
    buttonPolygon.classList.toggle("rotateButton");
};

const openCube = () => {
    cubeContent1.classList.toggle("go-down1-cube");

      setTimeout(() => {
        cubeContent2.classList.toggle("go-down2-cube");
      }, 500);

      booleanCube = 1;
      onlyOne = 1;

    buttonCube.classList.toggle("rotateButton");
};

const closeCube = () => {
    document.getElementById("cube-lado").value = undefined;
    document.getElementById("cube-result-perimeter").innerText = "";
    document.getElementById("cube-result-area").innerText = "";

    cubeContent2.classList.toggle("go-down2-cube");

    setTimeout(() => {
      cubeContent1.classList.toggle("go-down1-cube");
    }, 500);

    booleanCube = 0;
    onlyOne = 0;
    buttonCube.classList.toggle("rotateButton");
};