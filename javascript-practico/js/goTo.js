const figuresPage = document.getElementById('figuresPage');

const goToFiguresPage = () => {

    document.location.target = "_self";
    document.location.href='./figures.html';
}

figuresPage.addEventListener('click', () => {

    goToFiguresPage();
})