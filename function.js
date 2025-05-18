const navBar = document.querySelector('#navbar');
const searchBar = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const hamBurger = document.querySelector('.hamburger');
const hamBurgerIcon = document.querySelector('.fa-bars');

searchIcon.addEventListener('click', () => {
    searchBar.style.visibility = `visible`;
    searchBar.style.display = `block`;
    searchBar.focus();

    if (searchBar.value !== '') {
        window.location.href = `index.html`;
    }
});

hamBurger.addEventListener('click', ()=>{
    const isResponsive = navBar.classList.contains('responsive');
    if(!isResponsive){
        navBar.classList.add('responsive');
        hamBurgerIcon.classList.replace('fa-bars', 'fa-xmark');
    }else{
        navBar.classList.remove('responsive');
        setTimeout ( ()=>{
            hamBurgerIcon.classList.replace('fa-xmark', 'fa-bars');
        }, 400);
    }
});