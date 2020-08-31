let flagToggleMenuVisible = false;
let hamburgerMenu = document.getElementById('btn-menu-extra')
let closeToggleMenu = document.getElementById('btn-close-toggle-menu')

hamburgerMenu.addEventListener('click', ()=>{
    document.getElementById('toggle-nav-menu').style.display = 'flex';
    flagToggleMenuVisible = true;
})
closeToggleMenu.addEventListener('click', ()=>{
    document.getElementById('toggle-nav-menu').style.display = 'none';
    flagToggleMenuVisible = false;
})