const applyDiscountCalc = (original, descuentoPorcentual) => (original * (100 - descuentoPorcentual)) / 100;

let discount;

const applyPriceDiscount = async () => {
    const price = document.getElementById('price-input').value;

    const finalPrice = applyDiscountCalc(price, discount);

    const result = document.getElementById('result');

    result.innerText = finalPrice;
};

const cupons = [
    {
        name: 'd10',
        value: 10,
    },
    {
        name: 'd15',
        value: 15,
    },
    {
        name: 'd25',
        value: 25,
    },
    {
        name: 'd50',
        value: 50,
    },
    {
        name: 'santiellena',
        value: 70,
    },
    {
        name: 'javascript',
        value: 99,
    },
];

const validateDiscount = () => {
    const cuponPersonalizado = document.getElementById('cupon').value;
    
    const cuponFinded = cupons.find(cupon => cupon.name === cuponPersonalizado);

    if(cuponFinded != undefined){
            
       discount = cuponFinded.value;
    }
};

const applyPersonalizedCupon = () => {

    const inputCuponPersonalized = document.getElementById('cupon').value;

    if(inputCuponPersonalized == '' || inputCuponPersonalized == undefined){

        
    } else {
        
        const cuponFinded = cupons.find(cupon => cupon.name === inputCuponPersonalized.toLowerCase() );
        
        if(cuponFinded != undefined){
            
            discount = cuponFinded.value;
            console.log(cuponFinded)
            applyPriceDiscount();
        };

    };
};

const applyCupon = () => {
    const form = document.getElementById('chooseDiscount');
    const price = document.getElementById('price-input').value;

    const data = new FormData(form);

    let discountName;

    for (const entry of data){
        discountName = entry[1];
    };

    const cuponFinded = cupons.find(cupon => cupon.name === discountName);

    if(cuponFinded != undefined && price != undefined){
            
        discount = cuponFinded.value;

        applyPriceDiscount();
    };
};