

const perimeterRectangle = (lado, base) => (lado * 2) + (base * 2);
const areaRectangle = (lado, base) => lado * base;

const calcRectangle = () => {

    const valueLado = document.getElementById('rectangle-lado').value;
    const valueBase = document.getElementById('rectangle-base').value;
    const resultPerimeter = document.getElementById('rectangle-result-perimeter');
    const resultArea = document.getElementById('rectangle-result-area');
    
    if(valueLado != null && valueBase != null){

        setTimeout(() => {
            const perimeter = perimeterRectangle(valueLado, valueBase);
            const area = areaRectangle(valueLado, valueBase);

            resultPerimeter.innerText = `${perimeter} cm`;
            resultArea.innerText = `${area} cm`;

        }, 1000)

    }
    
};