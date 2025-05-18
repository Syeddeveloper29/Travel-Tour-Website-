const searchBar = document.querySelector('.search-bar input');
const searchIcon = document.querySelector('.fa-magnifying-glass');

searchIcon.addEventListener('click', () => {
    searchBar.style.visibility = `visible`;
    searchBar.style.display = `block`;
    searchBar.focus();

    if (searchBar.value !== '') {
        window.location.href = `index.html`;
    }
});

