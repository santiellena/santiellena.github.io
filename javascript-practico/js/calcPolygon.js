const perimeterPolygon = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

const highPolygon = (lado, base) => Math.sqrt( (Math.pow( lado, 2 )) - (Math.pow(( base / 2 ), 2)));

const areaPolygon = (base, altura) => (base * altura) / 2;

const calcPolygon = () => {
    const lado = document.getElementById('polygon-lado').value;
    const base = document.getElementById('polygon-base').value;

    const perimeter = perimeterPolygon(parseFloat(lado), parseFloat(lado), parseFloat(lado));
    const high = highPolygon(parseFloat(lado), parseFloat(base));
    const area = areaPolygon(parseFloat(base), high);

    const resultPerimeter = document.getElementById('polygon-result-perimeter');
    const resultArea = document.getElementById('polygon-result-area');
    const resultHigh = document.getElementById('polygon-result-high');

    if(lado != null && base != null){

        setTimeout(() => {

            resultPerimeter.innerText = `${perimeter} cm`;
            resultArea.innerText = `${area.toFixed(1)} cm`;
            resultHigh.innerText = `${high.toFixed(1)} cm`;

        }, 1000)

    }
}