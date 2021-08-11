const figuresPage = document.getElementById('figuresPage');
const percentagesPage = document.getElementById('percentagesPage');


const goToFiguresPage = () => {

    document.location.target = "_self";
    document.location.href='./figures.html';
}

figuresPage.addEventListener('click', () => {

    goToFiguresPage();
})

const goToPercentagesPage = () => {
    document.location.target = "_self";
    document.location.href='./percentages.html';
}; 

percentagesPage.addEventListener('click', () => {

    goToPercentagesPage();
});

const goToMainPage = () => {

    document.location.target = "_self";
    document.location.href='./index.html';
};