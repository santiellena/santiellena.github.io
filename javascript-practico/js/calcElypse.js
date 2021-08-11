const PI = Math.PI;
const diametroElypse = (radio) => radio * 2;

const perimeterElypse = (radio) => diametroElypse(radio) * PI;
const areaElypse = (radio) => ( radio * radio ) * PI;

const calcElypse = () => {
    const elypseRadio = document.getElementById('elypse-radio').value;

    const resultPerimeter = document.getElementById('elypse-result-perimeter');
    const resultArea = document.getElementById('elypse-result-area');
    const resultDiametro = document.getElementById('elypse-result-diametro');

    if(elypseRadio != null){

        setTimeout(() => {
            const diametro = diametroElypse(elypseRadio);
            const perimeter = perimeterElypse(elypseRadio);
            const area = areaElypse(elypseRadio);

            resultPerimeter.innerText = `${perimeter.toFixed(1)} cm`;
            resultArea.innerText = `${area.toFixed(1)} cm`;
            resultDiametro.innerText = `${diametro.toFixed(1)} cm`;

        }, 1000)

    }
}
