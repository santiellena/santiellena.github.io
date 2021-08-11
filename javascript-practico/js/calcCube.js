const perimeterCube = (lado) => lado * 4; 

const areaCube = (lado) => lado * lado;

const calcCube = () => {
    const lado = document.getElementById('cube-lado').value;

    const perimeter = perimeterCube(lado);
    const area = areaCube(lado);

    if(lado != null){
        
        document.getElementById('cube-result-perimeter').innerText = `${perimeter.toFixed(1)} cm`;
        document.getElementById('cube-result-area').innerText = `${area.toFixed(1)} cm`;
    }
};