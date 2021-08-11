const logo = document.getElementById('main-logo');

const goToMainPage = () => {

    document.location.target = "_self";
    document.location.href='./index.html';
};

logo.addEventListener('click', () => {

    goToMainPage();
});